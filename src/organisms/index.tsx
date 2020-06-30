import React from "react";
import InputWithLabel from "../molecules/InputWithLabel";
interface Data {
  title: string;
  value: string;
}
interface Props {
  data: Data[];
  onChange: (text: string, name: string) => void;
  value?: string[];
}
const InputListWithLabel = ({ onChange, value, data }: Props) => {
  return (
    <>
      {data.map((data: Data, index: number) => {
        return (
          <InputWithLabel
            key={index}
            labelProps={{
              children: data.title,
              fontSize: "20px",
              style: { marginLeft: "40px" },
            }}
            inputProps={{
              height: "40px",
              borderRadius: true,
              style: { minWidth: "500px" },
              fontSize: "13px",
            }}
            value={data.value}
            name={data.title}
            onChange={onChange}
          ></InputWithLabel>
        );
      })}
    </>
  );
};

export default InputListWithLabel;
