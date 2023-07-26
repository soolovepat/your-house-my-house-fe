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
                    <TaggedImage />
                    <p>국무위원은 국정에 관하여 대통령을 보좌하며, 국무회의의 구성원으로서 국정을 심의한다. 공공필요에 의한 재산권의 수용·사용 또는 제한 및 그에 대한 보상은 법률로써 하되, 정당한 보상을 지급하여야 한다. 제안된 헌법개정안은 대통령이 20일 이상의 기간 이를 공고하여야 한다. 대법관은 대법원장의 제청으로 국회의 동의를 얻어 대통령이 임명한다.</p>
                    <p>대통령후보자가 1인일 때에는 그 득표수가 선거권자 총수의 3분의 1 이상이 아니면 대통령으로 당선될 수 없다. 대통령이 궐위된 때 또는 대통령 당선자가 사망하거나 판결 기타의 사유로 그 자격을 상실한 때에는 60일 이내에 후임자를 선거한다. 군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이 선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.</p>
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
