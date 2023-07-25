import React from "react";
import { Link } from "react-router-dom";
import { StDropdown } from "./styled";

const Dropdown = (props) => {
    const { isOpened, children } = props;
    console.log(children);
    return (
    <StDropdown $isOpened={isOpened}>
        {children}
    </StDropdown>
    );
};

export default Dropdown;
