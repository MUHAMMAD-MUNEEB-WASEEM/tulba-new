import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from "/styles/authentication/forgotpassword.module.scss";
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import { IoIosArrowDropleft } from "react-icons/io";
import Link from "next/link";

import { useState } from "react";
import { api } from "./../../services/api";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgot = async () => {
    let body = {
      email,
    };

    let res = await api.post("", body);
  };

  return (
    <div
      className={`${styles.forgotpassword_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}
    >
      <div className={`${styles.forgotpassword_nested} bg-white p-6`}>
        <div className={`${styles.backpage}`}>
          <Link href="/loginin">
            <IoIosArrowDropleft className="text-3xl cursor-pointer ml-2" />
          </Link>
        </div>
        <div className={styles.forgotpassword_heading}>
          <h1 className="text-center text-black text-2xl leading-10">
            Forgot Password?
          </h1>
          <p>
            Enter the email address you used when you joined and we’ll send you
            instructions to reset your password.
          </p>
        </div>

        {/* From section */}
        <form className={` ${styles.form_forgotpassword}`}>
          <div className={styles.forgotpassword_inputbox}>
            <InputField
              placeholder="Email"
              type="email"
              label="Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div
            className={`${styles.btn_forgotpassword}`}
            onClick={() => handleForgot()}
          >
            <Button type="button" value={"Send Email"} padding="12px 0px" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
