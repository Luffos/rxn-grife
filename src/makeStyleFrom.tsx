import React from "react";
import { View, Text } from "react-native";

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "Not implemented yet. Please, use makeStyleFrom.Component instead. (View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.View = (el: any) => () =>
  React.createElement(
    View,
    { style: { width: 100, height: 100, backgroundColor: `green` } },
    []
  );

makeStyleFrom.Text = (el: any) => () =>
  React.createElement(
    View,
    { style: { width: 100, height: 100, backgroundColor: `green` } },
    []
  );

export default makeStyleFrom;
