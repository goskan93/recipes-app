import React from "react";
import { Text } from "react-native";
import { CATEGORIES, MEALS } from "../data/data";
import MealList from "../components/MealList";
const CategoryMealsScreen = (props) => {
  const id = props.navigation.getParam("id");
  const meals = MEALS.filter((x) => x.categoryIds.indexOf(id) >= 0);
  return <MealList data={meals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("id");
  const selectedCategory = CATEGORIES.find((x) => x.id === id);
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>{selectedCategory.title}</Text>,
  };
};

export default CategoryMealsScreen;
