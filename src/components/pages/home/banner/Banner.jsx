import React, { useState } from "react";
import { bigbanner } from "../../../../assets/images/banner";
import Carousel from "../carousel/Carousel";
import { StBanner, StSmallBanner } from "./styled";
import { Link } from "react-router-dom";
import RightBanner from "./RightBanner";

const Banner = ({ articleList }) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);

  const getRandomArticle = (article) => {
    const randomIndex = Math.floor(Math.random() * article.length);
    return article[randomIndex];
  };

  const randomArticle = articleList && getRandomArticle(articleList);
  return (
    <StBanner>
      <section>
        <div>
          <Carousel
            currItemIndex={currItemIndex}
            setCurrItemIndex={setCurrItemIndex}
            itemLength={1}
            move={100}
            type={"hoverArrow"}
          >
            <StSmallBanner>
              <li>
                <Link to={`event/${bigbanner}`}>
                  <img src={bigbanner} />

                  {articleList && (
                    <div>
                      <strong>{randomArticle.title}</strong>
                      <span>지금은 null값입니다{randomArticle.nickname}</span>
                    </div>
                  )}
                </Link>
              </li>
            </StSmallBanner>
          </Carousel>
        </div>
      </section>

      <section>
        <RightBanner />
      </section>
    </StBanner>
  );
};

export default Banner;
