import React from "react";
import FilterContainer from "./filterContainer/FilterContainer";
import { StArticleWrapper } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import Thumbnail from "../../shared/thumbnail/Thumbnail";
import HouseContainer from "../../shared/thumbnailContainer/houseContainer/HouseContainer";

const ArticleList = () => {
  const articleList = [
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
  ];

  return (
    <StArticleWrapper>
      <FilterContainer />
      <p style={{ margin: "30px 0 10px" }}>전체: {articleList.length}</p>
      <HouseContainer articleList={articleList} column="3" />
    </StArticleWrapper>
  );
};

export default ArticleList;
