import { useGetProjectsQuery } from "../../Redux/features/project/projectApi";

const GetAllProject = () => {
  const { data } = useGetProjectsQuery(undefined);
  console.log({ data });
  return (
    <div className="overflow-x-auto border border-gray-500">
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Project Name</th>
            <th>Project Title</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {data?.data?.map((project, i) => (
            <tr key={i} className="hover:bg-[#0F172A] transition-all">
              <th>{i + 1}</th>
              <td>{project?.name}</td>
              <td>{project?.title}</td>
              <td className="text-center">
                <p className="cursor-pointer hover:underline w-fit mx-auto">
                  Delete
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetAllProject;
