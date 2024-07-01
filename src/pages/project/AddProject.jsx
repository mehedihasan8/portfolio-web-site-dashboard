import { FaProjectDiagram } from "react-icons/fa";
import { FaGithub, FaLink } from "react-icons/fa6";
import { MdTitle } from "react-icons/md";

const AddProject = () => {
  return (
    <div className="px-6">
      <h1 className="text-center text-2xl font-semibold pt-4 pb-10">
        Add Your Project
      </h1>
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
            <label className="input input-bordered flex items-center gap-2 w-2/4">
              <FaGithub />
              <input
                name="githubServer"
                type="text"
                className="grow"
                placeholder="GitHub Server Link..."
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProject;
