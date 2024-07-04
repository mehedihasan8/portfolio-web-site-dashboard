import { useGetProfileQuery } from "../Redux/features/profile/profileApi";

const HomePage = () => {
  const { data } = useGetProfileQuery(undefined);
  return (
    <div>
      <h1 className="text-center text-2xl pt-8">Well come Back</h1>
      <div className="flex items-center justify-between px-16 pt-8">
        <h1>Total Project : {data?.data?.project}</h1>
        <h1>Total Blog : {data?.data?.blog}</h1>
        <h1>Total Skill : {data?.data?.skill}</h1>
      </div>
    </div>
  );
};

export default HomePage;
