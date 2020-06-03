import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";

const MealDetailScreen = (props) => {
  const id = props.navigation.getParam("id");
  const meal = MEALS.find((x) => x.id === id);

  return (
    <View style={styles.screen}>
      <Text>The Meal Detail Screen</Text>
    </View>
  );
};

MealDetailScreen.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("id");
  const selectedMeal = MEALS.find((x) => x.id === id);
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>{selectedMeal.title}</Text>,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item title="Favorite" iconName="ios-star" onPress={() => {}} />
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

export default MealDetailScreen;
