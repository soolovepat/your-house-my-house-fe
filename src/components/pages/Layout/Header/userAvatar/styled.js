import styled from "styled-components";

export const StUserAvatar = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;

    &:hover {
      border-color: ${props => props.theme.primaryColor};
    }

     & > img {
        width: 100%;
     }
`;