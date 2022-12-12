import React from "react";
import { View, ViewProps } from "react-native";
export interface _ViewProps extends ViewProps {
    id?: string;
    className?: string;
}
declare const _View: (props: _ViewProps) => React.CElement<ViewProps, View>;
export default _View;
