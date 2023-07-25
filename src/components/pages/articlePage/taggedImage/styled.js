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
