import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardImageTopJulia({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: "white",
  },
  cardDesc: {
    fontSize: 18,
    color: "white",
    width: 300,
    textAlign: "justify"
  },
  
});
