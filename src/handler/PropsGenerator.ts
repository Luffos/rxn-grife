import { cloneDeepWith } from "lodash";
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
    children:
      typeof finalProps.children == "object"
        ? finalProps.children
            ?.map((a: any) => a.___ ?? undefined)
            .filter((a: any) => typeof a == "object")
        : [],
  } as any);
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

  obj.___ = {
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
    children: [...(obj.children ?? obj.props?.children ?? [])]
      ?.map((a: any) => a.___ ?? undefined)
      .filter((a: any) => typeof a == "object"),
  } as Element;

  return obj;
};
