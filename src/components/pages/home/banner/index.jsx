import React from "react";
import {
  bigbanner,
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
  banner06,
} from "../../../../asset/images/banner";
import Carousel from "../carousel";
import { StBanner, StSmallBanner } from "./styled";
import { Link } from "react-router-dom";

const Banner = () => {
  const RIGHTBANNER = [
    {
      id: "ba01",
      img: banner01,
    },
    {
      id: "ba02",
      img: banner02,
    },
    {
      id: "ba03",
      img: banner03,
    },
    {
      id: "ba04",
      img: banner04,
    },
    {
      id: "ba05",
      img: banner05,
    },
    {
      id: "ba06",
      img: banner06,
    },
  ];

  // 캐로셀 사용시 필수 props 요소
  const itemLength = RIGHTBANNER.length;

  return (
    <StBanner>
      <section>
        <div>
          <Carousel itemLength={1} move={100}>
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
        <div>
          <Carousel itemLength={itemLength} move={100}>
            <StSmallBanner>
              {RIGHTBANNER.map((banner) => (
                <li key={banner.id}>
                  <Link to={`event/${banner.id}`}>
                    <img src={banner.img} />
                  </Link>
                </li>
              ))}
            </StSmallBanner>
          </Carousel>
        </div>
      </section>
    </StBanner>
  );
};

export default Banner;
