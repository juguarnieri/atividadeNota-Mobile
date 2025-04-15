// src/pages/CaioDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function CaioDetail() {
  return (
    <View style={styles.container}>
      <Card
    title="Caio Lacerda"
    image={require("../assets/CaioLacerda.jpg")}
    description="Olá meu nome é Caio Lacerda, sou aluno do Senai/Sesi, atualmente cursando o ensino médio e o curso de desenvolvimento de sistema, tenho 17 anos, moro em Valinhos, e curto FullStack"
      />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})