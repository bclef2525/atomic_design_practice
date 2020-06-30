import React from "react";
import styled from "styled-components";
import { Label, Input } from "../../atoms";
import { LabelProps, InputProps } from "../../entities/Atoms";
interface Props {
  labelProps?: LabelProps;
  inputProps?: InputProps;
  onChange: (text: string, name: string) => void;
  name: string;
  value?: string;
}
const Container = styled.div`
  width: 100%;
`;

const InputWithLabel = ({
  labelProps,
  inputProps,
  onChange,
  name,
  value,
}: Props) => {
  return (
    <Container>
      <Label labelProps={labelProps}></Label>
      <Input
        value={value}
        name={name}
        inputProps={inputProps}
        onChange={onChange}
      ></Input>
    </Container>
  );
};

export default InputWithLabel;
