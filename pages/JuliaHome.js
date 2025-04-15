import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import CardImageTopJulia from "../components/CardImageTopJulia";
import CardSquareJulia from "../components/CardSquareJulia";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
      <View style={styles.header}>
  <TouchableOpacity
    style={styles.blackButton}
    activeOpacity={0.7}
    onPress={() => navigation.navigate("JuliaDetail")}
  />
  
  <View style={styles.circleImages}>
    <Image
      source={require("../assets/image.png")}
      style={styles.circleImage}
    />
    <Image
      source={require("../assets/image.png")}
      style={styles.circleImage}
    />
  </View>
</View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>

          <FlatList
            data={[
              { id: 9,  image: require("../assets/image.png") },
              { id: 10, image: require("../assets/image.png") },
            ]}
            renderItem={({ item }) => (
              <CardSquareJulia image={item.image} />
            )}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ paddingBottom: 16 }}
          />
          <CardImageTopJulia
            title="Daisy"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />
          <CardImageTopJulia
            title="Rosalina"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />
                    <CardImageTopJulia
            title="Daisy"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />
          <CardImageTopJulia
            title="Rosalina"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />
                    <CardImageTopJulia
            title="Daisy"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />
          <CardImageTopJulia
            title="Rosalina"
            image={require("../assets/image.png")}
            description="Descrição do Card 4."
          />

<Button
        title="Ver Detalhes de Julia"
        onPress={() => navigation.navigate('JuliaDetail')}
      />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 20,

  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  blackButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
    opacity: 0.8,
  },
  circleImages: {
    flexDirection: "row",
    gap: 10,
  },
  circleImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

});

