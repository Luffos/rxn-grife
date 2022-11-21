import React from "react";
import {
  Text,
  TextComponent,
  TextProps,
  View,
  ViewComponent,
  ViewProps,
} from "react-native";
import { Element } from "./interfaces/Element";

// --------------------------------------------


class _View extends React.Component<Omit<ViewProps, "style">> {}
export const StyledFromView = (callback: (el: Element) => void) => Styled(callback) as unknown as typeof _View;

class _Text extends React.Component<Omit<TextProps, "style">> {}
export const StyledFromText = (callback: (el: Element) => void) => Styled(callback) as unknown as typeof _Text;

// --------------------------------------------

const Styled = (callback: (el: Element) => void) =>
  class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
      console.log(props.children);
    }

    render(): React.ReactNode {
      return <Text>{(this.props as any).children}</Text>;
    }
  };
