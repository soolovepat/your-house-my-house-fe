import React from "react";
import { StDropdown } from "./styled";

const Dropdown = (props) => {
    const { isActive, children } = props;
    return <StDropdown $isActive={isActive}>{children}</StDropdown>;
};  

export default Dropdown;
