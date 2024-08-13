"use client";
import Dropdown, { DropdownType } from "@/shared/components/dropdown/dropdown";
import Image from "next/image";

export default function Home() {
  const data = ["Option 1", "Option 2", "Option 3"];

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
      />

      <Dropdown
        type={DropdownType.checkbox}
        data={data}
        onSelect={handleSelect}
      />

      <Dropdown type={DropdownType.basic} data={data} onSelect={handleSelect} />
    </main>
  );
}
