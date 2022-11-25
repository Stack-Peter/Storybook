import ArrowDown from "../../../assets/svg/ArrowDown";
import { useState } from "react";
import Elipse from "../../../assets/svg/Elipse";

const SubItem = ({
  content,
  isOnLastChild,
}: {
  content: any;
  isOnLastChild: any;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  if (content.isBiDimensional) isOnLastChild(false);
  if (content.lastChildren) isOnLastChild(true);
  return (
    <>
      <div
        onClick={() => setIsOpen((prevState) => !prevState)}
        key={content.name}
        className={`group flex w-full items-center rounded-md py-2 pl-5 pr-2 text-sm font-medium
         text-gray-600 cursor-pointer 
         ${content.lastChildren ? "!pl-11" : ""}
         ${isOpen ? "" : "hover:bg-gray-50 hover:text-gray-600"}
         ${content.lastChildren && isOpen ? "bg-blue-100" : ""}
         `}
      >
        <ArrowDown
          position={`absolute right-4 ${isOpen ? "-rotate-120" : "-rotate-90"}`}
        />
        <Elipse />
        <span className="mr-[19px]" />
        {content.name}
      </div>
      {isOpen ? (
        <div className="space-y-1">
          {content?.children?.map((subItem: any) => (
            <SubItem content={subItem} isOnLastChild={isOnLastChild} />
          ))}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default SubItem;
