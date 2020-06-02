import React from "react";
import { View, StyleSheet } from "react-native";

const FavoritesScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Favourites Screen</Text>
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

export default FavoritesScreen;
