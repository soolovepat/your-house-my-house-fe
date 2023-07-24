import React from "react";
import { useNavigate } from "react-router-dom";
import { StImgWrap, StThumbnailContainer } from "../styled";
import Thumbnail from "../../thumbnail/Thumbnail";
import NumberComma from "../../numberComma/NumberComma";
import { home_img_01 } from "../../../../assets/images/sample";

function HouseContainer({ articleList, column }) {
  const navigate = useNavigate();
  const onClickArticleHandler = (articleId) => {
    navigate(`/articles/${articleId}`);
  };
  return (
    <StThumbnailContainer>
      {articleList.map((article) => (
        <Thumbnail
          key={article.articleId}
          type={"house"}
          column={column}
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
              <NumberComma number="123" size={"13px"} lineheight={"17px"} /> ·
              조회{" "}
              <NumberComma number="456" size={"13px"} lineheight={"17px"} />
            </span>
          </footer>
        </Thumbnail>
      ))}
    </StThumbnailContainer>
  );
}

export default HouseContainer;
