import React from "react";
import { Text, Constructor, NativeMethods, TextProps } from "react-native";

export interface _TextProps extends TextProps {
  id?: string;
  className?: string;
}

class TextComponent extends React.Component<_TextProps> {}
const _Text = Text as Constructor<NativeMethods> & typeof TextComponent;

export default _Text;
