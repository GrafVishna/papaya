import GoogleBtn from "../../buttons/GoogleBtn.jsx";
import { useState } from "react";
import { getErrors } from "./authErrors";
import { DarkBtn } from "../../buttons/darkBtn.jsx";
import { TextInput } from "./TextInput.jsx";

export const AuthForm = ({ button, handleClick, error }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const errorClass = getErrors(error);
  return (
    <>
      <div className={`flex-auto group ${errorClass}`}>
        <TextInput
          type="email"
          placeholder="Email"
          setAction={setEmail}
          value={email}
          error="Invalid email!"
        />
        <TextInput
          type="password"
          placeholder="Password"
          setAction={setPass}
          value={pass}
          error="Invalid password!"
        />
      </div>

      <div className="mt-4 flex items-center gap-4 mobile-s:flex-row flex-col w-full justify-between">
        <DarkBtn
          handleClick={() => handleClick(email, pass)}
          email={email}
          pass={pass}
          content={button}
        />
        <GoogleBtn />
      </div>
    </>
  );
};
