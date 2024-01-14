import { getAllData } from "../../../services/getData.service.js";
import { SettingsFormProfile } from "./SettingsFormProfile/SettingsFormProfile.jsx";

export const CurrentProfile = () => {
  const { data: users, isLoading, refetch, isRefetching } = getAllData("users");
  const handleRefresh = () => {
    refetch();
  };

  return (
    <div className="p-6">
      <SettingsFormProfile />

      {/*<div className="mb-6 flex gap-10">*/}
      {/*  {!isLoading ? (*/}
      {/*    users.map((user) => (*/}
      {/*      <Avatar key={user.uid} avatar={user.avatar} name={user.email} />*/}
      {/*    ))*/}
      {/*  ) : (*/}
      {/*    <span>Loading...</span>*/}
      {/*  )}*/}
      {/*</div>*/}
      {/*<button*/}
      {/*  onClick={handleRefresh}*/}
      {/*  className="px-10 bg-lg-subscribe rounded-xl py-2 min-w-[250px] flex justify-center itens-center gap-5"*/}
      {/*>*/}
      {/*  {isRefetching && <span className="loading loading-spinner"></span>}*/}
      {/*  {isRefetching ? "loading" : "refetch"}*/}
      {/*</button>*/}
    </div>
  );
};
