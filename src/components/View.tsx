import React from "react";
import { View, TextProps } from "react-native";

interface iProps extends TextProps {
  id?: string;
  className?: string;
}

const _Text = (props: iProps) => React.createElement(View, props);

export default _Text;
