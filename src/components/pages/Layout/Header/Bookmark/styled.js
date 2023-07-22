import styled from 'styled-components';
import {theme} from "../../../../../styles/theme";


export const StBookmark = styled.div`
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    & > svg {
        height: 100%;
        cursor: pointer;
        &:hover {
            color: ${({theme}) => theme.primaryColor};
        }
    }

`;