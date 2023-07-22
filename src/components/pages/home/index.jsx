import React from "react";
import Thumbnail from "./thumbnail";
import Banner from "./banner";
import { StImgWrap, StThumbnailContainer } from "./styled";
import { StContainer } from "../../../styles/Container";
import { home_img_01, product_img_01 } from "../../../asset/images";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const navigate = useNavigate();
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

  const addComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); // 3자리 숫자 그룹간 경계를 ,로 치환
  };

  return (
    <StContainer>
      <Banner />
      <FontAwesomeIcon icon={faSearch} />
      <StThumbnailContainer>
        {formData.articleList.map((article) => (
          <Thumbnail
            key={article.articleId}
            type={"house"}
            column={"3"}
            align={"center"}
            onClick={() => onClickArticleHandler(article.articleId)}
          >
            <StImgWrap>
              <img src={home_img_01} alt="home_img" />
            </StImgWrap>
            <h1>{article.title}</h1>
            <address>{article.nickname}</address>
            <footer>
              <span>스크랩 11 · 조회 250</span>
            </footer>
          </Thumbnail>
        ))}
      </StThumbnailContainer>
      <StThumbnailContainer>
        {formData.itemList.map((item) => (
          <Thumbnail
            key={item.itemId}
            type={"product"}
            column={"4"}
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
            <span>{addComma(item.price)}</span>
            {/* <footer>
              <span>스크랩 11 · 조회 250</span>
            </footer> */}
          </Thumbnail>
        ))}
      </StThumbnailContainer>
    </StContainer>
  );
};

export default Home;
