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
          <div>
            <StImgWrap>
              <img src={home_img_01} alt="home_img" />
            </StImgWrap>
            <h5>{article.title}</h5>
            <p>{article.nickname}</p>
            <span>
              <span>
                스크랩{" "}
                <NumberComma number="123" size={"13px"} lineHeight={"17px"} /> ·
                조회{" "}
                <NumberComma number="456" size={"13px"} lineHeight={"17px"} />
              </span>
            </span>
          </div>
        </Thumbnail>
      ))}
    </StThumbnailContainer>
  );
}

export default HouseContainer;
