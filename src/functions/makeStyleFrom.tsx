import React from "react";
import { View, Text } from "react-native";
import type { Element } from "../interfaces/Element";

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.View = (callback: (el: Element) => void) => () => {
  return React.createElement(
    View,
    { style: { width: 100, height: 100, backgroundColor: `green` } },
    []
  );
};

makeStyleFrom.Text = (callback: (el: Element) => void) => () => {
  return React.createElement(
    View,
    { style: { width: 100, height: 100, backgroundColor: `green` } },
    []
  );
};

export default makeStyleFrom;
