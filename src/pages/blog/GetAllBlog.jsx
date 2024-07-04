import { useGetBlogsQuery } from "../../Redux/features/blog/blogApi";

const GetAllBlog = () => {
  const { data } = useGetBlogsQuery(undefined);
  console.log(data);
  const deleteHandler = () => {
    console.log("data");
  };
  return (
    <div>
      <div className="overflow-x-auto border border-gray-500">
        <table className="table">
          <thead>
            <tr>
              <th>No</th>
              <th>Company Name</th>
              <th>Job Type</th>
              <th>Duration</th>
              <th>Position</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.data?.map((blog, i) => (
              <tr key={i} className="hover:bg-[#0F172A] transition-all">
                <th>{i + 1}</th>
                <td>{blog?.title}</td>
                <td>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        blog?.content.length > 140
                          ? blog?.content.slice(0, 140) + "..."
                          : blog?.content,
                    }}
                  />
                </td>
                <td>{blog?.duration}</td>
                <td>{blog?.position}</td>
                <td className="text-center">
                  <p
                    onClick={() => deleteHandler(blog?._id)}
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
    </div>
  );
};

export default GetAllBlog;
