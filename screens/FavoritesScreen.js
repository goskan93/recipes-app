import React from "react";
import { Text } from "react-native";
import MealList from "../components/MealList";
import { MEALS } from "../data/data";

const FavoritesScreen = (props) => {
  const favMeals = MEALS.filter((x) => x.id === "m1" || x.id === "m2");
  return <MealList navigation={props.navigation} data={favMeals} />;
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>Favorites!</Text>,
  };
};

export default FavoritesScreen;
