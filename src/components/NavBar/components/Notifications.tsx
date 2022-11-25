import { useState } from "react";
import Bell from "../../../assets/svg/Bell";
import SlideOverlay from "../../SlideOverlay"

const Notifications = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mr-8 flex items-center">
      <SlideOverlay open={open} setOpen={setOpen} />
      <Bell setOpen={setOpen}/>
    </div>
  );
};

export default Notifications;
