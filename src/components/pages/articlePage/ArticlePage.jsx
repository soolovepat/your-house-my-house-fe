import React, { useEffect, useState } from "react";
import {
  StMainVis,
  StArticleWrapper,
  StArticleHeader,
  StArticle,
  StBookmarkButton,
  StArticleSideBar,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import TaggedImage from "./taggedImage/TaggedImage";
import { getArticlePage } from "../../../api/article";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import UserAvatar from "../../shared/userAvatar/UserAvatar";

const ArticlePage = () => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    getArticlePage(1)
      .then((res) => {
        setArticle(res.data.findArticle);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("article.tags[0]", article);
  return (
    <>
      <StMainVis>
        <img src={article?.coverImage} alt="" />
      </StMainVis>
      <StArticleWrapper>
        <StArticleHeader>
          <h2>{article?.title}</h2>
          <div>
            <div>
              {/* hover효과가 있는 경우에만 props내려주세요 ! 없다면 아예 지우기!
              <UserAvatar
                width={"40px"}
                height={"40px"}
                type={"hoverOn"}
              /> */}
              <img src="/assets/images/img-avatar.png" alt="" />
            </div>
            <p>{article?.nickname}</p>
          </div>
        </StArticleHeader>
        <StArticle>
          {/* 👇 Test용 TaggedImage */}
          {article !== null && <TaggedImage key={1} tags={article.tags[0]} />}
          {article !== null &&
            ReactHtmlParser(article.content, {
              transform: (node, index) => {
                if (node.type === "tag" && node.name === "img") {
                  return (
                    <TaggedImage key={index + 1} tags={article.tags[index]} />
                  );
                }
              },
            })}
        </StArticle>
        <StArticleSideBar>
          <StBookmarkButton>
            <FontAwesomeIcon icon={faBookmark} />
          </StBookmarkButton>
        </StArticleSideBar>
      </StArticleWrapper>
    </>
  );
};

export default ArticlePage;
