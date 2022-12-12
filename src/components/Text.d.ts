import React from "react";
import { Text, TextProps } from "react-native";
export interface _TextProps extends TextProps {
    id?: string;
    className?: string;
}
declare const _Text: (props: _TextProps) => React.CElement<TextProps, Text>;
export default _Text;
