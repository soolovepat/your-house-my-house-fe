import styled from 'styled-components';
import theme from '../../../../../styles/theme';

export const StFilteredInfoList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    margin-top: 10px;
    & > li {
        width: fit-content;
        height: fit-content;
        
        & > button {
            color: #fff;
            display: block;
            padding: 1px 8px 3px;
            font-size: 15px;
            line-height: 18px;
            font-weight: 700;
            border-radius: 26px;
            background-color: ${theme.primaryColor};

            &:hover {
                background-color: ${theme.primaryDarkColor};
            }

            & > svg {
                font-size: 0.8em;
                margin: 0 -4px 0 7px;
                vertical-align: -1px;
                color: #fff;
            }
        }

        &:last-child > button {
                color: ${theme.primaryDarkColor};
                background-color: transparent;

                &:hover {
                    background-color: transparent;
                    opacity: 0.5;
                }
            }
        
    }
`;