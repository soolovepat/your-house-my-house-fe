import styled from "styled-components";
import theme from "../../../styles/theme";

export const StMainVis = styled.div`
  width: 100%;
  height: 370px;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StArticleWrapper = styled.div`
  max-width: 750px;
  margin: 0 auto;
`;

export const StArticleHeader = styled.div`
  margin: 60px 0;

  & > h2 {
    font-size: 34px;
    line-height: 1.25em;
    font-weight: 700;
    margin-bottom: 30px;
  }

  // 글쓴이 정보
  & > div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    & > div {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      & > img {
        width: 100%;
      }
    }
    & > p {
<<<<<<< HEAD
        margin: 10px 0;
        line-height: 32px;    
    }
=======
      font-size: 16px;
      font-weight: 700;
      color: #2f3438;
    }
  }
`;
export const StArticle = styled.div`
  margin-bottom: 60px;
  & > img {
    width: 100%;
  }
>>>>>>> 76c49deee90b797700ebb68d521182851d42b1f8
`;

export const StArticleSideBar = styled.div`
  position: absolute;
  top: 0px;
  right: 0;
  width: calc(50% - 360px);
  padding-top: 550px;
  text-align: center;
`;
export const StBookmarkButton = styled.button`
  ${theme.roundBtn};
  position: relative;
  width: 54px;
  height: 54px;
  padding: 14px;
  margin: 0;
  font-size: 24px;
  border: 1px solid #dadce0;
  box-shadow: 1px 3px 4px 0 rgba(209, 213, 217, 0.2);
`;
