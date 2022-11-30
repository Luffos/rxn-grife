import React from "react";
import { Text, View } from "react-native";
import type { Element } from "../interfaces/Element";

import type { ElementCallback } from "../interfaces/Element";

const HandleStyle = (WrapperElement: any, props: any, callback: any) => {
  const el: Element = {
    style: {
      set: (style) =>
        Object.assign(props.style ?? {}, {
          ...style,
          ...(props.style ?? {}),
        }),
    },
    type: WrapperElement.render.displayName,
    children: [],
  };

  callback(el);
};

export const Styled = (WrapperElement: any, callback: ElementCallback) =>
  class Styled extends React.Component {
    constructor(props: {} | Readonly<{}> | any) {
      super(props);
      console.log("props", props);
      HandleStyle(WrapperElement, props, callback);
    }

    UNSAFE_componentWillUpdate(
      nextProps: Readonly<{}>,
      nextState: Readonly<{}>,
      nextContext: any
    ): void {
      HandleStyle(WrapperElement, nextProps, callback);
    }

    render(): React.ReactNode {
      return <WrapperElement {...this.props} />;
    }
  };
