import { useState } from "react";
import { GiSkills } from "react-icons/gi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import {
  useCreateSkillMutation,
  useDeleteSkillsMutation,
  useGetSkillsQuery,
} from "../../Redux/features/skills/skills.Api";
import { uploadToImgBB } from "../../Services/Cloud/ImbBB";
import { toast } from "sonner";

const Skill = () => {
  const [loading, setLoading] = useState(false);
  const [skill, setSkill] = useState("");
  const [photos, setPhotos] = useState([]);
  const [createSkill] = useCreateSkillMutation();
  const { data, refetch } = useGetSkillsQuery();
  const [deletedSkill] = useDeleteSkillsMutation();

  const handleSubmitSkill = async () => {
    setLoading(true);
    const image = await uploadToImgBB(photos[0]);
    const res = await createSkill({ name: skill, image });
    if (res?.data?.success) {
      toast.success("Skill Create Successfull!");
      refetch();
      setSkill("");
      setPhotos([]);
      setLoading(false);
    }
  };

  const deleteHandler = async (id) => {
    const res = await deletedSkill(id);
    console.log(res);
    if (res?.data?.success === true) {
      toast.success("Skill Delete Successfull!");
      refetch();
    }
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
      <div className="overflow-x-auto border border-gray-500 mt-6 max-w-xl mx-auto">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th className="text-center">Name</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data?.map((skill, i) => (
              <tr key={skill._id} className="hover:bg-[#0F172A] transition-all">
                <th>{i + 1}</th>
                <td className="text-center">{skill?.name}</td>
                <td className="text-center">
                  <p
                    onClick={() => deleteHandler(skill?._id)}
                    className="cursor-pointer hover:underline w-fit mx-auto"
                  >
                    Delete
                  </p>
                </td>
              </tr>
            ))}
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
            >
              {loading ? "Loading..." : "Save Your Skill"}
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Skill;
