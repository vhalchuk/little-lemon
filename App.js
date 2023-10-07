import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ flex: 1 }}>
          <Header />
          <MenuItems />
        </View>
        <Footer />
      </View>
    </SafeAreaProvider>
  );
}
