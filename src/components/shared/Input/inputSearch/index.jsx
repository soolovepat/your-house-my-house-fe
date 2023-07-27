import React from "react";
import Input from "../index";
import InputBox from "../../../shared/InputBox/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const InputSearch = (props) => {
  return (
    <InputBox>
      <FontAwesomeIcon icon={faSearch} />
      <Input {...props} />
      {true && <FontAwesomeIcon icon={faCircleXmark} />}
    </InputBox>
  );
};

export default InputSearch;
