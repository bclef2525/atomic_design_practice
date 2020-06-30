import React from "react";
import styled from "styled-components";
import { InputProps } from "../../entities/Atoms/index";
interface Props {
  inputProps?: InputProps;
  name:string
  value?:string
  onChange:(text:string,name:string)=>void
}

const InputContainer = styled.div<{
 inputProps?:InputProps;
 style?:React.CSSProperties
}>`
  ${({style}) => {
    return `&&{style}`;
  }};
  border:${({style})=> style?.border?style.border : "1px solid #505050"};
  border-radius: ${({ inputProps }) => (inputProps?.borderRadius ? "5px" : "none")};
  width: ${({ inputProps }) => inputProps?.width};
  height: ${({ inputProps }) => inputProps?.height};
  font-size:${({inputProps})=>inputProps?.fontSize?inputProps?.fontSize:"1.5rem"};
  overflow: hidden;
  padding-left: 10px;
  margin: 10px 20px;
 
`;
const InputArea = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.5em;
`;
const Input = ({ inputProps ,value,onChange,name}: Props) => {
   
  const handleText = (text: string, name: string) => {
    onChange(text, name)
  };

  return (
    <InputContainer inputProps={inputProps} style={inputProps?.style}>
      <InputArea
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          handleText(e.target.value,name);
        }}
        value={value}
      ></InputArea>
    </InputContainer>
  );
};
export default Input;
