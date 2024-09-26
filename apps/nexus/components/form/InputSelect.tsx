"use client";

import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import { HiChevronDown } from "react-icons/hi2";

const roles: Array<object> = [
  {
    id: "admin",
    name: "admin",
  },
  {
    id: "manager",
    name: "manager",
  },
  {
    id: "user",
    name: "user",
  },
];

export const InputSelect = ({ field }) => {
  return (
    <Select
      className="relative w-full"
      name={field.name}
      selectedKey={field.state.value}
      onSelectionChange={field.handleChange}
    >
      <Label className="block text-sm font-medium leading-6 text-white">
        Role
      </Label>

      <div className="relative mt-2">
        <Button className="block w-full rounded-md border-0 bg-white/5 py-1.5 min-h-10 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6">
          <SelectValue className="block truncate capitalize px-3 text-start text-white ">
            {({ selectedText }) => selectedText || ""}
          </SelectValue>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <HiChevronDown
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </Button>

        <Popover className="w-full sm:max-w-sm">
          <ListBox className="max-h-60 overflow-auto rounded-md bg-gray-800 py-1 text-base shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm">
            {roles.map(({ id, name }) => (
              <ListBoxItem
                key={id}
                id={id}
                className="text-white relative cursor-pointer select-none py-2 px-3  hover:bg-gray-700"
                textValue={name}
              >
                <span className="block truncate text-start capitalize">
                  {name}
                </span>
              </ListBoxItem>
            ))}
          </ListBox>
        </Popover>
      </div>
    </Select>
  );
};
