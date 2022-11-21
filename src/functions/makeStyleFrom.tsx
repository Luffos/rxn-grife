import React from "react";
import { StyledFromText } from "../handler/macros/Text";
import { StyledFromView } from "../handler/macros/View";
import type { Element, ElementCallback } from "../interfaces/Element";

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.View = (callback: ElementCallback) => StyledFromView(callback);

makeStyleFrom.Text = (callback: ElementCallback) => StyledFromText(callback);

export default makeStyleFrom;
