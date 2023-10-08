import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MenuItems from "./components/MenuItems";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Header />
      <MenuItems />
      <Footer />
    </SafeAreaProvider>
  );
}
