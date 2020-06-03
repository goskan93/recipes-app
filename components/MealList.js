import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";
import { MEALS } from "../data/data";

const MealList = (props) => {
  const renderMealItem = ({ item }) => {
    return (
      <MealItem
        onPress={() => props.navigation.navigate("MealDetail", { id: item.id })}
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
