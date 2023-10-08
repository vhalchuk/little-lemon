import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import Welcome from "./Welcome";
import Menu from "./Menu";

const Tabs = createBottomTabNavigator();

export default function Home() {
  return (
    <Tabs.Navigator
      initialRouteName="Welcome"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Welcome") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Menu") {
            iconName = "ios-list";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Welcome" component={Welcome} />
      <Tabs.Screen name="Menu" component={Menu} />
    </Tabs.Navigator>
  );
}
