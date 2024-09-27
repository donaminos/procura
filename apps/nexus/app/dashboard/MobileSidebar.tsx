import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { HiCog6Tooth, HiXMark, HiBars3 } from "react-icons/hi2";

import { navigation, org } from "./constants";

import { classNames } from "@/utils/style";

const SidebarMenu = () => {
  return (
    <nav className="h-full w-72 flex flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 pt-8 ring-1 ring-white/10">
      <ul role="list" className="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" className="-mx-2 space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                  )}
                >
                  <item.icon aria-hidden="true" className="h-6 w-6 shrink-0" />
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <div className="text-xs font-semibold leading-6 text-gray-400">
            Your org
          </div>
          <ul role="list" className="-mx-2 mt-2 space-y-1">
            {org.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                  )}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">
                    {item.initial}
                  </span>
                  <span className="truncate">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </li>
        <li className="mt-auto">
          <a
            href="#"
            className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
          >
            <HiCog6Tooth aria-hidden="true" className="h-6 w-6 shrink-0" />
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export const MobileSidebar = () => {
  return (
    <DialogTrigger>
      <Button className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
        <span className="sr-only">Open sidebar</span>
        <HiBars3 aria-hidden="true" className="h-6 w-6" />
      </Button>
      <Dialog className="relative z-50 lg:hidden">
        {({ close }) => {
          return (
            <ModalOverlay className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-0">
              <div className="fixed w-full inset-0 flex">
                <Modal className="pt-16 flex items-start w-full transform transition duration-300 ease-in-out data-[closed]:-translate-x-full">
                  <div className="order-2 grow flex pl-6 justify-end pt-7 duration-300 ease-in-out data-[closed]:opacity-0">
                    <button type="button" onClick={close} className="mr-6">
                      <span className="sr-only">Close sidebar</span>
                      <HiXMark
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </button>
                  </div>

                  <SidebarMenu />
                </Modal>
              </div>
            </ModalOverlay>
          );
        }}
      </Dialog>
    </DialogTrigger>
  );
};
