import React from "react";

import type { ElementCallback } from "../interfaces/Element";
import { generateProps } from "./PropsGenerator";

export function Styled<T>(
  WrapperElement: any,
  callback: ElementCallback,
) {
  return class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
    }

    render(): React.ReactNode {
      return (
        <WrapperElement
          {...generateProps(
            WrapperElement,
            this.props,
            callback
          )}
        />
      );
    }
  } as T;
}
