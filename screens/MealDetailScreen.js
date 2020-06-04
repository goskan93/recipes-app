import React, { useEffect, useCallback } from "react";
import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavourite } from "../store/actions/meals";
import { Colors } from "react-native/Libraries/NewAppScreen";
const ListEl = (props) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
};

const MealDetailScreen = (props) => {
  const { navigation } = props;
  const id = props.navigation.getParam("id");
  const MEALS = useSelector((store) => store.meals.meals);
  // const isFav = useSelector((store) => store.meals.favoriteMeals.some((x) => x.id === id));
  const meal = MEALS.find((x) => x.id === id);

  const dispatch = useDispatch();
  const toggleFav = useCallback(() => {
    dispatch(toggleFavourite(id));
  }, [toggleFavourite, dispatch]);

  useEffect(() => {
    navigation.setParams({ toggleFav: toggleFav });
  }, [toggleFav]);

  // useEffect(() => {
  //   navigation.setParams({ isFav: isFav });
  // }, [isFav]);

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
  const title = navigationData.navigation.getParam("title");
  const toggleFav = navigationData.navigation.getParam("toggleFav");
  const isFav = navigationData.navigation.getParam("isFav");
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>{title}</Text>,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item title="Favorite" iconName={isFav ? "ios-star" : "ios-star-outline"} onPress={() => toggleFav()} />
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
