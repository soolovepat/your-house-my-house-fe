import React from "react";
import { StUserAvatar } from "./styled";

const UserAvatar = ({ ...props }) => {
  return (
    <StUserAvatar {...props}>
      <img src="/assets/images/img-avatar.png" alt="" />
    </StUserAvatar>
  );
};

export default UserAvatar;
