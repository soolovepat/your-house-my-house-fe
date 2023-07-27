import React, { useState, useEffect } from "react";
import Filter from "./filter/Filter";
import FilteredInfoList from "./filteredInfoList/FilteredInfoList";
import Dropdown from "../../../shared/dropdown/Dropdown";
import { StFilterContainer } from "./styled";
import { useSearchParams } from "react-router-dom";
import { getArticleList } from "../../../../api/article";

/** 필터 리스트 컴포넌트 */
const FilterContainer = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filteredInfos, setFilteredInfos] = useState([]);

    const filters = {
        order: {
            name: "정렬",
            options: [
                { category: "order", label: "최근순", query: "newest" },
                { category: "order", label: "과거순", query: "oldest" },
            ],
        },
        residence: {
            name: "주거형태",
            options: [
                { category: "residence", label: "원룸&오피스텔", query: "0" },
                { category: "residence", label: "아파트", query: "1" },
                { category: "residence", label: "빌라&연립", query: "2" },
                { category: "residence", label: "사무공간", query: "3" },
                { category: "residence", label: "상업공간", query: "4" },
                { category: "residence", label: "기타", query: "5" },
            ],
        },
    };

    /** filteredInfos 세팅 함수 */
    const handleFilteredInfos = (item) => {
        const newInfo = filteredInfos.filter((info) => {
            console.log("handleFilteredInfos", info.category, item.category);
            return info.category !== item.category;
        });
        setFilteredInfos([...newInfo, item]);
    };

    const setParams = (category, query) => {
        searchParams.set(category, query);
        setSearchParams(searchParams);
    };

    const removeParams = (categories) => {
        let newInfo = [...filteredInfos];
        for (let i = 0; i < categories.length; i++) {
            searchParams.delete(categories[i]);
            setSearchParams(searchParams);
            newInfo = newInfo.filter((info) => info.category !== categories[i]);
        }
        setFilteredInfos(newInfo);
    };

    /** 새로고침 방지 */
    const preventClose = (e) => {
        e.preventDefault();
        e.returnValue = ""; //Chrome에서 동작하도록; deprecated
      };

    useEffect(() => {
        const query = filteredInfos.map((info) => {
            return { [info.category]: info.category };
        });
        // 필터 UI
        const getSearchParams = () => {
            getArticleList(...query)
                .then((res) => {
                    console.log(res);
                })
                .catch((err) => console.log(err));
        };

        // axios 재호출
        getSearchParams();
    }, []);

    return (
        <>
            <StFilterContainer>
                <Filter
                    filterInfo={filters.order}
                    isFirst={true}
                    setParams={setParams}
                    handleFilteredInfos={handleFilteredInfos}
                />
                <Filter
                    filterInfo={filters.residence}
                    setParams={setParams}
                    handleFilteredInfos={handleFilteredInfos}
                />
            </StFilterContainer>
            <FilteredInfoList removeParams={removeParams} filteredInfos={filteredInfos} />
        </>
    );
    }

export default FilterContainer;
