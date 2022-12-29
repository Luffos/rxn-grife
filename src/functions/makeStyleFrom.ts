import React from "react";
import { Element, ElementCallback } from "../interfaces/Element";
import { ScrollView, View, Text } from "../index";
import { Styled } from "../handler/Styled";

interface iMakeStyleFrom {
  (baseElement: any, callback?: ElementCallback): React.ExoticComponent<{
    children?: React.ReactNode;
  }>;
  View(callback: ElementCallback): typeof View;
  Text(callback: ElementCallback): typeof Text;
  ScrollView(callback: ElementCallback): typeof ScrollView;
}

const makeStyleFrom: iMakeStyleFrom = (baseElement, callback) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (ScrollView | View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.ScrollView = (callback) =>Styled<typeof ScrollView>(ScrollView, callback);

makeStyleFrom.View = (callback) => Styled<typeof View>(View, callback);

makeStyleFrom.Text = (callback) => Styled<typeof Text>(Text, callback);

export default makeStyleFrom as unknown as iMakeStyleFrom;
