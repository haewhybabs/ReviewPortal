import React from "react";
import { View } from "react-native";
import { colors, textColor, textColor1 } from "../../constants/colors";
import { width } from "../../constants/dimensions";

const Divider = ({style}) => (
  <View
    style={{
        height: 0.5,
        opacity: 1,
        backgroundColor: colors.LIGHT_GREY_08,
  
        marginVertical:25,...style
      }
    }
  />
);

export default Divider;
