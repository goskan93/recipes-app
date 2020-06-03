import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FiltersScreen from "../screens/FiltersScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import Colors from "../constants/colors";
import { Ionicons } from "@expo/vector-icons";

const defaultStackNavOptions = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primaryColor,
    },
    headerTintColor: "#fff",
  },
  // mode: "modal",
};
const Navigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  defaultStackNavOptions
);

const FavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: Navigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.secondaryColor,
    },
  }
);

export default createAppContainer(FavTabNavigator);
