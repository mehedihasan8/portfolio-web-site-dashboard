import { FaPen } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoMdSettings } from "react-icons/io";

function Blog() {
  return (
    <div className="bg-[#F1F5F9] h-full p-8">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-3xl text-blue-950 font-semibold">
            Skill Dashboard{" "}
          </p>
          <p className="text-xs text-[#7b818a]">
            Keep track of your skill status{" "}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#7b818a] rounded-full border border-[#7b818a67] py-2 px-4 text-sm transition-all ease-in-out hover:bg-[#7b818a2c] duration-300">
            <IoMdSettings className="text-lg" />
            <span className="font-bold">Settings</span>
          </div>
          <div className="flex items-center gap-2 text-white bg-[#564DE6] rounded-full border border-[#564DE6] py-2 px-4 text-sm  transition-all ease-in-out hover:bg-[#2f24c8] duration-300">
            <HiOutlinePencilAlt className="text-lg" />
            <span className="font-bold">Add Skill</span>
          </div>
        </div>
      </div>

      <div className=" my-7">
        <div className="overflow-x-auto rounded-3xl border border-b-0 border-[#7b818a2a]">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="bg-[#7b818a1e] text-[#75777b]">
                <th className="py-5">Skill Name</th>
                <th>Catagory</th>
                <th>Expertise</th>
                <th></th>
              </tr>
            </thead>
            <tbody className="">
              {/* row 1 */}
              <tr className="border-b border-[#7b818a2a]">
                <td className="py-5">Html</td>
                <td>Frond-End</td>
                <td>80%</td>
                <td>
                  <div className="flex items-center gap-5">
                    <FaPen />
                    <FaTrashCan />
                  </div>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="border-b border-[#7b818a2a]">
                <td className="py-5">Css</td>
                <td>Frond-End</td>
                <td>90%</td>
                <td>
                  <div className="flex items-center gap-5">
                    <FaPen />
                    <FaTrashCan />
                  </div>
                </td>
              </tr>
              {/* row 3 */}
              <tr className="border-b border-[#7b818a2a]">
                <td className="py-5">js</td>
                <td>Back-End</td>
                <td>95%</td>
                <td>
                  <div className="flex items-center gap-5">
                    <FaPen />
                    <FaTrashCan />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="w-fit">
        <div className=" text-[#7b818a] rounded-full border border-[#7b818a67] py-2 px-7 text-sm transition-all ease-in-out hover:bg-[#7b818a2c] duration-300">
          <span className="font-semibold">See All Skill</span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
