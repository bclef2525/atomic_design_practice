import React from "react";
import { TextInput } from "./Container";
import InputListWithLabel from "../../organisms";
interface Props {
  inputText: TextInput;
  handleInput: (text: string, name: string) => void;
}

const Presenter = ({ inputText, handleInput }: Props) => {
  const handleChange = (text: string, name: string) => {
    console.log(text, name);
  };
  console.log(inputText);

  return (
    <>
      <InputListWithLabel
        data={[
          { title: "성명", value: inputText.name },
          { title: "성별", value: inputText.sex },
          { title: "매장명", value: inputText.storeName },
          { title: "기타", value: inputText.etc },
          { title: "시간", value: inputText.time },
        ]}
        onChange={handleInput}
      />
    </>
  );
};

export default Presenter;
