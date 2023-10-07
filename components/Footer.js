import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        marginTop: 30,
        padding: 16,
        backgroundColor: "#f6f6f6",
        paddingBottom: insets.bottom,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          color: "black",
          textAlign: "center",
        }}
      >
        All rights reserved by Little Lemon, 2023
      </Text>
    </View>
  );
}
