import React from "react";
import { Text, TextProps } from "react-native";

interface iProps extends TextProps {
  className: string;
}

const _Text = (props: iProps) => React.createElement(Text, props);

export default _Text;
