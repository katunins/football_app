import { FC } from "react";
import { Player } from "../services/types/team";
import { Text, View, StyleSheet } from "react-native";

export const TeamPlayer: FC<Player> = ({ name }) => {
    return (
        <View style={styles.roundedBorder}>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    roundedBorder: {
        borderWidth: 1,
        borderColor: '#AAA', // или любой другой цвет
        borderRadius: 16,    // степень округления
        paddingHorizontal: 12,
        paddingVertical: 3,
        alignSelf: 'flex-start', // чтобы рамка была п
    },
});