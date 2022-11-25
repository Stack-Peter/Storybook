import React, { useState } from "react";
import ArrowDown from "../../../assets/svg/ArrowDown";
import SubItem from "./SubItem";

const ItemSidebar = ({ data }: { data: any }) => {
  function classNames(...classes: [String, String]) {
    return classes.filter(Boolean).join(" ");
  }
  const [isOpen, setIsOpen] = useState(false);
  const [isLastChildOpen, setIsLastChildOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        className={classNames(
          isLastChildOpen === false && isOpen
            ? "bg-blue-100 text-gray-600"
            : "bg-white text-gray-600 hover:bg-blue-100 hover:text-gray-600",
          "group w-full flex items-center pl-3 pr-2 py-2 text-left text-sm font-medium rounded-md focus:outline-none cursor-pointer"
        )}
      >
        {data.svg}
        {data.name}
        <ArrowDown
          position={
            isOpen
              ? "-rotate-120 absolute right-4"
              : "-rotate-90 absolute right-4"
          }
        />
      </div>
      {isOpen ? (
        <div className="space-y-1">
          {data.children.map((subItem: any) => (
            <SubItem content={subItem} isOnLastChild={setIsLastChildOpen} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ItemSidebar;
