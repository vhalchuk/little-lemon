import { Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <View style={{ padding: 16 }}>
        <Text style={styles.title}>Welcome to Little Lemon</Text>
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
  title: {
    fontSize: 52,
    color: "black",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 40,
    color: "black",
    textAlign: "center",
  },
});
