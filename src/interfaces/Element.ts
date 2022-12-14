import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type IndividualStyle = Parameters<
  <T>(
    Key: Extract<keyof ViewStyle | keyof TextStyle | keyof ImageStyle, string>,
    Value: string | number
  ) => void
>;

export interface Element {
  type: string | undefined;
  style: {
    /**
     * Set style for element (x, y) or object ({x1: y1, x2: y2})
     */
    set: (style: ViewStyle | TextStyle | ImageStyle) => void;
    pushBefore: (style: ViewStyle | TextStyle | ImageStyle) => void;
    pushAfter: (style: ViewStyle | TextStyle | ImageStyle) => void;
  };
  id?: string;
  className?: string;
  children: Array<Element>;
}

export type ElementCallback = (el: Element) => void;
