import { FC } from "react";
import { Match } from "../services/types/team";
import { StyleSheet, Text, View } from "react-native";

interface MatchItemProps {
    match: Match;
    teamId: number;
}

export const MatchItem: FC<MatchItemProps> = ({ match, teamId }) => {
    const isHome = match.homeTeam.id === teamId;
    const opponent = isHome ? match.awayTeam : match.homeTeam;
    const date = new Date(match.utcDate).toLocaleString();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{opponent.name}</Text>
            <Text style={styles.date}>{date}</Text>
            <Text style={styles.competition}>{match.competition.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: '#666',
        marginTop: 2,
    },
    competition: {
        color: '#007AFF',
        marginTop: 2,
    },
});