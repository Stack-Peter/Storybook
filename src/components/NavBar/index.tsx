import Logo from "../../assets/svg/Logo";
import Avatar from "./components/Avatar";
import Input from "./components/Input";
import Notifications from "./components/Notifications";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-[78px] px-8 border-b-[1px] border-gray-300">
      <Logo />
      <Input />
      <div className="flex justify-between items-center">
        <Notifications />
        <Avatar />
      </div>
    </div>
  );
};

export default NavBar;
