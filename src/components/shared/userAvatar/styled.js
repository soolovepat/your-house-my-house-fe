import styled, { css } from "styled-components";

const hoverOn = css`
  &:hover {
    border-color: ${(props) => props.theme.primaryColor};
  }
`;

export const StUserAvatar = styled.span`
  ${(props) => (props.type === "hoverOn" ? hoverOn : "")}

  border-radius: 50%;
  border: 2px solid transparent;
  cursor: pointer;

  & > img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
  }
`;
