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
        flexDirection: "row",
        marginVertical: 10,
        width: 280,
        height: 80,
        gap: 20,
        display: "flex",
    },
    text: {
        height: 50,
        width: 60,
        backgroundColor: "gray",
        marginLeft: 20,
        borderRadius: 15,
        borderWidth: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});