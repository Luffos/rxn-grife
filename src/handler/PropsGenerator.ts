import childrenToCallback from "../helpers/childrenToCallback";
import { ElementCallback, Element } from "src/interfaces/Element";

export const generateProps = (
  WrapperElement: any,
  props: any,
  userCallback: ElementCallback
) => {
  const finalProps = recursiveMap(props, true, userCallback);
  userCallback({
    style: finalProps.___?.style,
    type: WrapperElement.render.displayName,
    children: childrenToCallback(finalProps.children),
  } as Element);
  //console.log("finalProps", finalProps);
  return finalProps;
};

const recursiveMap = (
  obj: any,
  root: boolean,
  userCallback: ElementCallback
) => {
  obj = { ...obj };

  if (obj.children && typeof obj.children == "object") {
    obj.children = obj.children.map((c: any) => {
      if (typeof c == "object") {
        return recursiveMap(c, false, userCallback);
      }

      return c;
    });
  }

  if (obj.props?.children && typeof obj.props?.children == "object") {
    obj.props = {
      ...obj.props,
      children: obj.props.children.map((c: any) => {
        if (typeof c == "object") {
          return recursiveMap(c, false, userCallback);
        }
        return c;
      }),
    };
  }

  (obj.___ as Element) = {
    style: {
      set: (style) => {
        if (root) {
          obj.style = { ...style, ...(obj.style ?? []) };
        } else {
          obj.props = {
            ...obj.props,
            style: { ...style, ...(obj.props.style ?? []) },
          };
        }
      },
    },
    type: obj.type?.render?.displayName ?? undefined,
    children: childrenToCallback([
      ...(obj.children ?? obj.props?.children ?? {}),
    ]),
  };

  return obj;
};
