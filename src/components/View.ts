import React from "react";
import { View, ViewProps } from "react-native";

export interface _ViewProps extends ViewProps {
  id?: string;
  className?: string;
}

const _View = (props: _ViewProps) => React.createElement(View, props);

export default _View;
