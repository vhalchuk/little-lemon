import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
  const insets = useSafeAreaInsets();

  return (
    <View style={getContainerStyles(insets.bottom)}>
      <Text style={styles.text}>All rights reserved by Little Lemon, 2023</Text>
    </View>
  );
}

const getContainerStyles = (paddingBottom) => ({
  padding: 16,
  backgroundColor: "#f6f6f6",
  paddingBottom,
});

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
});
