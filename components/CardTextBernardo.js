import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardBernardo({ title}) {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        width: 300,
        border: "2px solid black",
        alignItems: "center",
    },
    title: {
        fontSize: 16,
        textAlign: "center",
        color: "black",
    },
});