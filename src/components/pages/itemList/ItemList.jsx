import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getCategoryData } from "../../../api/article";
import { useState } from "react";
import { setCategoryList } from "../../../redux/modules/categoryListSlice";
import ProductContainer from "../../shared/thumbnailContainer/productContainer/ProductContainer";
import { StContainer } from "../../../styles/Container";
import { StItemList } from "./style";
import Category from "../home/category/Category";
import SectionTitle from "../home/sectionTitle/SectionTitle";

const ItemList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const [query, setQuery] = useState({
    category: "",
    page: 1,
  });
  const itemList = useSelector((state) => state.categoryList?.items);
  const itemListAll = useSelector((state) => state.dataList?.itemList);

  const handleScroll = () => {
    // 스크롤이 페이지 하단에 도달하면 새로운 데이터를 로드합니다.
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setQuery((prevQuery) => ({
        ...prevQuery,
        page: prevQuery.page + 1,
      }));
    }
  };

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const updatedQuery = { ...query, category: category };
  //       //setQuery(updatedQuery);
  //       const response = await getCategoryData(updatedQuery);
  //       dispatch(setCategoryList(response.items));
  //       console.log(response.items);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchPosts();
  // }, [category]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const updatedQuery = { ...query, category: category };
        const response = await getCategoryData(updatedQuery);
        dispatch(setCategoryList(response.items));
        console.log(response.items);
      } catch (error) {
        console.error(error);
      }
    };

    // 스크롤 이벤트 리스너를 추가합니다.
    window.addEventListener("scroll", handleScroll);

    // 컴포넌트가 언마운트될 때 스크롤 이벤트 리스너를 제거합니다.
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [category, query.page, dispatch]);

  console.log(itemList, query);

  return (
    <StContainer>
      <SectionTitle title={"카테고리"} marginTop={"20px"} />
      <Category />
      {itemList.length > 0 ? (
        <StItemList>
          <p>전체 {itemList.length}개</p>
          {itemList && <ProductContainer itemList={itemList} column={4} />}
        </StItemList>
      ) : (
        <StItemList>
          <p>전체 {itemListAll.length}개</p>
          {itemListAll && (
            <ProductContainer itemList={itemListAll} column={4} />
          )}
        </StItemList>
      )}
    </StContainer>
  );
};

export default ItemList;
