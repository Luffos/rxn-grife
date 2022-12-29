import React from "react";
import { Element, ElementCallback } from "../interfaces/Element";
import { ScrollView, View, Text } from "../index";
import { Styled } from "../handler/Styled";

interface iMakeStyleFrom {
  (
    baseElement: any,
    callback?: ElementCallback,
    props?: object
  ): React.ExoticComponent<{
    children?: React.ReactNode;
  }>;
  View(callback: ElementCallback, props?: object): typeof View;
  Text(callback: ElementCallback, props?: object): typeof Text;
  ScrollView(callback: ElementCallback, props?: object): typeof ScrollView;
}

const makeStyleFrom: iMakeStyleFrom = (baseElement, callback, props) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (ScrollView | View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.ScrollView = (callback, props) => Styled<typeof ScrollView>(ScrollView, callback, props);

makeStyleFrom.View = (callback, props) => Styled<typeof View>(View, callback, props);

makeStyleFrom.Text = (callback, props) => Styled<typeof Text>(Text, callback, props);

export default makeStyleFrom as unknown as iMakeStyleFrom;
