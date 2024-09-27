"use client";

import { type PropsWithChildren } from "react";
import { HiBell } from "react-icons/hi2";

import { DeskstopSidebar } from "./DeskstopSidebar";
import { MobileSidebar } from "./MobileSidebar";
import { ProfileMenu } from "./ProfileMenu";
import { Separator } from "./Separator";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="bg-white">
      <DeskstopSidebar />

      <div className="lg:pl-72 h-screen">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <MobileSidebar />

          <Separator className="lg:hidden h-6 w-px" />

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 items-center">
            <div className="flex-1">
              <span className="text-xl lg:text-2xl leading-7 font-semibold">
                Dashboard
              </span>
            </div>

            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">View notifications</span>
                <HiBell aria-hidden="true" className="h-6 w-6" />
              </button>

              <Separator className="hidden lg:block lg:h-6 lg:w-px" />

              <ProfileMenu />
            </div>
          </div>
        </div>

        <main className="py-10">
          <div className="px-4 sm:px-6 lg:px-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
