import React from "react";
import { StyledFromText, StyledFromView } from "../Styled";
import type { Element } from "../interfaces/Element";

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.View = (callback: (el: Element) => void) => StyledFromView(callback);

makeStyleFrom.Text = (callback: (el: Element) => void) => StyledFromText(callback);

export default makeStyleFrom;
