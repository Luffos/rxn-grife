import React from "react";
import { Text, View } from "react-native";

import type { ElementCallback } from "../interfaces/Element";

export const Styled = (
  WrapperElement: any,
  callback: ElementCallback
) =>
  class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
      console.log(props);
    }

    render(): React.ReactNode {
      return <WrapperElement {...this.props}/>;
    }
  };
