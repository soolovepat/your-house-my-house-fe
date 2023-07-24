import styled from "styled-components";

export const StArticleContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px 20px;
    margin-bottom: 40px;

    & > div {
        width: 100%;
        text-align: center;

        & > img {
            width: 100%;
        }
        & > h3 {
            margin-top: 10px;
            font-size: 20px;
            line-height: 24px;
            font-weight: 700;
        } 
        & > p {
            margin-top: 10px;
            font-size: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            gap: 5px;
        }  
    }
`;

export const StFilterContainer = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 5px;
`;
