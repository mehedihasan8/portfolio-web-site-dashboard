import { useState } from "react";
import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub, FaLink } from "react-icons/fa6";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { MdTitle } from "react-icons/md";
import { PiChatCenteredText } from "react-icons/pi";
import GetAllProject from "./GetAllProject";

const AddProject = () => {
  //   const [loading, serLoading] = useState(false);
  const [technology, setTechnology] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  const [techInput, setTechInput] = useState("");

  const addTechnology = () => {
    if (techInput.trim() !== "") {
      setTechnology([...technology, techInput.trim()]);
      setTechInput("");
    }
  };

  const deleteTechnology = (text) => {
    const deleteTechnology = technology.filter((a) => text !== a);
    setTechnology([...deleteTechnology]);
  };

  return (
    <div className="px-6 py-8">
      <div className="flex justify-between items-center pb-8">
        <div className="flex items-center gap-3">
          <h1
            onClick={() => setIsVisible(true)}
            className={`${
              isVisible ? "underline text-white" : ""
            } text-xl transition-all cursor-pointer`}
          >
            Create Project
          </h1>
          <h1
            onClick={() => setIsVisible(false)}
            className={`${
              isVisible ? "" : "underline text-white"
            } text-xl transition-all cursor-pointer`}
          >
            See All Project
          </h1>
        </div>
        <h1 className="text-primaryColor underline text-lg hover:text-blue-600 transition-all">
          Back To Home
        </h1>
      </div>
      {isVisible ? (
        <div>
          <form>
            <div>
              <div className="flex items-center justify-between gap-5">
                <label className="input input-bordered flex items-center gap-2 w-2/4">
                  <FaProjectDiagram />
                  <input
                    name="projectName"
                    type="text"
                    autoComplete="off"
                    className="grow"
                    placeholder="Project Name"
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-2/4">
                  <MdTitle size={20} />
                  <input
                    name="projectTitle"
                    type="text"
                    autoComplete="off"
                    className="grow"
                    placeholder="Project Title"
                  />
                </label>
              </div>
              <div className="flex items-center justify-between gap-5 mt-5">
                <label className="input input-bordered flex items-center gap-2 w-2/4">
                  <FaGithub />
                  <input
                    name="githubClient"
                    type="text"
                    autoComplete="off"
                    className="grow"
                    placeholder="GitHub Client Link..."
                  />
                </label>
                <label className="input input-bordered flex items-center gap-2 w-2/4">
                  <FaGithub />
                  <input
                    name="githubServer"
                    type="text"
                    autoComplete="off"
                    className="grow"
                    placeholder="GitHub Server Link..."
                  />
                </label>
              </div>
              <div className="flex items-center justify-between gap-5 mt-5">
                <label className="input input-bordered flex items-center gap-2 w-2/4">
                  <FaLink />
                  <input
                    name="liveLink"
                    type="text"
                    className="grow"
                    autoComplete="off"
                    placeholder="Project Live Link..."
                  />
                </label>
                <div className="w-2/4">
                  <input
                    accept="*/image"
                    type="file"
                    className="file-input file-input-bordered w-full"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between gap-5 mt-5">
                <label className="input input-bordered flex items-center gap-2 w-full relative">
                  <HiSquare3Stack3D />

                  <input
                    type="text"
                    placeholder="Add Technology"
                    value={techInput}
                    onChange={(e) => setTechInput(e.target.value)}
                  />
                  <span
                    onClick={addTechnology}
                    className="bg-blue-800 py-3 px-14 rounded-r-md font-semibold cursor-pointer absolute top-0 right-0"
                  >
                    Add
                  </span>
                </label>
              </div>
              <div className="mt-4">
                {technology.map((tech, index) => (
                  <span
                    key={index}
                    onClick={(e) => deleteTechnology(e.target.innerText)}
                    className="inline-block bg-gray-200 text-gray-700 py-1 px-2 m-1 rounded transition-all duration-300 hover:bg-red-500 hover:cursor-pointer hover:text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 relative">
              <PiChatCenteredText className="size-[18px] absolute top-[14px] left-3" />

              <textarea
                className="textarea textarea-bordered w-full h-28 px-[34px]"
                placeholder="Type Project Details"
              />
            </div>
            <div className="flex items-center justify-center py-5">
              <input
                className="bg-blue-800 py-3 px-14 rounded font-semibold cursor-pointer"
                type="submit"
                value="Create Project"
              />
            </div>
          </form>
        </div>
      ) : (
        <>
          <GetAllProject />
        </>
      )}
    </div>
  );
};

export default AddProject;
