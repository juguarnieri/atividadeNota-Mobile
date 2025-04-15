import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function CardImageTopJulia({ title, image, description }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.cardDesc}>{description}</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'black',
    overflow: 'hidden',
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: '100%',
    height: 320,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 16,
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',

  },
  text:{
      color: 'white',
    fontSize: 20, 
    marginBottom:8,
    textAlign: 'center',
    fontWeight: 'bold',

  },
  cardDesc: {
    fontSize: 14,
    color: "white",
    width: 300,
    marginBotton: 12,
    textAlign: "justify"
  },
  
});
