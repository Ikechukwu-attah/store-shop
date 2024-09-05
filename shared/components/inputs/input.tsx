import React, { ChangeEvent, useState } from "react";
import { InputType } from ".";
interface InputProps {
  placeholder?: string;
  value?: string;
  width?: string;
  inputType: string;
  name: string;
  typeOfInput?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputComponent = ({
  placeholder,
  value,
  width,
  inputType,
  name,
  typeOfInput,
  onChange,
}: InputProps) => {
  return (
    <input
      className={` ${typeOfInput === "baseInput" ? " w-full px-4 py-2 outline-none  border-gray-300 rounded-md focus:border-main" : "px-4  py-2 outline-none rounded-md focus:border-main"}  `}
      style={{ width }}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={inputType}
      name={name}
    />
  );
};

export default InputComponent;
