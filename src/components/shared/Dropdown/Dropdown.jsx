import React, {useEffect} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { StDropdown } from "./styled";

const Dropdown = (props) => {

    const location = useLocation();

    const handleQuery = (query, value) => {
        console.log(query, value);
    }

    useEffect(() => {
        console.log(location);
    }, [location]);

    const { isOpened, filterInfo } = props;

    console.log(filterInfo)

    return (
    <StDropdown $isOpened={isOpened}>
        <ul>
            {filterInfo.options.map((item, index) => {
                return (
                    <li key={index} onClick={() => {handleQuery(item.query[0], item.query[1])}}>
                        {filterInfo.name}
                    </li>
                );
            })}
        </ul>
    </StDropdown>
    );
};

export default Dropdown;
