import { FaRegCircleUser } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";

function ShortNav() {
  return (
    <div className="flex items-center justify-between">
      <Link to="" className="text-2xl font-['Great_Vibes',_cursive]">
        <span className=" text-3xl text-[#0CB0D8] hover:text-white ">F</span>
        <span>oysal </span>
      </Link>

      <div className="flex items-center gap-2">
        <div className="relative">
          <IoMdNotificationsOutline className="text-2xl text-[#94A3B8] transition-all ease-in-out hover:text-white duration-300" />
          <div className="w-4 h-4 text-[9px] flex items-center justify-center bg-blue-700 rounded-full absolute -top-1 right-0">
            3
          </div>
        </div>
        <FaRegCircleUser className="text-xl text-[#94A3B8] transition-all ease-in-out hover:text-white duration-300" />
      </div>
    </div>
  );
}

export default ShortNav;
