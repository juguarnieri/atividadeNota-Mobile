
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
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  text: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 1,
  },
  cardDesc: {
    marginTop: 10,
    fontSize: 14,
    color: "#555",
  },
  
});

