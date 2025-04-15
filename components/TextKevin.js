import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TextKevin({ info, text, text2, text3 }) {
    return (
        <View style={styles.card}>
            <Text>{info}</Text>

            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>{text2}</Text>
            <Text style={styles.text}>{text3}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        flexDirection: "row",
        marginVertical: 10,
        width: 300,
        gap: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        borderWidth: 3,
        borderColor: "#000",
        width: 40,
        fontWeight: "bold",
        fontSize: 20,
        height: 30,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});