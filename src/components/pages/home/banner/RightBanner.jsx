import React, { useState, useEffect } from "react";
import {
  banner01,
  banner02,
  banner03,
  banner04,
  banner05,
  banner06,
} from "../../../../assets/images/banner";
import Carousel from "../carousel/Carousel";
import { StSmallBanner, StSmallBannerNumber } from "./styled";
import { Link } from "react-router-dom";

const RightBanner = () => {
  const [currItemIndex, setCurrItemIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrItemIndex((prevIndex) => {
        if (prevIndex >= itemLength - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Carousel
        currItemIndex={currItemIndex}
        setCurrItemIndex={setCurrItemIndex}
        itemLength={itemLength}
        move={100}
        type={"hoverArrow"}
      >
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
      <StSmallBannerNumber>
        <span>
          {currItemIndex + 1}/{itemLength} <strong>+</strong>
        </span>
      </StSmallBannerNumber>
    </div>
  );
};

export default RightBanner;
