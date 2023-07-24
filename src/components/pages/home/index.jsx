import React from "react";
import Thumbnail from "./thumbnail";
import Banner from "./banner";
import { StListTitle, StImgWrap, StThumbnailContainer } from "./styled";
import { StContainer } from "../../../styles/Container";
import {
  home_img_01,
  product_img_01,
} from "../../../asset/images/sample/index";
import { useNavigate } from "react-router-dom";
import NumberComma from "../../shared/NumberComma";
import Category from "./Categoty";
import SectionTitle from "./SectionTitle";

const Home = () => {
  const navigate = useNavigate();
  const column = { house: "3", product: "4" };
  const formData = {
    articleList: [
      {
        articleId: 1,
        title: "니집은 내꺼",
        nickname: "항해의집",
      },
      {
        articleId: 2,
        title: "니집은 내꺼야",
        nickname: "항해의집",
      },
      {
        articleId: 3,
        title: "니집은 내꺼다",
        nickname: "항해의집",
      },
      {
        articleId: 4,
        title: "니집은 내꺼입니다",
        nickname: "항해의집",
      },
    ],
    itemList: [
      {
        itemId: 10,
        itemname: "에이스 침대",
        price: 30000,
      },
      {
        itemId: 200,
        itemname: "에이스 침대",
        price: 30000,
      },
      {
        itemId: 300,
        itemname: "에이스 침대",
        price: 30000,
      },
      {
        itemId: 400,
        itemname: "에이스 침대",
        price: 30000,
      },
      {
        itemId: 500,
        itemname: "에이스 침대",
        price: 30000,
      },
    ],
  };

  const onClickArticleHandler = (articleId) => {
    navigate(`/articles/${articleId}`);
  };

  const onClickProductHandler = (productId) => {
    navigate(`/products/${productId}`);
  };

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
      <StThumbnailContainer>
        {formData.articleList
          .map((article) => (
            <Thumbnail
              key={article.articleId}
              type={"house"}
              column={column.house}
              align={"center"}
              onClick={() => onClickArticleHandler(article.articleId)}
            >
              <StImgWrap>
                <img src={home_img_01} alt="home_img" />
              </StImgWrap>
              <h1>{article.title}</h1>
              <address>{article.nickname}</address>
              <footer>
                <span>
                  스크랩{" "}
                  <NumberComma number="123" size={"13px"} lineheight={"17px"} />{" "}
                  · 조회{" "}
                  <NumberComma number="456" size={"13px"} lineheight={"17px"} />
                </span>
              </footer>
            </Thumbnail>
          ))
          .slice(0, column.house)}
      </StThumbnailContainer>
      <SectionTitle
        title={"우리 가족 맞춤 집들이 💁‍♀️"}
        button={"더보기"}
        onClick={onClickMoreView}
      />
      <StThumbnailContainer>
        {formData.itemList
          .map((item) => (
            <Thumbnail
              key={item.itemId}
              type={"product"}
              column={column.product}
              align={"left"}
              onClick={() => onClickProductHandler(item.productId)}
            >
              <StImgWrap>
                <img src={product_img_01} alt="home_img" />
              </StImgWrap>
              <h1>
                <span>거래처</span>
                <span>{item.itemname}</span>
              </h1>
              <NumberComma
                number={item.price}
                size={"17px"}
                weight={"700"}
                lineheight={"23px"}
              />
            </Thumbnail>
          ))
          .slice(0, column.product)}
      </StThumbnailContainer>
    </StContainer>
  );
};

export default Home;
