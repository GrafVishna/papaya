import { ProfileNav } from "./ProfileNav/ProfileNav.jsx";
import { ChannelDetails } from "./ChannelDetails.jsx";
import getData from "../../../api/getData.js";
import { useQuery } from "react-query";
import { useAuth } from "../../../hooks/useAuth.jsx";

export const Profile = () => {
  const { uid } = useAuth();
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery("users", () => getData("users"));

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <>
      <div className="bg-lg-main">
        <div className="h-[440px] img-ibg rounded-t-3xl overflow-hidden flex flex-col justify-end">
          <img
            className=""
            src="https://papaya-api.artem.monster/img.jpg"
            alt="Image"
          />
          <span className="absolute z-10 bottom-0 left-0 w-full h-1/2 bg-lg-profile-header" />
          <div className="relative z-20 pb-12"></div>
          <div className="relative z-20 px-8 pb-10">
            <ChannelDetails
              user={isLoading ? null : users[1]}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
      <span></span>

      <ProfileNav />
      <br />
    </>
  );
};
