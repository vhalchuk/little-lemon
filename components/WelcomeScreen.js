import { Text, View } from "react-native";

export default function WelcomeScreen() {
  return (
    <>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 24,
            color: "black",
            textAlign: "center",
          }}
        >
          Welcome to Little Lemon
        </Text>
      </View>
      <View style={{ padding: 16 }}>
        <Text
          style={{
            fontSize: 18,
            color: "black",
            textAlign: "center",
          }}
        >
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
      </View>
    </>
  );
}
