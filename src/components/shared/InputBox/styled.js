import styled from 'styled-components';

export const StInputBox = styled.div`
    display: inline-block;
    width: auto;
    height: 40px;
    border: 1px solid #DADDE0;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    padding: 0 20px;
    box-sizing: border-box;
    color: #828C94;

    &:hover {
        background-color: #f7f9fa;
    }
    &:focus {
        border-color: var(--color-main);
    }
`;