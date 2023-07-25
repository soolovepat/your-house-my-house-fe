import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { StTagIcon, StProductTooltip, StProductInfo } from "./styled";
import { Link } from "react-router-dom";

const ImageTag = (props) => {
    const [isHover, setIsHover] = useState(false);
    const { xOffset = 0, yOffset = 0 } = props;

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
                <Link to="/">
                    <img
                        src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/165944575401601928.PNG?w=360&h=360&c=c&webp=1"
                        alt=""
                    />
                    <StProductInfo>
                        <p>휘뚜루마뚜루</p>
                        <p>상품명</p>
                        <p>269000원</p>
                    </StProductInfo>
                    <FontAwesomeIcon icon={faChevronRight} />
                </Link>
            </StProductTooltip>
        </StTagIcon>
    );
};

export default ImageTag;
