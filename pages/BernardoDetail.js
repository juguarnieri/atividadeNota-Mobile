
// src/pages/BernardoDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function BernardoDetail() {
  return (
    <View style={styles.container}>
      <Card
    title="Bernardo Marques"
    image={require("../assets/perfilBernardo.jpg")}
    description="Olá meu nomer é Bernardo Marques, sou aluno do Senai/Sesi, atualmente cursando o ensino médio e o curso de desenvolvimento de sistema, tenho 17 anos, moro em valinhos, estou trabalhando em vinhedo em uma empresa audiovisual, e minha matéria preferida é back-end"
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