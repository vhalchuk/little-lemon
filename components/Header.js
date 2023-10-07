import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        padding: 16,
        paddingTop: insets.top + 16,
        backgroundColor: "#e0ffab",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          color: "black",
          textAlign: "center",
        }}
      >
        Little Lemon Restaurant
      </Text>
    </View>
  );
}