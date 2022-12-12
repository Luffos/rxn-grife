import React from "react";

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
