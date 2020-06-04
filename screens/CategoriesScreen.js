import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/data";
import CategoryGrid from "../components/CategoryGrid";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";
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

CategoriesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>Meal Categories</Text>,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoriesScreen;
