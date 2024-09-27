import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import { userNavigation } from "./constants";

export const ProfileMenu = () => {
  return (
    <MenuTrigger>
      <Button
        className="flex items-center p-1.5 focus:outline-none"
        aria-label="User menu"
      >
        <span className="sr-only">Open user menu</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt=""
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          className="h-8 w-8 rounded-full bg-gray-50"
        />
      </Button>
      <Popover>
        <Menu className="z-10 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none ">
          {userNavigation.map((item) => (
            <MenuItem
              key={item.name}
              className="focus:outline-none hover:bg-slate-100"
            >
              <a
                href={item.href}
                className="block px-3 py-1 text-sm leading-6 text-gray-900"
              >
                {item.name}
              </a>
            </MenuItem>
          ))}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
};
