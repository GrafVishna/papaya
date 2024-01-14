import GoogleBtn from "../../../share/buttons/GoogleBtn.jsx";
import { useState } from "react";
import {
  ERR_CREDENTIAL,
  ERR_EMAIL,
  ERR_EMAIL_USE,
  ERR_PASSWORD,
} from "./authErrors.js";
import { DarkBtn } from "../../../share/buttons/darkBtn.jsx";
import { TextInput } from "../../../share/inputs/TextInput.jsx";
import { ErrorMessage } from "./ErrorMessage.jsx";

export const RegForm = ({ button, handleClick, error }) => {
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");

  const registrationClick = () => {
    handleClick(regEmail, regPassword);
  };

  return (
    <>
      <div className={`flex-auto group flex flex-col gap-4`}>
        <TextInput
          type="email"
          placeholder="Email"
          setAction={setRegEmail}
          value={regEmail}
          error={error === ERR_EMAIL && true}
          errorMsg="Invalid email!"
        />
        <TextInput
          type="password"
          placeholder="Password"
          setAction={setRegPassword}
          value={regPassword}
          error={error === ERR_PASSWORD && true}
          errorMsg="Invalid password!"
        />
        <ErrorMessage
          error={error}
          errorType={ERR_CREDENTIAL}
          message="Invalid account!"
        />
        <ErrorMessage
          error={error}
          errorType={ERR_EMAIL_USE}
          message="Account taken!"
        />
      </div>

      <div className="mt-4 flex items-center gap-4 mobile-s:flex-row flex-col w-full justify-between">
        <DarkBtn
          handleClick={registrationClick}
          email={regEmail}
          pass={regPassword}
          content={button}
        />
        <GoogleBtn />
      </div>
    </>
  );
};
