import styled from "styled-components";
import theme from "../../../../styles/theme";
import { StCategoryList } from "../../home/category/styled";

export const StTaggedImage = styled.div`
    width: 100%;
    position: relative;
    margin: 40px 0 10px;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StImageTagWrapper = styled.div`
    opacity: ${(props) => (props.$isHover ? 1.0 : 0)};
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease-in-out;
`;

export const StProductList = styled(StCategoryList)`
    & > li {
        width: 100px;
        height: 100px;
        border-radius: 30px;
        box-sizing: border-box;
        margin-right: 10px;
        margin-bottom: 40px;
        border: 2px solid transparent;
        overflow: hidden;

        &:hover {
            border-color: ${theme.primaryColor};
        }
        
        & > img { 
            width: 100%;
            height: 100%;
            &:hover {
                transform: scale(1.04);
            }
        }
    }
`;
