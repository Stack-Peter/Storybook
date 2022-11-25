import ArrowDown from "../../../assets/svg/ArrowDown";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes: [String, String]) {
  return classes.filter(Boolean).join(" ");
}

const Avatar = () => {
  return (
    <div className="flex items-center justify-center">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            <div className="flex items-center justify-center">
              <span className="inline-flex h-[32px] w-[32px] items-center justify-center rounded-full bg-blue-500 mr-1">
                <span className="text-xs font-medium leading-none text-white">
                  FG
                </span>
              </span>
              <ArrowDown position=""/>
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-2 py-3 flex">
              <span className="inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-blue-500">
                <span className="text-xs font-medium leading-none text-white">
                  FG
                </span>
              </span>
              <div className="ml-2">
              <p className="truncate text-sm font-medium text-gray-900">
                Fernando Garcia
              </p>
              <p className="truncate text-xs font-medium text-[#BDBDBD]">
                ponf0001@martins.com.br
              </p>
              </div>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm  cursor-pointer"
                    )}
                  >
                    Gerenciar minha conta
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                  >
                    Item
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm border-t-2 text-[#DD2C00] cursor-pointer"
                    )}
                  >
                    Sair do sistema
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Avatar;
