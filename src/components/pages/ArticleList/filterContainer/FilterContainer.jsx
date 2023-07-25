import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Filter from "./filter/Filter";
import Dropdown from "../../../shared/dropdown/Dropdown";
import { StFilterContainer, StFilteredInfoList } from "./styled";

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

    const location = useLocation();

    const handleQuery = (query, value) => {
        console.log(query, value);
    }

    useEffect(() => {
        console.log(location);
    }, [location]);

    return (
        <>
        <StFilterContainer>
            <Filter>정렬
                <Dropdown>
                    <ul>
                        <li onClick={() => handleQuery('string', 'newest')}></li>
                        <li onClick={() => handleQuery('string', 'newest')}>최근 인기순</li>
                        <li onClick={() => handleQuery('string', 'newest')}>역대 인기순</li>
                        <li onClick={() => handleQuery('string', 'newest')}>과거순</li>
                    </ul>
                </Dropdown>
            </Filter>
            <Filter>주거형태
                <Dropdown>
                    <ul>
                        <li onClick={() => handleQuery('string', 'newest')}>원룸&오피스텔</li>
                        <li onClick={() => handleQuery('string', 'newest')}>아파트</li>
                        <li onClick={() => handleQuery('string', 'newest')}>빌라&연립</li>
                        <li onClick={() => handleQuery('string', 'newest')}>단독주택</li>
                        <li onClick={() => handleQuery('string', 'newest')}>사무공간</li>
                        <li onClick={() => handleQuery('string', 'newest')}>상업공간</li>
                        <li onClick={() => handleQuery('string', 'newest')}>기타</li>
                    </ul>
                </Dropdown>
            </Filter>
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
