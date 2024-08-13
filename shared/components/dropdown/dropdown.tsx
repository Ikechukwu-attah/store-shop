"use client";

import React, { useState } from "react";

export enum DropdownType {
  basic = "basic",
  multiSelect = "multiSelect",
  checkbox = "checkbox",
}

interface DropDownProps {
  type: DropdownType;
  data: string[];
  onSelect: (select: string | string[]) => void;
}

const Dropdown = ({ type, data, onSelect }: DropDownProps) => {
  const [selected, setSelected] = useState<string | string[]>(
    type === DropdownType.basic ? "" : []
  );

  const handleSelect = (item: string) => {
    if (type === DropdownType.basic) {
      setSelected(item);
      onSelect(item);
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
    <div className="w-1/2 border border-green-400 p-2">
      {data.map((item, index) => (
        <div key={index} className="mb-2">
          {type === DropdownType.checkbox && (
            <label>
              <input
                type="checkbox"
                checked={(selected as string[]).includes(item)}
                onChange={() => handleSelect(item)}
                value={item}
              />
              {item}
            </label>
          )}

          {type === DropdownType.multiSelect && (
            <ul className="cursor-pointer" onClick={() => handleSelect(item)}>
              <li
                className={`cursor-pointer ${
                  (selected as string[]).includes(item) ? "bg-green-500" : ""
                }`}
              >
                {item}
              </li>
            </ul>
          )}

          {type === DropdownType.basic && (
            <ul className="cursor-pointer" onClick={() => handleSelect(item)}>
              <li
                className={`cursor-pointer hover:bg-green-500 ${
                  (selected as string) === item ? "bg-white " : ""
                }`}
              >
                {item}
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
