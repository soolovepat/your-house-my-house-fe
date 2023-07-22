import React from "react";
import from "./styled";

const Input = (props) => {
    const { value, name, type, handleChange, placeholder } = props;
    return (
            <input 
            value={value} 
            name={name} 
            type={type} 
            onChange={handleChange} 
            placeholder={placeholder} />
    );
};

export default Input;
