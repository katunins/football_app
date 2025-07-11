import { useEffect, useState } from "react"
import { Match, MatchResponse } from "../services/types/team"
import { apiService } from "../services/api.service"
import { PAGINATION_LIMIT } from "../store/consts"

export const useGetMathches = (id: number) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()
    const [data, setData] = useState<Match[]>([])

    useEffect(() => {
        setIsLoading(true)
        apiService.get<MatchResponse>(`teams/${id}/matches?status=SCHEDULED`)
            .then(response => {
                if (response.status !== 200) {
                    setError('Failed to get matches')
                    return
                }

                setData(prevState => {
                    return [...prevState, ...response.data.matches]
                })
            })
            .catch(() => {
                setError('Failed to get matches')
                return
            })
        setIsLoading(false)
    }, [id])

    return { data, isLoading, error }
}