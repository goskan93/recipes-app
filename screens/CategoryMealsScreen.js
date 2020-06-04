import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/data";
import { connect } from "react-redux";
import MealList from "../components/MealList";
const CategoryMealsScreen = (props) => {
  const id = props.navigation.getParam("id");
  const meals = props.MEALS.filter((x) => x.categoryIds.indexOf(id) >= 0);

  if (meals.length === 0 || !meals) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>No meals meals found. Change filters!</Text>
      </View>
    );
  }

  return <MealList data={meals} navigation={props.navigation} />;
};
const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "open-sans",
  },
});

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const id = navigationData.navigation.getParam("id");
  const selectedCategory = CATEGORIES.find((x) => x.id === id);
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>{selectedCategory.title}</Text>,
  };
};

const mapStateToProps = ({ meals }) => {
  return {
    MEALS: meals.filteredMeals,
  };
};

export default connect(mapStateToProps)(CategoryMealsScreen);
