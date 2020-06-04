import React from "react";
import { Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";
const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((x) => x.id === "m1" || x.id === "m2");
  return <MealList navigation={props.navigation} data={favMeals} />;
};

FavoritesScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>Favorites</Text>,
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

export default FavoritesScreen;
