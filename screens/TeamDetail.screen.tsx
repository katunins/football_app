import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import { RootStackParamList } from '../services/types/navigation';
import { useLayoutEffect, useState } from 'react';
import { Match, Player } from '../services/types/team';
import { useGetPlayers } from './hooks/useGetPlayers';
import { TeamPlayer } from '../components/TeamPlayer';
import { PlayerList } from '../components/PlayersList';
import { MatchesList } from '../components/MathesList';

export const TeamDetailScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'TeamDetail'>>();
    const navigation = useNavigation();

    const { id, name } = route.params;


    const [matches, setMatches] = useState<Match>([])


    useLayoutEffect(() => {
        navigation.setOptions({ title: name });
    }, [navigation, name]);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Players:</Text>
            <PlayerList teamId={id} />

            <Text style={styles.title}>Future matches:</Text>
            <MatchesList teamId={id} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingHorizontal: 8, paddingBottom: 32, paddingTop: 12 },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8
    }
})