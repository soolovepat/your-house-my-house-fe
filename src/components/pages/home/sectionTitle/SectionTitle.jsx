import React from "react";
import { StSectionTitle } from "./styled";

const SectionTitle = ({ title, button, onClick }) => {
  return (
    <StSectionTitle>
      <h1>{title}</h1>
      {button ? <button onClick={onClick}>{button}</button> : null}
    </StSectionTitle>
  );
};

export default SectionTitle;
