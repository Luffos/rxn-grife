import React from "react";
import { StyledFromText } from "../handler/macros/Text";
import { StyledFromView } from "../handler/macros/View";
const makeStyleFrom = (baseElement) => {
    console.error("makeStyleFrom(?) Not implemented yet. Please, use makeStyleFrom.? instead. (View | Text)");
    return React.Fragment;
};
makeStyleFrom.View = (callback) => StyledFromView(callback);
makeStyleFrom.Text = (callback) => StyledFromText(callback);
export default makeStyleFrom;
