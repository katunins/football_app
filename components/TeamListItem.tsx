import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Team } from '../services/types/team';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../services/types/navigation';

export const TeamListItem: React.FC<{ team: Team }> = ({ team }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity onPress={() => navigation.navigate('TeamDetail', { id: team.id, name: team.name })}>
            <View style={styles.itemContainer}>
                <Image source={{ uri: team.crest }} style={styles.logo} />
                <View style={styles.infoContainer}>
                    <Text style={styles.teamName}>{team.name}</Text>
                    <Text style={styles.teamShort}>{team.shortName}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    logo: {
        width: 40,
        height: 40,
        marginRight: 16,
        resizeMode: 'contain',
    },
    infoContainer: {
        flex: 1,
    },
    teamName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    teamShort: {
        fontSize: 14,
        color: '#666',
    },
}); 