import React, { useEffect } from "react";
import { getItemData } from "../../../api/article";
import { useDispatch, useSelector } from "react-redux";
import { setItemList } from "../../../redux/modules/dataListSlice";
import { useParams } from "react-router-dom";
import { product_img_01 } from "../../../assets/images/sample";
import { StItemDetailTop } from "./style";
import NumberComma from "../../shared/numberComma/NumberComma";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { StContainer } from "../../../styles/Container";

const ItemDetail = () => {
  const dispatch = useDispatch();
  const { itemId } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getItemData(itemId);
        dispatch(setItemList(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchPosts();
  }, [dispatch]);

  const itemList = useSelector((state) => state.dataList.itemList);
  console.log(itemList.content);
  // const jsonString = itemList.content;

  // try {
  //   const jsonArray = JSON.parse(jsonString);
  //   console.log(jsonArray); // JavaScript 배열로 변환된 값 출력
  // } catch (error) {
  //   console.error("유효하지 않은 JSON 배열 형식입니다.");
  // }
  const urlRegex = /https?:\/\/[^"]+/g;
  const coverImageUrlArray = itemList?.content?.match(urlRegex);

  const coverImageUrl =
    itemList && itemList.content ? coverImageUrlArray[0] : "";

  const coverImageUrlArrayExceptLast = coverImageUrlArray?.slice(
    0,
    coverImageUrlArray.length - 1
  );

  return (
    <StContainer>
      <StItemDetailTop>
        <div>
          <img src={coverImageUrl} />
        </div>
        {itemList ? (
          <div>
            <span>{itemList.brand}</span>
            <strong>{itemList.itemName}</strong>
            <NumberComma
              number={Number(itemList.price)}
              size={"32px"}
              weight={"700"}
              lineheight={"50px"}
            />
            <span>
              <strong>혜택</strong>
              <span>
                <span>
                  <strong>158p</strong> 적립 (WELCOME 0.1% 적립)
                </span>
                <span>월 22,571원 (7개월) 무이자할부</span>
              </span>
            </span>
            <span>
              <strong>배송</strong>
              <span>
                <span>
                  <strong>무료배송</strong>
                </span>
                <span>지금 주문시 내일 출발</span>
                <span>일반택배</span>
                <span>
                  <FontAwesomeIcon icon={faCheck} />
                  제주도/도서산간 지역 3,000원
                </span>
              </span>
            </span>

            <span>{itemList.brand}</span>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </StItemDetailTop>
      <span>
        {coverImageUrlArrayExceptLast &&
          coverImageUrlArrayExceptLast.map((img) => <img src={img} />)}
      </span>
    </StContainer>
  );
};

export default ItemDetail;
