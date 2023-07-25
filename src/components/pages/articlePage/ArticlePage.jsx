import React from "react";
import { StMainVis, StArticleWrapper, StArticleHeader, StArticle, StBookmarkButton, StArticleSideBar } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import TaggedImage from "./taggedImage/TaggedImage";

const ArticlePage = () => {
    return (
        <>
            <StMainVis>
                <img
                    src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168899147747245534.JPG?w=1920&h=622.5&c=c"
                    alt=""
                />
            </StMainVis>
            <StArticleWrapper>
                <StArticleHeader>
                    <h2>매일 보는 집은 예뻐야 하니까! 눈이 즐거운 리빙 블로거의 집</h2>
                    <div>
                        <div>
                            <img src="/assets/images/img-avatar.png" alt="" />
                        </div>
                        <p>silver_daily</p>
                    </div>
                </StArticleHeader>
                <StArticle>
                    <img
                        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/cards/projects/168899147747245534.JPG?w=1920&h=622.5&c=c"
                        alt=""
                    />
                    <TaggedImage />
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
