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

export const AuthForm = ({ button, handleClick, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  return (
    <>
      <div className={`flex-auto group flex flex-col gap-4`}>
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
          value={password}
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
          handleClick={() => handleClick(email, password)}
          email={email}
          pass={password}
          content={button}
        />
        <GoogleBtn />
      </div>
    </>
  );
};
