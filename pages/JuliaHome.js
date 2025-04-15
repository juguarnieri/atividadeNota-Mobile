import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  SafeAreaView,
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
