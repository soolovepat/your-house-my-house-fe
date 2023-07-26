import React from "react";
import { useNavigate } from "react-router-dom";
import { StImgWrap, StThumbnailContainer } from "../styled";
import Thumbnail from "../../thumbnail/Thumbnail";
import NumberComma from "../../numberComma/NumberComma";
import { product_img_01 } from "../../../../assets/images/sample";

function ProductContainer({ itemList, column }) {
  const navigate = useNavigate();
  const onClickProductHandler = (itemId) => {
    navigate(`/products/${itemId}`);
  };
  return (
    <StThumbnailContainer>
      {itemList.map((item) => (
        <Thumbnail
          key={item.itemId}
          type={"product"}
          column={column}
          align={"left"}
          onClick={() => onClickProductHandler(item.itemId)}
        >
          <div>
            <StImgWrap>
              <img src={product_img_01} alt="home_img" />
            </StImgWrap>
            <h5>
              <span>거래처</span>
              <span>{item.itemName}</span>
            </h5>
            <NumberComma
              number={item.price}
              size={"17px"}
              weight={"700"}
              lineHeight={"23px"}
            />
          </div>
        </Thumbnail>
      ))}
    </StThumbnailContainer>
  );
}

export default ProductContainer;
