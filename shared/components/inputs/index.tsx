"use client";

import React, { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import InputComponent from "./input";

export enum InputType {
  BASE_INPUT = "baseInput",
  INPUT_GROUP = "inputGroup",
  INPUT_WITH_LABEL = "inputWithLabel",
  BASE_TEXTAREA = "baseTextArea",
  BASE_TEXTAREA_WITH_LABEL = "baseTextAreaWithLabel",
  SEARCH_INPUT_WITH_SEARCH_ICON = "searchInputWithSearchIcon",
  SEARCH_INPUT_WITH_CANCEL_ICON = "searchInputWithCancelIcon",
}

interface InputProps {
  type: InputType;
  label?: string;
  name?: string;
  inputType: string;
  width: string;
  buttonText?: string;
  placeholder?: string;
  value?: string;
  clearInput?: (name: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  type,
  width,
  label,
  placeholder,
  inputType,
  value,
  name,
  buttonText,
  clearInput,
  onChange,
}: InputProps) => {
  const [data, setData] = useState<{ [key: string]: string }>({});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  switch (type) {
    case InputType.BASE_INPUT:
      return (
        <InputComponent
          inputType="text"
          onChange={onChange}
          name="firstName"
          placeholder="Enter your name"
          width="100%"
          typeOfInput={InputType.BASE_INPUT}
        />
      );

    case InputType.INPUT_GROUP:
      return (
        <div
          className="flex justify-between items-center  bg-white border border-gray-300 rounded-md pl-4  focus-within:border-main"
          style={{ width }}
        >
          <InputComponent
            inputType="text"
            onChange={onChange}
            name="firstName"
            placeholder="Enter your name"
            width="100%"
            typeOfInput={InputType.INPUT_GROUP}
          />
          <button className="bg-primary text-white text-xl px-4 py-2 rounded-r-md rounded-br-md">
            {buttonText}
          </button>
        </div>
      );

    case InputType.INPUT_WITH_LABEL:
      return (
        <div className="flex flex-col " style={{ width }}>
          <label>{label}</label>
          <InputComponent
            inputType="text"
            onChange={onChange}
            name="firstName"
            placeholder="Enter your name"
            width="100%"
            typeOfInput={InputType.BASE_INPUT}
          />
        </div>
      );

    case InputType.BASE_TEXTAREA:
      return (
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2 outline-none focus-within:border-main"
          style={{ width: width }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name || ""}
        />
      );
    case InputType.BASE_TEXTAREA_WITH_LABEL:
      return (
        <div className="flex flex-col " style={{ width }}>
          <label>{label}</label>
          <textarea
            className="border border-gray-300 rounded-md px-4 py-2 width-[90%] outline-none focus-within:border-main"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name || ""}
          />
        </div>
      );

    case InputType.SEARCH_INPUT_WITH_SEARCH_ICON:
      return (
        <div
          className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-md pl-4 pr-2 focus-within:border-main "
          style={{ width }}
        >
          <InputComponent
            inputType="text"
            onChange={onChange}
            name="firstName"
            placeholder="Enter your name"
            width="100%"
            typeOfInput={InputType.BASE_INPUT}
          />
          <CiSearch size={30} cursor={"pointer"} />
        </div>
      );

    case InputType.SEARCH_INPUT_WITH_CANCEL_ICON:
      return (
        <div
          className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-md pl-4 pr-2 focus-within:border-main "
          style={{ width }}
        >
          <InputComponent
            inputType="text"
            onChange={onChange}
            name={name || ""}
            placeholder="Enter your name"
            width="100%"
            value={value}
            typeOfInput={InputType.BASE_INPUT}
          />
          <IoCloseOutline
            size={30}
            cursor={"pointer"}
            onClick={() => {
              clearInput && name && clearInput(name), console.log(name);
            }}
          />
        </div>
      );
    default:
      return <div>Input</div>;
  }
};

export default Input;
