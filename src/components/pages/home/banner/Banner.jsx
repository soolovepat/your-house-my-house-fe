import React, { useState } from "react";
import { bigbanner } from "../../../../assets/images/banner";
import Carousel from "../carousel/Carousel";
import { StBanner, StSmallBanner } from "./styled";
import { Link } from "react-router-dom";
import RightBanner from "./RightBanner";

const Banner = () => {
  const [currItemIndex, setCurrItemIndex] = useState(0);

  return (
    <StBanner>
      <section>
        <div>
          <Carousel
            currItemIndex={currItemIndex}
            setCurrItemIndex={setCurrItemIndex}
            itemLength={1}
            move={100}
          >
            <StSmallBanner>
              <li>
                <Link to={`event/${bigbanner}`}>
                  <img src={bigbanner} />
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
