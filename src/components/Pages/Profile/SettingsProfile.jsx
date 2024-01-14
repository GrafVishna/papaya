import { TextInput } from "../../share/inputs/TextInput.jsx";
import { TextArea } from "../../share/inputs/TextArea.jsx";
import { useEffect, useState } from "react";
import { UploadAvatar } from "./UploadAvatar/UploadAvatar.jsx";
import { DarkBtn } from "../../share/buttons/darkBtn.jsx";
import { useAuth } from "../../../hooks/useAuth.jsx";
import { editUserDataToFirestore } from "../../../services/userSettings.service.js";
import { getOneData } from "../../../services/getData.service.js";
import { useUpdateData } from "../../../hooks/useUpdateData.jsx";

export const SettingsProfile = () => {
  const { uid } = useAuth();
  const {
    dataUpdate,
    setDataUpdate,
    dataStateUpdate,
    dataSaving,
    dataStateSaving,
  } = useUpdateData();

  const { data, isLoading, isSuccess, isError, refetch, isRefetching } =
    getOneData("users", uid);

  const avatar = data ? data.avatar : null;

  const [userLastName, setLastName] = useState("");
  const [userFirstName, setFirstName] = useState("");
  const [userPhone, setPhone] = useState("");
  const [userCountry, setCountry] = useState("");
  const [userDescription, setDescription] = useState("");

  useEffect(() => {
    if (data) {
      setLastName(data.lastName || "");
      setFirstName(data.firstName || "");
      setPhone(data.phone || "");
      setCountry(data.country || "");
      setDescription(data.description || "");
    }
  }, [data]);

  const handleClick = async () => {
    dataStateSaving();
    await editUserDataToFirestore(uid, {
      firstName: userFirstName,
      lastName: userLastName,
      phone: userPhone,
      country: userCountry,
      description: userDescription,
    }).then(() => {
      dataStateUpdate();
    });
  };

  return (
    <div className="p-4 relative">
      <div
        className={`${
          dataSaving ? "opacity-10 pointer-events-none" : "opacity-100"
        } max-w-4xl m-auto transition duration-300`}
      >
        <div className="max-w-xl m-auto mb-6">
          <UploadAvatar
            currentAvatar={avatar}
            isLoading={isLoading}
            refetch={refetch}
            isSuccess={isSuccess}
          />
        </div>
        <div className="grid mobile:grid-cols-2 grid-cols-1 gap-4 mb-4 last:mb-0">
          <TextInput
            isLoading={isLoading}
            placeholder="First name"
            value={userLastName}
            setAction={setLastName}
          />
          <TextInput
            isLoading={isLoading}
            placeholder="Last name"
            value={userFirstName}
            setAction={setFirstName}
          />
          <TextInput
            isLoading={isLoading}
            placeholder="Phone"
            value={userPhone}
            setAction={setPhone}
            type="tel"
          />
          <TextInput
            isLoading={isLoading}
            placeholder="Country"
            value={userCountry}
            setAction={setCountry}
          />
        </div>
        <TextArea
          isLoading={isLoading}
          placeholder="Description"
          value={userDescription}
          setAction={setDescription}
        />
        <DarkBtn
          handleClick={handleClick}
          className="min-w-full"
          content="Save"
        />
      </div>
      <SuccessSend show={dataUpdate} />
    </div>
  );
};

const SuccessSend = ({ show }) => {
  return (
    <p
      className={`${
        show ? "opacity-100" : "opacity-0"
      } transition duration-300 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-body-main p-1 pointer-events-none`}
    >
      Successfully saved!
    </p>
  );
};
