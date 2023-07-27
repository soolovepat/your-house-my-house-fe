import React from "react";
import { useNavigate } from "react-router-dom";
import { StImgWrap, StThumbnailContainer } from "../styled";
import Thumbnail from "../../thumbnail/Thumbnail";
import NumberComma from "../../numberComma/NumberComma";

function ProductContainer({ itemList, column, align }) {
  const navigate = useNavigate();
  const onClickProductHandler = (itemId) => {
    navigate(`/item/${itemId}`);
  };

  console.log(itemList);

  return (
    <StThumbnailContainer>
      {itemList?.map((item) => (
        <Thumbnail
          key={item?.itemId}
          type={"product"}
          column={column}
          align={align}
          onClick={() => onClickProductHandler(item.itemId)}
        >
          <div>
            <StImgWrap>
              <img src={item.coverMainImage} alt="home_img" />
            </StImgWrap>
            <h5>
              <span>{item.brand}</span>
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
