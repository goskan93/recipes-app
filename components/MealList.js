import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
  const favMeals = useSelector((store) => store.meals.favoriteMeals);
  const renderMealItem = ({ item }) => {
    const isFav = favMeals.some((x) => x.id === item.id);

    return (
      <MealItem
        onPress={() => props.navigation.navigate("MealDetail", { id: item.id, title: item.title, isFav: isFav })}
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        image={item.imageUrl}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList data={props.data} keyExtractor={(item) => item.id} renderItem={renderMealItem} style={{ width: "100%" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
