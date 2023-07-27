import React, { useEffect, useState } from "react";
import { StMainVis, StArticleWrapper, StArticleHeader, StArticle, StBookmarkButton, StArticleSideBar } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import TaggedImage from "./taggedImage/TaggedImage";
import { getArticlePage } from "../../../api/article";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from "react-html-parser";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    const [article, setArticle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        getArticlePage(id)
            .then((res) => {
                // html 스트링 가공
                let newArticle = res.data.findArticle;
                setArticle(newArticle);
            })
            .catch((err) => console.log(err));
    }, []);

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
                            <img src="/assets/images/img-avatar.png" alt="" />
                        </div>
                        <p>{article?.nickname}</p>
                    </div>
                </StArticleHeader>
                <StArticle>
                    {article !== null &&
                        ReactHtmlParser(article.content, {
                            transform: (node) => {
                                if (node.type === "tag" && node.name === "img") {
                                    if (article && Array.isArray(article.tags)) {
                                        const target = article.tags.filter(tagData => tagData.contentImageId === node.attribs.src);
                                        return target.map((tagData, index)=> (
                                            <TaggedImage key={index} tags={tagData} />
                                        ))
                                    }
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
