import styled from "styled-components";
import { theme } from "../../../../styles/theme";

export const StFooterWrap = styled.footer`
    width: 100%;
    height: 330px;
    padding: 40px 0;
    box-sizing: border-box;
    background-color: rgb(247, 249, 250);

    & a:hover {
      text-decoration: underline;
    }

    & b {
      font-weight: 700;
    }

    & > div {
        ${({ theme }) => theme.container("column")};
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        font-size: 12px;
        line-height: 16px;
        display: grid;
        grid-template-columns: 1fr 1fr 2fr;
        column-gap: 30px;
    }

    nav {
        height: 100%;
        color: rgb(47, 52, 56);
        border-right: 1px solid rgb(234, 237, 239);
        padding-right: 30px;

        &:nth-child(1) {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: flex-start;
          gap: 12px;

          & > p {
            font-size: 12px;
            line-height: 20px;
            white-space: pre-wrap;
          }
        }

        &:nth-child(2) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(6, min-content);
            grid-auto-flow: column;
            gap: 20px 10px;
        }

        &:nth-child(3) {
            font-size: 12px;
            line-height: 20px;
            display: flex;
            flex-direction: column;
            gap: 12px;
            color: #828C94;
            border-right: 0;
            padding-right: 0px;

            & p, & address {
                color: inherit;
            }
        }
    }
`;

export const StLinkCSCenter = styled.span`
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }

    & > svg {
      width: 12px;
    }
`;

export const StLinkCSNumber = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-right: 6px;

  &:hover {
      text-decoration: underline;
    }
`;

export const StLinkCSTime = styled.span`
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
`;

export const StCSButton = styled.button`
    width: fit-content;
    height: 32px;
    margin: 0px;
    padding: 0px 8px;
    background: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    color: rgb(47, 52, 56);
    border: 1px solid rgb(218, 221, 224);
    white-space: nowrap;
    `;
