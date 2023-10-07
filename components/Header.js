import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Header() {
  const insets = useSafeAreaInsets();

  return (
    <View style={getContainerStyles(insets.top + 16)}>
      <Text style={styles.text}>Little Lemon Restaurant</Text>
    </View>
  );
}

export const getContainerStyles = (paddingTop) => ({
  padding: 16,
  paddingTop,
  backgroundColor: "#e0ffab",
});

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    color: "black",
    textAlign: "center",
  },
});
