import { Disclosure } from "@headlessui/react";
import Home from "../../assets/svg/Home";
import Search from "../../assets/svg/Search";
import Promo from "../../assets/svg/Promo";
import Relatory from "../../assets/svg/Relatory";
import Retention from "../../assets/svg/Retention";
import ItemSidebar from "./components/ItemSidebar";

const navigation = [
  { name: "Início", current: true },
  {
    name: "Consulta",
    current: false,
    svg: <Search />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Retenção",
    current: false,
    svg: <Retention />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Promoções",
    current: false,
    svg: <Promo />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Relatórios",
    current: false,
    svg: <Relatory />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Relatórios",
    current: false,
    svg: <Relatory />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Relatórios",
    current: false,
    svg: <Relatory />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Relatórios",
    current: false,
    svg: <Relatory />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
  {
    name: "Relatórios",
    current: false,
    svg: <Relatory />,
    children: [
      {
        name: "Submenu-1",
        isBiDimensional: true,
        children: [{ name: "Submenu-2", lastChildren: true }],
      },
      { name: "Submenu-1" },
    ],
  },
];

function classNames(...classes: [String, String]) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex flex-grow flex-col overflow-y-auto border-r h-screen border-gray-200 bg-white pt-5 pb-4 max-w-[267px]">
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
          {navigation.map((item) =>
            !item.children ? (
              <div key={item.name}>
                <a
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-600"
                      : "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-600",
                    "group w-full flex items-center pl-3 pr-2 py-2 text-sm font-medium rounded-md"
                  )}
                >
                  <Home />
                  {item.name}
                </a>
              </div>
            ) : (
              <div key={item.name} className="space-y-1 relative">
                <ItemSidebar data={item} />
              </div>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
