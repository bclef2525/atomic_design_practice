import React from "react";
import styled from "styled-components";
import { LabelProps } from "../../entities/Atoms";
interface Props {
  labelProps?: LabelProps | undefined;
}
const LabelContainer = styled.p<{
  fontSize?: string;
  textAlign?: "center" | "left" | "right" | undefined;
  style?: React.CSSProperties | undefined;
  fontColor?: string;
  fontWeight?: string;
}>`
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : 500)};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "12px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
  color: ${({ fontColor }) => (fontColor ? fontColor : "#404040")};
  line-height: 2;
  ${({ style }) => {
    return `{style}`;
  }};
`;
const Label = ({ labelProps }: Props) => {
  return (
    <LabelContainer
      fontWeight={labelProps?.fontWeight}
      style={labelProps?.style}
      fontSize={labelProps?.fontSize}
      textAlign={labelProps?.textAlign}
      fontColor={labelProps?.fontColor}
    >
      {labelProps?.children}
    </LabelContainer>
  );
};

export default Label;
