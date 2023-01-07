import React from "react";
import { View } from "react-native";
import { textColor, textColor1 } from "../../constants/colors";
import { width } from "../../constants/dimensions";

const Divider = ({style}) => (
  <View
    style={{
        height: 0.5,
        opacity: 1,
        backgroundColor: textColor1,
        width:width,
        marginVertical:25,...style
      }
    }
  />
);

export default Divider;
