import React from "react";
import type { Element, ElementCallback } from "../interfaces/Element";
import { ScrollView, View, Text } from "../index";
import { Styled } from "src/handler/Styled";

interface _MakeStyleFrom {
  (baseElement: any): React.ExoticComponent<{
    children?: React.ReactNode;
  }>;
  View(callback: ElementCallback): typeof View;
  Text(callback: ElementCallback): typeof Text;
  ScrollView(callback: ElementCallback): typeof Text;
}

const makeStyleFrom = (baseElement: any) => {
  console.error(
    "makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (ScrollView | View | Text)"
  );
  return React.Fragment;
};

makeStyleFrom.ScrollView = (callback: ElementCallback) =>
  Styled(ScrollView, callback) as unknown as typeof ScrollView;

makeStyleFrom.View = (callback: ElementCallback) =>
  Styled(View, callback) as unknown as typeof View;

makeStyleFrom.Text = (callback: ElementCallback) =>
  Styled(Text, callback) as unknown as typeof Text;

export default makeStyleFrom as unknown as _MakeStyleFrom;
