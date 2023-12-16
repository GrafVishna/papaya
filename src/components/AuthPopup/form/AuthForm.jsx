import GoogleBtn from "../../buttons/GoogleBtn.jsx";
import { useState } from "react";
import { getErrors } from "./authErrors";
import { DarkBtn } from "../../buttons/darkBtn.jsx";

export const AuthForm = ({ button, handleClick, error }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const errorClass = getErrors(error);
  return (
    <>
      <div className={`flex-auto group ${errorClass}`}>
        <div className="mb-4 relative">
          <input
            type="email"
            placeholder="Email"
            className="shadow-input input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="hidden group-[.error-email]:block text-error/75 absolute -bottom-2 text-small right-2">
            Invalid email!
          </p>
        </div>
        <div className="relative">
          <input
            type="password"
            placeholder="Password"
            className="shadow-input input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <p className="hidden group-[.error-password]:block group-[.error-credential]:block  text-error/75 absolute -bottom-2 text-small right-2">
            Invalid password!
          </p>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
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
