import React, { useState, useEffect } from "react";
import ImageTag from "./imageTag/ImageTag";
import { StTaggedImage, StImageTagWrapper } from "./styled";

const TaggedImage = (/* {tags} */) => {
    const [isHover, setIsHover] = useState(false);

    const tags = [
        {
            contentImageId: 1,
            tagsId: [1, 2, 3],
            itemId: [10, 10, 10],
            itemName: ["침대", "책상", "의자"],
            brand: ["에이스", "데스커", "허먼밀러"],
            coverImage: ["https://", "https://", "https://"],
            axisX: [0, 222, 333],
            axisY: [10, 222, 333],
        },
        {
            contentImageId: 2,
            tagsId: [1, 2, 3],
            itemId: [10, 10, 10],
            itemName: ["침대", "책상", "의자"],
            brand: ["에이스", "데스커", "허먼밀러"],
            coverImage: ["https://", "https://", "https://"],
            axisX: [111, 222, 333],
            axisY: [111, 222, 333],
        },
        {
            contentImageId: 1,
            tagsId: [1, 2, 3],
            itemId: [10, 10, 10],
            itemName: ["침대", "책상", "의자"],
            brand: ["에이스", "데스커", "허먼밀러"],
            coverImage: ["https://", "https://", "https://"],
            axisX: [111, 222, 333],
            axisY: [111, 222, 333],
        },
    ];

    return (
        <StTaggedImage>
            <img
                src="https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg"
                alt=""
            />
            <StImageTagWrapper onMouseEnter={() => { setIsHover(true); }} onMouseLeave={() => { setIsHover(false); }} $isHover={isHover}
            >
                <ImageTag xOffset={30} yOffset={40} />
                <ImageTag xOffset={700} yOffset={70} />
                <ImageTag xOffset={360} yOffset={90} />
            </StImageTagWrapper>
        </StTaggedImage>
    );
};

export default TaggedImage;
