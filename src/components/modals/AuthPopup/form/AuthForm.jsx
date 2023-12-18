import GoogleBtn from "../../../buttons/GoogleBtn.jsx";
import { useState } from "react";
import {
  ERR_CREDENTIAL,
  ERR_EMAIL,
  ERR_EMAIL_USE,
  ERR_PASSWORD,
} from "./authErrors.js";
import { DarkBtn } from "../../../buttons/darkBtn.jsx";
import { TextInput } from "./TextInput.jsx";

export const AuthForm = ({ button, handleClick, handleLogInGoogle, error }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <>
      <div className={`flex-auto group `}>
        <TextInput
          type="email"
          placeholder="Email"
          setAction={setEmail}
          value={email}
          error={error === ERR_EMAIL && true}
          errorMsg="Invalid email!"
        />
        <TextInput
          type="password"
          placeholder="Password"
          setAction={setPass}
          value={pass}
          error={error === ERR_PASSWORD && true}
          errorMsg="Invalid password!"
        />
        <p
          className={`${
            error === ERR_CREDENTIAL ? "block" : "hidden"
          } text-error/75 text-center text-small pr-2`}
        >
          Invalid account!
        </p>
        <p
          className={`${
            error === ERR_EMAIL_USE ? "block" : "hidden"
          } text-error/75 text-center text-small pr-2`}
        >
          Account taken!
        </p>
      </div>

      <div className="mt-4 flex items-center gap-4 mobile-s:flex-row flex-col w-full justify-between">
        <DarkBtn
          handleClick={() => handleClick(email, pass)}
          email={email}
          pass={pass}
          content={button}
        />
        <GoogleBtn handleLogInGoogle={handleLogInGoogle} />
      </div>
    </>
  );
};
