import React from "react";
import { Text, TextProps } from "react-native";

export interface iProps extends TextProps {
  id?: string;
  className?: string;
}

const _Text = (props: iProps) => React.createElement(Text, props);

export default _Text;
