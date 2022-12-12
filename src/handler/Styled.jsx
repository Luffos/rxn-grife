import React from "react";
import { generateProps } from "./PropsGenerator";
export const Styled = (WrapperElement, callback) => class Styled extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<WrapperElement {...generateProps(WrapperElement, this.props, callback)}/>);
    }
};
