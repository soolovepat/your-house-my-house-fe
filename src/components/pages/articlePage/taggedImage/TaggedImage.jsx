import React from "react";
import ImageTag from './imageTag/ImageTag';
import {StTaggedImage} from './styled';

const TaggedImage = () => {
    const tags = [
        {
        "contentImageId": 1,
        "tagsId": [1, 2, 3],
        "itemId": [10, 10, 10],
        "itemName": ["침대", "책상", "의자"],
        "brand": ["에이스", "데스커", "허먼밀러"],
        "coverImage": ["https://", "https://", "https://"],
        "axisX": [0 , 222, 333],
        "axisY": [10, 222, 333]
        },
        {
        "contentImageId": 2,
        "tagsId": [1, 2, 3],
        "itemId": [10, 10, 10],
        "itemName": ["침대", "책상", "의자"],
        "brand": ["에이스", "데스커", "허먼밀러"],
        "coverImage": ["https://", "https://", "https://"],
        "axisX": [111, 222, 333],
        "axisY": [111, 222, 333]
        },
        {
        "contentImageId": 1,
        "tagsId": [1, 2, 3],
        "itemId": [10, 10, 10],
        "itemName": ["침대", "책상", "의자"],
        "brand": ["에이스", "데스커", "허먼밀러"],
        "coverImage": ["https://", "https://", "https://"],
        "axisX": [111, 222, 333],
        "axisY": [111, 222, 333]
        }
        ];
    return <StTaggedImage>
        <img src="https://www.vetcarepethospital.ca/wp-content/uploads/sites/247/2022/03/petrabbitcare-1-scaled.jpg" alt="" />
        <ImageTag xOffset={30} yOffset={40} />
        <ImageTag xOffset={700} yOffset={70} />
        <ImageTag xOffset={360} yOffset={90} />
        </StTaggedImage>;
};

export default TaggedImage;
