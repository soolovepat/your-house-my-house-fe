import React from "react";
import { StFilter } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Filter = (props) => {
    const { children } = props;
    return (
        <StFilter>
            {children}
            <FontAwesomeIcon icon={faChevronDown} />
        </StFilter>
    );
};

export default Filter;
