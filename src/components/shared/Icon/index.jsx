import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faChevronDown, faBookmark } from "@fortawesome/free-regular-svg-icons"
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons"

const iconList = {
    "search": "fa-solid fa-magnifying-glass",
    "chevron": "fa-solid fa-chevron-down",
    "bookmark": "fa-regular fa-bookmark",
    "youtube": "fa-brands fa-youtube",
    "github": "fa-brands fa-github"
}

/** 폰트어썸 아이콘 */
const Icon = (props) => {
    const { iconName = "" } = props;

    console.log("iconName: ", iconList[iconName])
    // <FontAwesomeIcon icon={iconList[iconName]} />
    return <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />;
};

export default Icon; 
