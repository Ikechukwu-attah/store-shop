"use client";

import React, { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

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
        <input
          className="border border-gray-300 rounded-md px-4 py-2 "
          placeholder={placeholder}
          value={value}
          style={{ width: width }}
          onChange={onChange}
          type={inputType}
          name={name}
        />
      );

    case InputType.INPUT_GROUP:
      return (
        <div className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-md pl-4 ">
          <input
            className="border-none outline-none"
            style={{ width: width }}
            placeholder={placeholder}
            value={value}
            name={name}
            onChange={onChange}
            type={inputType}
          />
          <button className="bg-primary text-white text-xl px-4 py-2 rounded-r-md rounded-br-md">
            {buttonText}
          </button>
        </div>
      );

    case InputType.INPUT_WITH_LABEL:
      return (
        <div className="flex flex-col w-full">
          <label>{label}</label>
          <input
            className="border border-gray-300 rounded-md px-4 py-2"
            placeholder={placeholder}
            value={value}
            style={{ width: width }}
            onChange={onChange}
            name={name}
            type={inputType}
          />
        </div>
      );

    case InputType.BASE_TEXTAREA:
      return (
        <textarea
          className="border border-gray-300 rounded-md px-4 py-2"
          style={{ width: width }}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      );
    case InputType.BASE_TEXTAREA_WITH_LABEL:
      return (
        <div>
          <label>{label}</label>
          <textarea
            className="border border-gray-300 rounded-md px-4 py-2"
            style={{ width: width }}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />
        </div>
      );

    case InputType.SEARCH_INPUT_WITH_SEARCH_ICON:
      return (
        <div className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-md pl-4 ">
          <input
            className=" py-3 border-none outline-none "
            placeholder={placeholder}
            value={value}
            style={{ width: width }}
            onChange={onChange}
            type={inputType}
            name={name}
          />
          <CiSearch size={30} cursor={"pointer"} />
        </div>
      );

    case InputType.SEARCH_INPUT_WITH_CANCEL_ICON:
      return (
        <div className="flex justify-between items-center w-full bg-white border border-gray-300 rounded-md pl-4">
          <input
            className="py-3 border-none outline-none"
            placeholder={placeholder}
            value={value}
            style={{ width: width }}
            onChange={onChange}
            name={name}
            type={inputType}
          />
          <IoCloseOutline size={30} cursor={"pointer"} />
        </div>
      );
    default:
      return <div>Input</div>;
  }
};

export default Input;
