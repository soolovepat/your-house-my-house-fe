import React, { useState, useEffect } from "react";
import Banner from "./banner/Banner";
import { StContainer } from "../../../Styles/Container";
import SectionTitle from "./sectionTitle/SectionTitle";
import HouseContainer from "../../shared/thumbnailContainer/houseContainer/HouseContainer";
import ProductContainer from "../../shared/thumbnailContainer/productContainer/ProductContainer";
import Category from "./category/Category";
import { getDatas } from "../../../api/article";

const Home = () => {
  const column = { house: "3", product: "4" };
  const [dataList, setDataList] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getDatas();
        setDataList(response.data);
        console.log(dataList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, []);

  const onClickMoreView = () => {};

  return (
    <StContainer>
      <Banner />
      <SectionTitle title={"카테고리"} />
      <Category />
      <SectionTitle
        title={"🥇 20평 대! 공간 활용 best 4 🥇"}
        button={"더보기"}
        onClick={onClickMoreView}
      />
      {dataList.articleList && (
        <HouseContainer
          articleList={dataList.articleList.slice(0, column.house)}
          column={column.house}
        />
      )}
      <SectionTitle
        title={"우리 가족 맞춤 집들이 💁‍♀️"}
        button={"더보기"}
        onClick={onClickMoreView}
      />
      {dataList.itemList && (
        <ProductContainer
          itemList={dataList.itemList.slice(0, column.product)}
          column={column.product}
        />
      )}
    </StContainer>
  );
};

export default Home;
