"use client";
import Dropdown, { DropdownType } from "@/shared/components/dropdown/dropdown";
import Image from "next/image";
import flag from "../shared/components/dropdown/assets/images/flag.png";
import Input, { InputType } from "@/shared/components/inputs";
import { type ClassValue } from "clsx";

export default function Home() {
  const data = [
    { label: "Option1" },
    { label: "Option2" },
    { label: "Option3" },
  ];
  const countryFlagData = [
    { label: "Shipt To1", flag: flag.src },
    { label: "Shipt To2", flag: flag.src },
    { label: "Shipt To4", flag: flag.src },
  ];

  const handleSelect = (selected: string | string[]) => {
    console.log("Selected items:", selected);
  };

  // Basic Dropdown
  return (
    <main className="flex min-h-screen text-primary flex-col items-center justify-between p-24 bg-red-500">
      <Dropdown
        type={DropdownType.multiSelect}
        data={data}
        onSelect={handleSelect}
        width="50%"
      />

      <Dropdown
        type={DropdownType.checkbox}
        data={data}
        onSelect={handleSelect}
        width="50%"
      />

      <Dropdown
        type={DropdownType.basic}
        data={countryFlagData}
        width="50%"
        onSelect={handleSelect}
      />

      <Input
        type={InputType.BASE_INPUT}
        placeholder="Enter your name"
        width="70%"
        inputType="text"
        name="firstName"
        onChange={(e) => {
          const { name, value } = e.target;
          console.log(name, value);
        }}
      />

      <Input
        type={InputType.INPUT_WITH_LABEL}
        placeholder="Enter your name"
        width="50%"
        inputType="text"
        label="Name"
        onChange={(e) => console.log(e.target.value)}
      />

      <Input
        type={InputType.INPUT_GROUP}
        placeholder="Enter your name"
        width="100%"
        label="Name"
        inputType="text"
        buttonText="submit"
        onChange={(e) => console.log(e.target.value)}
      />

      <Input
        type={InputType.SEARCH_INPUT_WITH_CANCEL_ICON}
        placeholder="Enter your name"
        width="100%"
        inputType="text"
        label="Name"
        buttonText="submit"
        onChange={(e) => console.log(e.target.value)}
      />

      <Input
        type={InputType.SEARCH_INPUT_WITH_SEARCH_ICON}
        placeholder="Enter your name"
        width="50%"
        inputType="text"
        label="Name"
        buttonText="submit"
        onChange={(e) => console.log(e.target.value)}
      />
    </main>
  );
}
