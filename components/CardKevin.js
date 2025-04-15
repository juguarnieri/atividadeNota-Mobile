import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardKevin({ info, text }) {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>

            <Text>{info}❤️</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        width: 200,
        height: 50,
        alignItems: "center",
        gap: 20,
    },
    text: {
        height: 40,
        width: 100,
        backgroundColor: "gray",
        marginLeft: 20,
        borderRadius: 10,
        borderWidth: 3,
    }
});