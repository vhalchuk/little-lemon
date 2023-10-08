import { SectionList, StyleSheet, Text, View } from "react-native";

export default function Menu() {
  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  return (
    <SectionList
      keyExtractor={(item, index) => item + index}
      sections={menuItemsToDisplay}
      renderSectionHeader={renderSectionHeader}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => {
        return (
          <View key={item.id} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.price}</Text>
          </View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  separator: {
    borderBottomWidth: 1,
    borderColor: "#EDEFEE",
  },
  sectionContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "white",
  },
  sectionTitle: {
    color: "black",
    fontSize: 36,
  },
  itemContainer: {
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  itemText: {
    color: "black",
    fontSize: 24,
  },
});

const menuItemsToDisplay = [
  {
    title: "Appetizers",
    data: [
      { name: "Hummus", price: "$5.00" },
      { name: "Moutabal", price: "$5.00" },
      { name: "Falafel", price: "$7.50" },
      { name: "Marinated Olives", price: "$5.00" },
      { name: "Kofta", price: "$5.00" },
      { name: "Eggplant Salad", price: "$8.50" },
    ],
  },
  {
    title: "Main Dishes",
    data: [
      { name: "Lentil Burger", price: "$10.00" },
      { name: "Smoked Salmon", price: "$14.00" },
      { name: "Kofta Burger", price: "$11.00" },
      { name: "Turkish Kebab", price: "$15.50" },
    ],
  },
  {
    title: "Sides",
    data: [
      { name: "Fries", price: "$3.00", id: "11K" },
      { name: "Buttered Rice", price: "$3.00" },
      { name: "Bread Sticks", price: "$3.00" },
      { name: "Pita Pocket", price: "$3.00" },
      { name: "Lentil Soup", price: "$3.75" },
      { name: "Greek Salad", price: "$6.00" },
      { name: "Rice Pilaf", price: "$4.00" },
    ],
  },
  {
    title: "Desserts",
    data: [
      { name: "Baklava", price: "$3.00" },
      { name: "Tartufo", price: "$3.00" },
      { name: "Tiramisu", price: "$5.00" },
      { name: "Panna Cotta", price: "$5.00" },
    ],
  },
];
