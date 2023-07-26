import React, { useEffect } from "react";
import Filter from "./filter/Filter";
import Dropdown from "../../../shared/dropdown/Dropdown";
import { StFilterContainer, StFilteredInfoList } from "./styled";

/** 필터 리스트 컴포넌트 */
const FilterContainer = () => {
    const filters = {
        sorting: {
            name: "정렬",
            options: [
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
            ]
        },
        residence: {
            name: "주거형태",
            options: [
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
                {
                    label: "최근순",
                    query: ["string", "newest"]
                },
            ]
        },
    }

    return (
        <>
        <StFilterContainer>
            <Filter filterInfo={filters.sorting} isFirst={true}/>
            <Filter filterInfo={filters.residence} />
        </StFilterContainer>
        <StFilteredInfoList>
            <li><button>빌라 연립</button></li>
            <li><button>역대 인기순</button></li>
            <li><button>초기화</button></li>
        </StFilteredInfoList>
        </>
    );
};

export default FilterContainer;
