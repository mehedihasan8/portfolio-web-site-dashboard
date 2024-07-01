import { useState } from "react";
import { GiSkills } from "react-icons/gi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Skill = () => {
  const [skill, setSkill] = useState("");
  const [photos, setPhotos] = useState([]);

  const handleSubmitSkill = () => {
    console.log("click");
    console.log({ skill });
    console.log({ photos });
  };
  return (
    <div className="py-6 px-4">
      <div className="flex items-center justify-between">
        <div className="">
          <p className="text-3xl font-semibold">Your Skill</p>
          <p className="text-xs text-[#7b818a]">
            Keep track of your skill status{" "}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="flex items-center gap-2 text-white bg-blue-800 rounded-full border border-[#564DE6] py-2 px-4 text-sm  transition-all ease-in-out duration-300 cursor-pointer"
          >
            <HiOutlinePencilAlt className="text-lg" />
            <span className="font-bold">Add Skill</span>
          </div>
        </div>
      </div>
      <div className="overflow-x-auto border border-gray-500 mt-6">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover:bg-[#0F172A] transition-all">
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover:bg-[#0F172A] transition-all">
              <th>2</th>
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover:bg-[#0F172A] transition-all">
              <th>3</th>
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box px-5 py-4">
          <div className="flex items-center justify-between pb-4">
            <h3 className="font-bold text-xl">Add Skill</h3>
            <form method="dialog">
              <button>
                <RxCross2 className="size-7" />
              </button>
            </form>
          </div>
          <div className="flex items-center justify-between flex-col gap-4">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <GiSkills />
              <input
                name="yourSkill"
                type="text"
                onChange={(e) => setSkill(e.target.value)}
                className="grow"
                autoComplete="off"
                placeholder="Type Your Skill..."
              />
            </label>
            <div className="w-full">
              <input
                accept="*/image"
                type="file"
                onChange={(e) => setPhotos(Array.from(e.target.files))}
                className="file-input file-input-bordered w-full"
              />
            </div>
            <button
              onClick={() => handleSubmitSkill()}
              className="bg-blue-800 py-3 w-full rounded font-semibold cursor-pointer"
              type="submit"
              value="Create Project"
            >
              Save Your Skill
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Skill;
