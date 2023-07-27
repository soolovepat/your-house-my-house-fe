import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StTagIcon, StProductTooltip, StProductInfo } from "./styled";
import { Link } from "react-router-dom";
import NumberComma from '../../../../shared/numberComma/NumberComma';

const ImageTag = (props) => {
    const [isHover, setIsHover] = useState(false);
    const { 
        itemId,
        itemName,
        brand,
        coverImage,
        xOffset = 0, 
        yOffset = 0 } = props;

    return (
        <StTagIcon
            $xOffset={xOffset}
            $yOffset={yOffset}
            onMouseEnter={() => {
                setIsHover(true);
            }}
            onMouseLeave={() => {
                setIsHover(false);
            }}
        >
            <FontAwesomeIcon icon={faPlus} />
            <StProductTooltip $isHover={isHover}>
                <Link to={`/item/${itemId}`}>
                    <img
                        src={coverImage}
                    />
                    <StProductInfo>
                        <p>{brand}</p>
                        <p>{itemName}</p>
                        <p><NumberComma number={269000} size={"16px"} lineheight={"20px"}/> 원</p>
                    </StProductInfo>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </StProductTooltip>
        </StTagIcon>
    );
};

export default ImageTag;
