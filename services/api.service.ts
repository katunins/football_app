import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_TOKEN, MAIN_HOST } from '../store/consts';

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
        });
        this.axiosInstance.interceptors.request.use(request => {
            request.headers.set('X-Auth-Token', API_TOKEN)
            return request;
        })
        this.axiosInstance.interceptors.response.use(response => {
            console.log(`${response.config.method?.toUpperCase()} ${response.config?.url} status ${response.status}`, response.data);
            return response;
        })
    }

    get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.get<T>(url, config);
    }

    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        return this.axiosInstance.post<T>(url, data, config);
    }
}

export const apiService = new ApiService(MAIN_HOST);