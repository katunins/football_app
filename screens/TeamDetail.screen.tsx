import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text } from "react-native"
import { RootStackParamList } from '../services/types/navigation';
import { useLayoutEffect } from 'react';
import { PlayerList } from '../components/PlayersList';
import { MatchesList } from '../components/MathesList';

export const TeamDetailScreen = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'TeamDetail'>>();
    const navigation = useNavigation();

    const { id, name } = route.params;

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