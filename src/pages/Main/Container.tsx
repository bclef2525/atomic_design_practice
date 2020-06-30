import React, { useState } from "react";
import Presenter from "./Presenter";
export interface TextInput {
  name: string;
  sex: string;
  storeName: string;
  etc: string;
  time: string;
}
const Container = () => {
  const [inputText, setInputText] = useState<TextInput>({
    name: "",
    sex: "",
    storeName: "",
    etc: "",
    time: "",
  });
  const handleInput = (text: string, name: string) => {
    switch (name) {
      case "이름":
        setInputText({ ...inputText, name: text });
        break;
      case "성별":
        setInputText({ ...inputText, sex: text });
        break;
      case "매장명":
        setInputText({ ...inputText, storeName: text });
        break;
      case "기타":
        setInputText({ ...inputText, etc: text });
        break;
      case "시간":
        setInputText({ ...inputText, time: text });
        break;
    }
  };
  return <Presenter inputText={inputText} handleInput={handleInput} />;
};
export default Container;
