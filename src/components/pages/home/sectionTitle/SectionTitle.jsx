import React from "react";
import { StSectionTitle } from "./styled";

const SectionTitle = ({ title, button, onClick, marginTop }) => {
  return (
    <StSectionTitle marginTop={marginTop}>
      <h1>{title}</h1>
      {button ? <button onClick={onClick}>{button}</button> : null}
    </StSectionTitle>
  );
};

export default SectionTitle;
