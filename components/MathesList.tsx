import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { MatchItem } from './MatchItem';
import { useGetMathches } from '../hooks/useGetMatches copy';

export const MatchesList: FC<{ teamId: number }> = ({ teamId }) => {

    const { data, isLoading, error } = useGetMathches(teamId)


    if (error) {
        return <Text style={styles.errorText}>{error}</Text>
    }

    if (isLoading) {
        return <Text>Loading ...</Text>
    }

    return data.map((item, index) => <MatchItem key={index} match={item} teamId={teamId} />)
};

const styles = StyleSheet.create({
    errorText: {
        color: 'red'
    },
    loadMore: {
        backgroundColor: '#DDD',
        paddingVertical: 8,
        marginVertical: 12,
        borderRadius: 8
    }
});