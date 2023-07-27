import React from "react";
import { useNavigate } from "react-router-dom";
import { StImgWrap, StThumbnailContainer } from "../styled";
import Thumbnail from "../../thumbnail/Thumbnail";
import NumberComma from "../../numberComma/NumberComma";
import UserAvatar from "../../userAvatar/UserAvatar";

function HouseContainer({ articleList, column, align }) {
  const navigate = useNavigate();
  const onClickArticleHandler = (articleId) => {
    navigate(`/article/${articleId}`);
  };
  return (
    <StThumbnailContainer>
      {articleList.map((article) => (
        <Thumbnail
          key={article.articleId}
          type={"house"}
          column={column}
          align={align}
          onClick={() => onClickArticleHandler(article.articleId)}
        >
          <div>
            <StImgWrap type={"house"}>
              <img src={article.coverImage} alt="img" />
            </StImgWrap>
            <h5>{article.title}</h5>
            <p>
              <UserAvatar width={"20px"} height={"20px"} align={align} />{" "}
              {article.nickname}
            </p>
            <span>
              {/* <span>
                스크랩{" "}
                <NumberComma number="123" size={"13px"} lineHeight={"17px"} /> ·
                조회{" "}
                <NumberComma number="456" size={"13px"} lineHeight={"17px"} />
              </span> */}
            </span>
          </div>
        </Thumbnail>
      ))}
    </StThumbnailContainer>
  );
}

export default HouseContainer;
