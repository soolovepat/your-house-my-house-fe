import React from "react";
import { useNavigate } from "react-router-dom";
import { StImgWrap, StThumbnailContainer } from "../../../pages/home/styled";
import Thumbnail from "../../thumbnail";
import NumberComma from "../../numberComma";
import { product_img_01 } from "../../../../asset/images/sample";

function ProductContainer({ itemList, column }) {
  const navigate = useNavigate();
  const onClickProductHandler = (productId) => {
    navigate(`/products/${productId}`);
  };
  return (
    <StThumbnailContainer>
      {itemList.map((item) => (
        <Thumbnail
          key={item.itemId}
          type={"product"}
          column={column.product}
          align={"left"}
          onClick={() => onClickProductHandler(item.productId)}
        >
          <StImgWrap>
            <img src={product_img_01} alt="home_img" />
          </StImgWrap>
          <h1>
            <span>거래처</span>
            <span>{item.itemname}</span>
          </h1>
          <NumberComma
            number={item.price}
            size={"17px"}
            weight={"700"}
            lineheight={"23px"}
          />
        </Thumbnail>
      ))}
    </StThumbnailContainer>
  );
}

export default ProductContainer;
