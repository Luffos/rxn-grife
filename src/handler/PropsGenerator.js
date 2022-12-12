import childrenToCallback from "../helpers/childrenToCallback";
export const generateProps = (WrapperElement, props, userCallback) => {
    var _a;
    const finalProps = recursiveMap(props, true, userCallback);
    userCallback({
        style: (_a = finalProps.___) === null || _a === void 0 ? void 0 : _a.style,
        type: WrapperElement.render.displayName,
        children: childrenToCallback(finalProps.children),
    });
    //console.log("finalProps", finalProps);
    return finalProps;
};
const recursiveMap = (obj, root, userCallback) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    obj = Object.assign({}, obj);
    if (obj.children && typeof obj.children == "object") {
        obj.children = obj.children.map((c) => {
            if (typeof c == "object") {
                return recursiveMap(c, false, userCallback);
            }
            return c;
        });
    }
    if (((_a = obj.props) === null || _a === void 0 ? void 0 : _a.children) && typeof ((_b = obj.props) === null || _b === void 0 ? void 0 : _b.children) == "object") {
        obj.props = Object.assign(Object.assign({}, obj.props), { children: obj.props.children.map((c) => {
                if (typeof c == "object") {
                    return recursiveMap(c, false, userCallback);
                }
                return c;
            }) });
    }
    obj.___ = {
        style: {
            set: (style) => {
                var _a, _b;
                if (root) {
                    obj.style = Object.assign(Object.assign({}, style), ((_a = obj.style) !== null && _a !== void 0 ? _a : []));
                }
                else {
                    obj.props = Object.assign(Object.assign({}, obj.props), { style: Object.assign(Object.assign({}, style), ((_b = obj.props.style) !== null && _b !== void 0 ? _b : [])) });
                }
            },
        },
        type: (_e = (_d = (_c = obj.type) === null || _c === void 0 ? void 0 : _c.render) === null || _d === void 0 ? void 0 : _d.displayName) !== null && _e !== void 0 ? _e : undefined,
        children: childrenToCallback([
            ...((_h = (_f = obj.children) !== null && _f !== void 0 ? _f : (_g = obj.props) === null || _g === void 0 ? void 0 : _g.children) !== null && _h !== void 0 ? _h : {}),
        ]),
    };
    return obj;
};
