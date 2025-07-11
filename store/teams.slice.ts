import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiService } from '../services/api.service';
import { Team } from './types';

export const fetchTeams = createAsyncThunk(
  'teams/fetchTeams',
  async () => {
    const response = await apiService.get<Team[]>('/teams');
    return response.data; // адаптируйте под структуру ответа API
  }
);

const teamsSlice = createSlice({
  name: 'teams',
  initialState: {
    items: [] as Team[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTeams.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeams.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTeams.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Ошибка загрузки';
      });
  },
});

export default teamsSlice.reducer;