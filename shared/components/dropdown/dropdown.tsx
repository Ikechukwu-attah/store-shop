"use client";

import Image from "next/image";
import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export enum DropdownType {
  basic = "basic",
  multiSelect = "multiSelect",
  checkbox = "checkbox",
}

interface DropdownItems {
  label: string;
  flag?: string;
}

interface DropDownProps {
  type: DropdownType;
  data: DropdownItems[];
  onSelect: (select: string | string[]) => void;
  width?: string;
  showBorder?: boolean;
}

const Dropdown = ({
  type,
  data,
  onSelect,
  width,
  showBorder = true,
}: DropDownProps) => {
  const [selected, setSelected] = useState<string | string[]>(
    type === DropdownType.basic ? "" : []
  );
  const [selectedFlag, setSelectedFlag] = useState<string | undefined>(
    undefined
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSelect = (item: string, itemFlag?: string) => {
    if (type === DropdownType.basic) {
      setSelected(item);
      setSelectedFlag(itemFlag);
      onSelect(item);
      setIsOpen(false);
    } else if (
      type === DropdownType.checkbox ||
      type === DropdownType.multiSelect
    ) {
      const isSelected = (selected as string[]).includes(item);
      const newSelection = isSelected
        ? (selected as string[]).filter((i) => i !== item)
        : [...(selected as string[]), item];
      setSelected(newSelection);
      onSelect(newSelection);
    }
  };

  return (
    <div
      className="relative inline-block text-left"
      style={{ width }} // Apply fixed width to prevent resizing
    >
      <div
        className="flex justify-between items-center px-2  border-green-400 border-0 py-2 bg-white  cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="text-sm text-dark flex items-center gap-2">
          {(!Array.isArray(selected) && selected) || "Choose"}{" "}
          {selectedFlag && (
            <Image
              src={selectedFlag}
              alt="Selected flag"
              width={20}
              height={20}
            />
          )}
        </h4>
        <MdKeyboardArrowDown />
      </div>

      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-full bg-white ${showBorder ? "border border-gray-300 rounded-md" : ""} shadow-lg`}
          style={{ width }} // Ensure the dropdown content has a fixed width
        >
          {data.map((item, index) => (
            <div key={index} className="mt-1 mb-1">
              {type === DropdownType.checkbox && (
                <label
                  className={`flex gap-2 px-2 text-dark text-sm ${
                    (selected as string[]).includes(item.label)
                      ? "bg-light-blue text-main"
                      : ""
                  } `}
                >
                  <input
                    type="checkbox"
                    checked={(selected as string[]).includes(item.label)}
                    onChange={() => handleSelect(item.label)}
                    value={item.label}
                  />
                  {item.label}
                </label>
              )}

              {type === DropdownType.multiSelect && (
                <ul
                  className="cursor-pointer"
                  onClick={() => handleSelect(item.label)}
                >
                  <li
                    className={`cursor-pointer px-2 text-dark text-sm ${
                      (selected as string[]).includes(item.label)
                        ? "bg-light-blue"
                        : ""
                    }`}
                  >
                    {item.label}
                  </li>
                </ul>
              )}

              {type === DropdownType.basic && (
                <ul
                  className="cursor-pointer p-0"
                  onClick={() => handleSelect(item.label, item.flag)}
                >
                  <li
                    className={`cursor-pointer px-2 text-dark text-sm hover:bg-green-500 ${
                      (selected as string) === item.label
                        ? "bg-light-blue "
                        : ""
                    }`}
                  >
                    {item.flag ? (
                      <div className="flex items-center gap-2">
                        <h5>{item.label}</h5>
                        <Image
                          src={item.flag}
                          alt="country flag"
                          width={20}
                          height={20}
                        />
                      </div>
                    ) : (
                      item.label
                    )}
                  </li>
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
