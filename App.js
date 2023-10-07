import { StatusBar, View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <Header />
        <Footer />
      </View>
    </SafeAreaProvider>
  );
}
