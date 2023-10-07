import { ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WelcomeScreen from "./components/WelcomeScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView>
        <WelcomeScreen />
      </ScrollView>
      <Footer />
    </SafeAreaProvider>
  );
}
