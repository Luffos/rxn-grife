import React from "react";
import { Text } from "react-native";

import type { ElementCallback } from "../interfaces/Element";

export const Styled = (callback: ElementCallback) =>
  class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
      console.log(props);
    }

    render(): React.ReactNode {
      return (this.props as any).children;
    }
  };
