import React from "react";
import {StInput} from "./styled";

/** InputBox 안에 들어가는 기본 컴포넌트 */
const Input = (props) => {
    const { value, name, type, handleChange, placeholder } = props;
    return (
            <StInput 
            value={value} 
            name={name} 
            type={type} 
            onChange={handleChange} 
            placeholder={placeholder} />
    );
};

export default Input;
