import React from "react";
import { StThumbnail } from "./styled";

const Thumbnail = ({ children, ...props }) => {
  return <StThumbnail {...props}>{children}</StThumbnail>;
};

export default Thumbnail;
