import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { StFilteredInfoList } from "./styled";

const FilteredInfoList = (props) => {
    const { removeParams, filteredInfos } = props;
    
    return (
        <StFilteredInfoList>
            {filteredInfos && filteredInfos.map((item, index) => {
                console.log("item", item);
                return (
                    <li key={index}>
                        <button onClick={() => {removeParams([item.category])}}>
                            {item.label}
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    </li>
                );
            })}
            {(filteredInfos.length !== 0) && <li><button onClick={() => {removeParams(["order", "residence"])}}>초기화</button></li>}
        </StFilteredInfoList>
    );
};

export default FilteredInfoList;
