import { Text, StyleSheet, View, FlatList, Button, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { teamsSelector } from '../store/selectors';
import { useCallback, useEffect, useRef, useState } from 'react';
import { fetchTeams, reFetchTeams } from '../store/teams.slice';
import { AppDispatch } from '../store';
import { TeamListItem } from '../components/TeamListItem';

export const TeamsListScreen = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { items, loading, error } = useSelector(teamsSelector);

    const flatListRef = useRef<FlatList>(null)
    const yOffset = useRef<number>(0);

    const loadNextPageHandler = useCallback(() => {
        dispatch(fetchTeams())
    }, [dispatch])

    useEffect(loadNextPageHandler, [loadNextPageHandler]);

    const reloadHandler = useCallback(() => dispatch(reFetchTeams()), [dispatch])


    if (loading) {
        return (
            <View style={styles.center}>
                <Text>Загрузка...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.center}>
                <Text style={styles.errorText}>{error}</Text>
                <Button onPress={reloadHandler} title='Reload' />
            </View>
        );
    }

    return (
        <FlatList
            ref={flatListRef}
            data={items}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={items.length === 0 ? styles.center : undefined}
            onEndReached={loadNextPageHandler}
            onEndReachedThreshold={0.5}
            scrollEventThrottle={15}
            // костыль для отключения автоскрола (не стал тратить время)
            // https://stackoverflow.com/questions/66841920/prevent-flatlist-to-scroll-to-top-on-content-size-changes
            onContentSizeChange={() => { flatListRef.current!.scrollToOffset({ offset: yOffset.current, animated: false }); }}
            onScroll={(e) => { yOffset.current = e.nativeEvent.contentOffset.y; }}
            renderItem={({ item }) => (
                <TeamListItem team={item} />
            )}
            ListEmptyComponent={<Text>Нет команд</Text>}
        />
    );
};

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    errorText: {
        color: 'red',
        fontSize: 16,
    }
});