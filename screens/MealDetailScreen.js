import React from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { MEALS } from "../data/data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";

const ListEl = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const id = props.navigation.getParam("id");
  const meal = MEALS.find((x) => x.id === id);

  return (
    <ScrollView>
      <Image source={{ uri: meal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.text}>{meal.duration}m</Text>
        <Text style={styles.text}>{meal.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{meal.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {meal.ingredients.map((ing) => (
        <ListEl key={ing}>{ing}</ListEl>
      ))}
      <Text style={styles.title}>Steps</Text>
      {meal.steps.map((ing) => (
        <ListEl key={ing}>{ing}</ListEl>
      ))}
    </ScrollView>
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
  text: {
    fontFamily: "open-sans",
  },
  image: {
    width: "100%",
    height: 200,
  },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    textAlign: "center",
  },
  listItem: {
    marginVertical: 5,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealDetailScreen;
