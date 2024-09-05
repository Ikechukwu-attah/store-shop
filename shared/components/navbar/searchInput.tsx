import React from "react";
import Input, { InputType } from "../inputs";
import Dropdown, { DropdownType } from "../dropdown/dropdown";

const SearchInput = () => {
  const data = [
    { label: "Option1" },
    { label: "Option2" },
    { label: "Option3" },
  ];

  return (
    <div className="flex items-center border border-main rounded-md bg-white">
      <Input
        placeholder="Search"
        width="80%"
        inputType="text"
        onChange={() => console.log("search")}
        type={InputType.BASE_INPUT}
        showBorder={false}
      />
      <div className="h-full flex items-center border-l-2 border-gray-300">
        <Dropdown
          type={DropdownType.basic}
          data={data}
          onSelect={() => console.log("search")}
          showBorder={false}
        />
      </div>

      <button className="bg-primary text-white text-xl px-4 py-2 rounded-r-md">
        Submit
      </button>
    </div>
  );
};

export default SearchInput;
