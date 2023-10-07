import { ScrollView, Text, View } from "react-native";

const menuItemsToDisplay =
  "Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta";

export default function MenuItems() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        style={{
          paddingHorizontal: 40,
          paddingVertical: 40,
        }}
      >
        <Text style={{ color: "black", fontSize: 40, flexWrap: "wrap" }}>
          View Menu
        </Text>
        <Text style={{ color: "black", fontSize: 36 }}>
          {menuItemsToDisplay}
        </Text>
      </ScrollView>
    </View>
  );
}
