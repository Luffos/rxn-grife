import React from "react";
import {
  ScrollView,
  Constructor,
  ScrollViewProps,
  ScrollResponderMixin,
} from "react-native";

export interface _ScrollViewProps extends ScrollViewProps {
  id?: string;
  className?: string;
}

class ScrollViewComponent extends React.Component<_ScrollViewProps> {}
const _ScrollView = ScrollView as Constructor<ScrollResponderMixin> &
  typeof ScrollViewComponent;

export default _ScrollView;
