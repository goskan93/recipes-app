import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/colors";
const ButtonHeader = (props) => {
  return <HeaderButton {...props} IconComponent={Ionicons} iconSize={23} color="#fff" />;
};

export default ButtonHeader;
