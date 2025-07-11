import { useEffect, useState } from "react"
import { Player, TeamResponse } from "../services/types/team"
import { apiService } from "../services/api.service"

export const useGetPlayers = (id: number) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string>()
    const [data, setData] = useState<Player[]>([])

    useEffect(() => {
        setIsLoading(true)
        apiService.get<TeamResponse>(`teams/${id}`)
            .then(response => {
                if (response.status !== 200) {
                    setError('Failed to get players')
                    return
                }
                setData(response.data.squad)
            })
            .catch(() => {
                setError('Failed to get players')
                return
            })
        setIsLoading(false)
    }, [id])

    return { data, isLoading, error }
}