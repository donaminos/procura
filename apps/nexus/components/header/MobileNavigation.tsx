"use client";

import { useState } from "react";

import {Button, Dialog, DialogTrigger, Modal} from 'react-aria-components';
import { HiBars3, HiXMark } from "react-icons/hi2";

import { navigation } from '@/components/header/constants';

export const MobileNavigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <DialogTrigger>
             
<Button
onPress={() => setMobileMenuOpen(true)}
className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 z-20"
>
  <span className="sr-only">Open main menu</span>
<HiBars3 aria-hidden="true" className="h-6 w-6" />
</Button>


<Modal
  className="lg:hidden fixed inset-0 z-50"
  isOpen={mobileMenuOpen}
  onOpenChange={setMobileMenuOpen}
>
  <Dialog className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
    {({ close }) => (
      <>
      <div className="flex items-center justify-between">
        <a href="#" className="-m-1.5 p-1.5">
        <span className="text-3xl font-bold text-white">Procura</span>
        </a>
      <Button
        onPress={close}
        className="-m-2.5 rounded-md p-2.5 text-gray-400"
      >
        <span className="sr-only">Close menu</span>
        <HiXMark aria-hidden="true" className="h-6 w-6" />
      </Button>
    </div>
      <div className="mt-6 flow-root">
        <div className="-my-6 divide-y divide-gray-500/25">
          <div className="space-y-2 py-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="py-6">
            <a
              href="#"
              className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
            >
              Log in
            </a>
          </div>
        </div>
        </div>
      </>
    )}
  </Dialog>
</Modal>
</DialogTrigger>
  );
};
