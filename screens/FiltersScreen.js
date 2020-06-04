import React, { useState, useEffect, useCallback } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ButtonHeader from "../components/ButtonHeader";
import Colors from "../constants/colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";
const FilterSwitch = (props) => (
  <View style={styles.filterContainer}>
    <Text>{props.title}</Text>
    <Switch trackColor={{ true: Colors.primaryColor }} thumbColor={Colors.primaryColor} {...props} />
  </View>
);

const FiltersScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Avaliable Filters / Restrictions</Text>
      <FilterSwitch title="Gluten Free" value={isGlutenFree} onValueChange={(newVal) => setIsGlutenFree(newVal)} />
      <FilterSwitch title="Vegan" value={isVegan} onValueChange={(newVal) => setIsVegan(newVal)} />
      <FilterSwitch title="Vegetarian" value={isVegetarian} onValueChange={(newVal) => setIsVegetarian(newVal)} />
      <FilterSwitch title="Lactose Free" value={isLactoseFree} onValueChange={(newVal) => setIsLactoseFree(newVal)} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 5,
  },
});

FiltersScreen.navigationOptions = (navData) => {
  return {
    headerTitle: () => <Text style={{ textAlign: "center", color: "#fff" }}>Filters</Text>,
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
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={ButtonHeader}>
        <Item title="Save" iconName="ios-save" onPress={() => navData.navigation.getParam("save")()} />
      </HeaderButtons>
    ),
  };
};

export default FiltersScreen;
