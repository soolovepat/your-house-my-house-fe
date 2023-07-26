import React from "react";
import { StFilter } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import useDetectClose from "../../../../../hooks/useDetectClose";
import Dropdown from "../../../../shared/dropdown/Dropdown";

/** 필터 컴포넌트 (range 제외) */
const Filter = (props) => {
    const { filterInfo } = props;
    const [isOpened, pageRef, pageHandler] = useDetectClose(false);

    return (
        <StFilter onClick={pageHandler} ref={pageRef}>
            {filterInfo.name}
            <FontAwesomeIcon icon={faChevronDown} />
            <Dropdown filterInfo={filterInfo} $isOpened={isOpened} />
        </StFilter>
    );
};

export default Filter;
