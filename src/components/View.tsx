import React from "react";
import { View, Constructor, NativeMethods, ViewProps } from "react-native";

export interface _ViewProps extends ViewProps {
  id?: string;
  className?: string;
}

class ViewComponent extends React.Component<_ViewProps> {}
const _View = View as Constructor<NativeMethods> & typeof ViewComponent;

export default _View;
