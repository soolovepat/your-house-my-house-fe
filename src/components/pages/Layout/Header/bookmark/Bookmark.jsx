import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { StBookmark } from './styled';

const Bookmark = () => {
  return (
    <StBookmark>
        <FontAwesomeIcon icon={faBookmark} />
    </StBookmark>
  )
}

export default Bookmark