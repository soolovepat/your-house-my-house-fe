import React, { useState } from "react";
import { StFilter } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../../../../shared/dropdown/Dropdown";

/** 필터 컴포넌트 (range 제외) 
 * @param {boolean} isHover - UI상 첫 번째 필터인지 여부 -> 스타일링 변화
 * @param {filter} filterInfo - 필터 제목, 드롭다운 리스트 정보(label, 쿼리 키워드) 객체
*/
const Filter = (props) => {
    const { isFirst = false, filterInfo, setParams, handleFilteredInfos } = props;
    const [isHover, setIsHover] = useState(false);

    return (
        <StFilter 
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            {filterInfo.name}
            <FontAwesomeIcon icon={faChevronDown} />
            <Dropdown 
            setParams={setParams} 
            filterInfo={filterInfo} 
            isOpened={isHover} 
            isFirst={isFirst} 
            handleFilteredInfos={handleFilteredInfos}
            />
        </StFilter>
    );
};

export default Filter;
