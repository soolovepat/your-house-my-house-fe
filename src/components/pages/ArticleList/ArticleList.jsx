import React, { useState, useEffect } from "react";
import FilterContainer from "./filterContainer/FilterContainer";
import { StArticleWrapper } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import Thumbnail from "../../shared/thumbnail/Thumbnail";
import HouseContainer from "../../shared/thumbnailContainer/houseContainer/HouseContainer";
import { getArticleList } from "../../../api/article";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticleList()
      .then((res) => {
        setArticles(res.data.articleList);
      })
      .catch((err) => console.log(err));
  }, [articles]);

  return (
    <StArticleWrapper>
      <FilterContainer />
      <p style={{ margin: "30px 0 10px" }}>전체: {articles.length}</p>
      <HouseContainer articleList={articleList} column="3" align={"center"} />
    </StArticleWrapper>
  );
};

export default ArticleList;
