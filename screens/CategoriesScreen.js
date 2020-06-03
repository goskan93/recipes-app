import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGrid from "../components/CategoryGrid";
const CategoriesScreen = (props) => {
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGrid title={item.title} color={item.color} onPress={() => props.navigation.navigate("CategoryMeals", { id: item.id })} />
      )}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>Meal Categories</Text>,
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
