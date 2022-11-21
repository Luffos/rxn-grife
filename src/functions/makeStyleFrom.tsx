import React from "react";
import { StyledFromTextProps, StyledFromViewProps } from "../Styled";
import type { Element } from "../interfaces/Element";

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.View = (callback: (el: Element) => void) => StyledFromViewProps(callback);

makeStyleFrom.Text = (callback: (el: Element) => void) => StyledFromTextProps(callback);

export default makeStyleFrom;
