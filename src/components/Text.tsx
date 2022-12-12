import React from "react";
import { Text as _Text, TextProps } from "react-native";

export interface _TextProps extends TextProps {
  id?: string;
  className?: string;
}

const Text = (props: _TextProps) => <_Text {...props} />;

export default Text;
