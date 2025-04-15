
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
    borderRadius: 15,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  textContainer: {
    color: 'green',
    fontSize: 14,
    margin: 15,
    marginBottom: 6,
  },
  text: {
    color: "green",
    fontWeight: 'bold',
  },
  cardDesc: {
    fontSize: 14,
    lineHeight: 20,
    color: "black",
  },
  
});

