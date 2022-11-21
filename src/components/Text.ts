import React from "react";
import { Text, TextProps } from "react-native";

export interface _TextProps extends TextProps {
  id?: string;
  className?: string;
};

const _Text = (props: _TextProps) => React.createElement(Text, props);

export default _Text;
