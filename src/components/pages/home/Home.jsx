import React, { useState, useEffect } from "react";
import Banner from "./banner/Banner";
import { StContainer } from "../../../Styles/Container";
import SectionTitle from "./sectionTitle/SectionTitle";
import HouseContainer from "../../shared/thumbnailContainer/houseContainer/HouseContainer";
import ProductContainer from "../../shared/thumbnailContainer/productContainer/ProductContainer";
import Category from "./category/Category";
import { getDatas } from "../../../api/article";
import { useDispatch, useSelector } from "react-redux";
import {
  setArticleList,
  setItemList,
} from "../../../redux/modules/dataListSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const column = { house: "3", product: "4" };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getDatas();
        dispatch(setArticleList(response.data.articleList));
        dispatch(setItemList(response.data.itemList));
        console.log(response.data.articleList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [dispatch]);

  const articleList = useSelector((state) => state.dataList.articleList);
  const itemList = useSelector((state) => state.dataList.itemList);

  const onClickMoreView = (url) => {
    navigate(url);
  };

  return (
    <StContainer>
      <Banner articleList={articleList} />
      <SectionTitle
        title={"🥇 20평 대! 공간 활용 best 4 🥇"}
        button={"더보기"}
        onClick={() => onClickMoreView("/articles")}
        marginTop={"50px"}
      />
      {articleList && (
        <HouseContainer
          articleList={articleList.slice(0, column.house)}
          column={column.house}
        />
      )}
      <SectionTitle title={"카테고리"} marginTop={"20px"} />
      <Category />
      <SectionTitle
        title={"우리 가족 맞춤 집들이 💁‍♀️"}
        button={"더보기"}
        onClick={() => onClickMoreView("/item/category")}
        marginTop={"30px"}
      />
      {Array.isArray(itemList) && (
        <ProductContainer
          itemList={itemList.slice(0, column.product)}
          column={column.product}
        />
      )}
    </StContainer>
  );
};

export default Home;
