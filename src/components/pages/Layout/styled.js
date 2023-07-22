import styled from 'styled-components';
import {theme} from "../../../styles/theme";

export const StLayout = styled.div`
  width: 100%;
  height: auto;

  & > main {
    ${({ theme }) => theme.container('column')};
  }
`;
