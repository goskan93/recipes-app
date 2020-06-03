import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform } from "react-native";

const CategoryGrid = (props) => {
  let Touchable = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version > 21) {
    Touchable = TouchableNativeFeedback;
  }
  return (
    <View style={styles.item}>
      <Touchable onPress={props.onPress}>
        <View style={{ ...styles.container, backgroundColor: props.color }}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Touchable>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 5,
    padding: 15,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
    textAlign: "right",
  },
});

export default CategoryGrid;
