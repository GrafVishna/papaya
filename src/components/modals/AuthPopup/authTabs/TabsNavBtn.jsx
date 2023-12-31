import * as React from "react";
import { Dialog, Tab } from "@headlessui/react";

export const TabsNavBtn = ({ content }) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const tabAllClasses =
    "outline-none flex mobile-s:px-10 px-5 py-3 pb-5 focus:bg-lg-decryption-rotate";
  const tabBtnClasses = `${tabAllClasses} opacity-60 `;
  const tabActiveBtnClasses = `${tabAllClasses} opacity-100 `;

  return (
    <Tab
      className={({ selected }) =>
        classNames(selected ? tabActiveBtnClasses : tabBtnClasses)
      }
    >
      <Dialog.Title
        as="h3"
        className=" text-body-intro font-medium leading-6 text-white"
      >
        {content}
      </Dialog.Title>
    </Tab>
  );
};
