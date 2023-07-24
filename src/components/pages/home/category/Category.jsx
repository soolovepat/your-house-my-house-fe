import React from "react";
import { useNavigate } from "react-router-dom";
import {
  animals,
  camping,
  children,
  consumables,
  daily,
  deco,
  diy,
  fabric,
  food,
  furniture,
  homeappliances,
  interior,
  kitchen,
  lighting,
  rental,
  shopping,
  storage,
} from "../../../../../public/assets/images/category";
import { StCategory } from "./styled";
import Carousel from "../carousel/Carousel";

const Category = () => {
  const navigate = useNavigate();
  const CATEGORIES = [
    {
      id: 0,
      img: furniture,
      label: "가구",
    },
    {
      id: 1,
      img: fabric,
      label: "패브릭",
    },
    {
      id: 2,
      img: homeappliances,
      label: "가전·디지털",
    },
    {
      id: 3,
      img: kitchen,
      label: "주방용품",
    },
    {
      id: 4,
      img: food,
      label: "식품",
    },
    {
      id: 5,
      img: deco,
      label: "데코·식물",
    },
    {
      id: 6,
      img: lighting,
      label: "조명",
    },
    {
      id: 7,
      img: storage,
      label: "수납·정리",
    },
    {
      id: 8,
      img: daily,
      label: "생활용품",
    },
    {
      id: 9,
      img: consumables,
      label: "생필품",
    },
    {
      id: 10,
      img: children,
      label: "유아·아동",
    },
    {
      id: 11,
      img: animals,
      label: "반려동물",
    },
    {
      id: 12,
      img: camping,
      label: "캠핑·레저",
    },
    {
      id: 13,
      img: diy,
      label: "공구·DIY",
    },
    {
      id: 14,
      img: interior,
      label: "인테리어",
    },
    {
      id: 15,
      img: rental,
      label: "렌탈",
    },
    {
      id: 16,
      img: shopping,
      label: "장보기",
    },
  ];

  // 캐로셀 사용시 필수 props 요소
  const itemLength = 3;

  const onClickCategory = (cateId) => {
    navigate(`/category/${cateId}`);
  };

  return (
    <Carousel itemLength={itemLength} move={80}>
      <StCategory>
        {CATEGORIES.map((cate) => (
          <li key={cate.id} onClick={() => onClickCategory(cate.id)}>
            <img src={cate.img} />
            <p>{cate.label}</p>
          </li>
        ))}
      </StCategory>
    </Carousel>
  );
};

export default Category;
