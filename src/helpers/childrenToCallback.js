const childrenToCallback = (children) => {
    return typeof children == "object"
        ? children === null || children === void 0 ? void 0 : children.map((a) => { var _a; return (_a = a.___) !== null && _a !== void 0 ? _a : undefined; }).filter((a) => typeof a == "object")
        : [];
};
export default childrenToCallback;
