import styled from 'styled-components';

export const StTaggedImage = styled.div`
    width: 100%;
    position: relative;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export const StImageTagWrapper = styled.div`
    opacity: ${props => props.$isHover? 1.0 : 0};
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.1s ease-in-out;
`;
