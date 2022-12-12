import React, { Children, createElement, createFactory } from "react";
import { Text, View } from "react-native";
import type { Element } from "../interfaces/Element";
import cloneDeep from "lodash/cloneDeep";

import type { ElementCallback } from "../interfaces/Element";
import { generateProps } from "./PropsGenerator";

export const Styled = (WrapperElement: any, callback: ElementCallback) =>
  class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
    }

    render(): React.ReactNode {
      return (
        <WrapperElement
          {...generateProps(WrapperElement, this.props, callback)}
        />
      );
    }
  };
