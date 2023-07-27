import styled from "styled-components";
import theme from "../../../../styles/theme";

export const StSectionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  font-weight: 700;
  margin-top: ${(props) => props.marginTop};

  h1 {
    font-size: 20px;
    letter-spacing: -0.3px;
  }

  button {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${theme.primaryColor};
    background: none;
  }
`;
