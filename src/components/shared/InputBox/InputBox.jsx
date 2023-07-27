import React from 'react'
import {StInputBox} from './styled'

const InputBox = (props) => {
    const {children} = props;
  return (
    <StInputBox>{children}</StInputBox>
  )
}

export default InputBox