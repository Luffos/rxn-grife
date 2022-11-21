import React from "react";
import { View, ViewProps } from "react-native";

interface iProps extends ViewProps {
  id?: string;
  className?: string;
}

const _Text = (props: iProps) => React.createElement(View, props);

export default _Text;
