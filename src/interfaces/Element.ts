import { ViewStyle, TextStyle, ImageStyle } from "react-native";

/* type IndividualStyle = Parameters<
  <T>(
    Key: Extract<keyof ViewStyle | keyof TextStyle | keyof ImageStyle, string>,
    Value: string | number
  ) => void
>; */

export interface Element {
  /**
  * Element's type (displayName or name)
  */
  type: string | undefined;

  style: {
    /**
    * Set styles (overwriting) for element (also ignoring inline styles)
    */
    set: (style: ViewStyle | TextStyle | ImageStyle) => void;

    /**
    * Push styles for element before already defined styles (less important)
    */
    pushBefore: (style: ViewStyle | TextStyle | ImageStyle) => void;

    /**
    * Push styles for element after already defined styles (more important)
    */
    pushAfter: (style: ViewStyle | TextStyle | ImageStyle) => void;
  };
  /**
  * ELement id (defined on props)
  */
  id?: string;

  /**
  * ELement className (defined on props)
  */
  className?: string;

  // recursive: Array<Element>;
  // recursiveChildren: Array<Element>;

  /**
  * Array of element's children
  */
  children: Array<Element>;
}

export type ElementCallback = (el: Element) => void;
