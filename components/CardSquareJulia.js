import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CardSquareJulia({ image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47%',
    height: 130,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,

  },
  image: {
    width: '100%',
    height: 130,
    borderRadius: 8,

  },

});
