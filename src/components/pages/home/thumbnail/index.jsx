import React from "react";
import { StThumbnail } from "../styled";

function Thumbnail({ children, type, column, ...props }) {
  return (
    <StThumbnail type={type} column={column} {...props}>
      {children}
    </StThumbnail>
  );
}

export default Thumbnail;
