import React, { useState, useEffect } from "react";
import ImageTag from "./imageTag/ImageTag";
import { StTaggedImage, StImageTagWrapper } from "./styled";
import { StProductList  } from "./styled";
import Carousel from "../../home/carousel/Carousel";
import Category from "../../home/category/Category";
import { useNavigate } from "react-router-dom";

const TaggedImage = (props) => {
    const { tags } = props; // tags 잠시 대체
    const navigate = useNavigate();
    const [isHover, setIsHover] = useState(false);
    const [currItemIndex, setCurrItemIndex] = useState(0);
    
    const itemLength = 3;
    const onClickCategory = (cateId) => {
        navigate(`/category/${cateId}`);
    };

    console.log("tags", tags.contentImageId);

    return (
        <>
            <StTaggedImage>
                <img src={tags.contentImageId} />
                <StImageTagWrapper
                    onMouseEnter={() => {
                        setIsHover(true);
                    }}
                    onMouseLeave={() => {
                        setIsHover(false);
                    }}
                    $isHover={isHover}
                >
                    {tags.tagsId.length > 0 &&
                    tags.tagsId.map((item, index) => {
                            return (
                                <ImageTag
                                    key={index}
                                    itemId={tags.itemId[index]}
                                    itemName={tags.itemName[index]}
                                    brand={tags.brand[index]}
                                    coverImage={tags.coverImage[index]}
                                    xOffset={tags.axisX[index]}
                                    yOffset={tags.axisY[index]}
                                />
                            );
                        })}
                </StImageTagWrapper>
            </StTaggedImage>
            <Carousel currItemIndex={0} setCurrItemIndex={setCurrItemIndex} itemLength={itemLength} move={80}>
                <StProductList>
                    {tags?.tagsId?.length > 0 &&
                    tags.tagsId
                        .map((item, index) => {
                            return {
                                id: index + 1,
                                img: tags.coverImage[index],
                            };
                        })
                        .map((cate) => {
                            return (<li key={cate.id} onClick={() => onClickCategory(cate.id)}>
                            <img src={cate.img} />
                        </li>)
                        })}
                </StProductList>
            </Carousel>
        </>
    );
};

export default TaggedImage;
