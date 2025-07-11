import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TeamPlayer } from "./TeamPlayer";
import { useGetPlayers } from "../hooks/useGetPlayers";

export const PlayerList: FC<{ teamId: number }> = ({ teamId }) => {

    const { data, isLoading, error } = useGetPlayers(teamId)


    if (error) {
        return <Text style={styles.errorText}>{error}</Text>
    }

    if (isLoading) {
        return <Text>Loading ...</Text>
    }
    return (
        <View style={styles.container}>
            {data.map(player => <TeamPlayer key={player.id} {...player} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 4,
    },
    errorText: {
        color: 'red'
    }
})