import React from "react";
import { View as _View, ViewProps } from "react-native";

export interface _ViewProps extends ViewProps {
  id?: string;
  className?: string;
}

const View = (props: _ViewProps) => <_View {...props} />;

export default View;
