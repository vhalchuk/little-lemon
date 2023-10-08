import { Image, StyleSheet, Text, View } from "react-native";
import logo from "../assets/logo.png";

export default function Welcome() {
  return (
    <>
      <View style={styles.titleContainer}>
        <Image style={styles.image} source={logo} />
        <Text style={styles.title}>Little Lemon</Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text style={styles.subtitle}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 16,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 16,
  },
  image: {
    height: 64,
    width: 64,
    resizeMode: "contain",
  },
  title: {
    fontSize: 32,
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
  },
});
