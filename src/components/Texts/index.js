import React from "react";
import {Text} from "react-native";
import styles from "./styles";
export default function Texts({
  children,
  style,
  medium,
  bold,
  regular,
  extrabold
}) {
  return (
    <Text
      style={{...styles.text,...style,
        fontFamily: medium
        ? "Gilroy-Medium"
        : bold
        ? "Gilroy-Bold"
        : regular
        ? "Gilroy-Medium"
        : extrabold
        ? "Gilroy-ExtraBold"
        : "Gilroy-Medium"}}>
      {children}
    </Text>
  );
}
