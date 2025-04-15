// CardDownload.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function CardFullCaio({ title,subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <div style={styles.texts}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      </div>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    marginBottom: 40,
    border: "2px solid black",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 6,
  },
  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 10,
  },
  subTitle: {
    fontWeight: 'regular',
    fontSize: 10,
  },
  downloadButton: {
    padding: 6,
    display: "flex",
  },
  downloadText: {
    color: 'black',
    fontSize: 30,
    marginLeft: 180,
  },
  texts: {
    display:"flex",
    flexDirection:"column"
  },
});