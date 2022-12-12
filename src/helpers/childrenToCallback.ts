const childrenToCallback = (children: any) => {
  return typeof children == "object"
    ? children
        ?.map((a: any) => a.___ ?? undefined)
        .filter((a: any) => typeof a == "object")
    : [];
};

export default childrenToCallback;
