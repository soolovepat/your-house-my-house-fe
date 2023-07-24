import React from 'react'
import Filter from '../../shared/Filter';
import { StArticleContainer, StFilterContainer } from './styled';
import { Link } from 'react-router-dom';

const articleList = {
  posts: [
    {
      articleId: 1,
      title: "니집은 내꺼 니집은 내꺼 니집은 내꺼 니집은 내꺼 니집은 내꺼 니집은 내꺼 니집은 내꺼",
      coverImage: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      nickname: "항해의집",
    },
    {
      articleId: 2,
      title: "니집은 내꺼야",
      coverImage: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      nickname: "항해의집",
    },
    {
      articleId: 3,
      title: "니집은 내꺼다",
      coverImage: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      nickname: "항해의집",
    },
    {
      articleId: 4,
      title: "니집은 내꺼입니다",
      coverImage: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
      nickname: "항해의집",
    }
  ],
}

const ArticleList = () => {
  return (
    <>
    <StFilterContainer>
        <Filter>정렬</Filter>
        <Filter>주거형태</Filter>
        <Filter>평수</Filter>
        <Filter>예산</Filter>
    </StFilterContainer>
    <p style={{margin: "30px 0 10px"}}>전체: {articleList.posts.length}</p>
    <StArticleContainer>
      {articleList.posts.map(article => (
        <div key={article.articleId}
        >
          <img src={article.coverImage} alt="" />
          <h3>{article.title}</h3>
          <p><img style={{width: "16px"}} src="/assets/images/img-avatar.png" alt="" />{article.nickname}</p>
        </div>
      ))}
    </StArticleContainer>
    </>
  )
}

export default ArticleList 