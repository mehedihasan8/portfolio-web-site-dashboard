import { Link, useNavigate } from "react-router-dom";
import { removeFromLocalStorage } from "../Services/Action/auth.services";

const ShortNav = () => {
  const navigate = useNavigate();
  const handelLogout = async () => {
    await removeFromLocalStorage();
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-between">
      <Link to="/" className="text-2xl font-['Great_Vibes',_cursive]">
        <span className=" text-3xl text-[#0CB0D8] hover:text-white ">F</span>
        <span>oysal </span>
      </Link>

      <div className="flex items-center cursor-pointer text-gray-200 transition-all duration-300 gap-2 text-lg hover:underline hover:text-[#0CB0D8]">
        <h1 onClick={() => handelLogout()}>Logout</h1>
      </div>
    </div>
  );
};

export default ShortNav;
