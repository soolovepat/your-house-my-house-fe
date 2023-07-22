import styled from 'styled-components';

export const StFooterWrap = styled.footer`
  width: 100%;
  padding: 40px 0;
  background-color: rgb(247, 249, 250);

  & > div {
    padding: 0 60px;
    box-sizing: border-box;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 30px;
    width: 100%;
    height: 100%;
  }

  nav {
    color: rgb(47, 52, 56);
    border-right: 1px solid rgb(234, 237, 239);
    height: 100%;
    padding-right: 40px;

    &:nth-child(2) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(6, min-content);
        grid-auto-flow: column;
        gap: 20px 10px;
    }

    &:nth-child(3) {
        font-size: 10px;
        line-height: 14px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        color: rgb(130, 140, 148);
        border-right: 0;
        padding-right: 0px;
    }
  }
`;