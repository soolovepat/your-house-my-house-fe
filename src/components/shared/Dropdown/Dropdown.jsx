import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { StDropdown } from "./styled";

const Dropdown = (props) => {
    const location = useLocation();

    useEffect(() => {
        console.log(location);
    }, [location]);

    const { isFirst, isOpened, filterInfo, setParams, handleFilteredInfos } = props;

    return (
    <StDropdown $isOpened={isOpened} $firstItem={isFirst}>
        <ul>
            {filterInfo.options.map((item, index) => {
                return (
                    <li
                        key={index} 
                        onClick={() => {
                            setParams(item.category, item.query);
                            handleFilteredInfos({ ...item });
                        }}
                    >
                        {item.label}
                    </li>
                );
            })}
        </ul>
    </StDropdown>
  );
};

export default Dropdown;
