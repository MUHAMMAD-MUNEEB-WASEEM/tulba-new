import Button from "components/form/button";
import InputField from "components/form/inputfield";
import styles from 'styles/authentication/SignupPopup.module.scss';
import Image from "next/image";
import googlelogo from "public/assests/GoogleLogo.svg";
import facebooklogo from "public/assests/facebooklogo.svg";
import Link from "next/link";
import { useState } from "react";
import { api } from "./../../services/api";
import { IoIosArrowDropleft } from "react-icons/io";


const SignupPopup = ({ modal, setModal }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = async () => {
        let body = {
            name,
            email,
            password,
            confirmPassword,
        };

        let res = await api.post("", body);
    };

    return (
        <div
            className={`${styles.signup_container} flex flex-col justify-center items-center w-full bg-slate-100 min-h-screen`}
        >
            <div className={`${styles.signup_nested} bg-white p-6`}>
                <div className={styles.signup_heading}>
                    <div className={`${styles.backpage}`}>
                        <div onClick={() => setModal(false)}>
                            <IoIosArrowDropleft className="text-3xl cursor-pointer ml-2" />
                        </div>
                    </div>
                    <h1 className="text-center text-black text-2xl leading-10">
                        Create Your New Account
                    </h1>
                    <p className="text-center leading-4">
                        Enter your details to get started
                    </p>
                </div>
                {/* soical Link section */}

                <div className={styles.soical_links}>
                    <p className="text-center text-base py-6">Continue With</p>

                    <div className="flex justify-center items-center w-full gap-6">
                        <div
                            className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
                        >
                            <Image
                                src={googlelogo}
                                alt="googlelogo"
                                width={"20px"}
                                height={"20px"}
                                loading="lazy"
                            />{" "}
                            <span className="text-base leading-6 text-black">Google</span>
                        </div>
                        <div
                            className={`flex gap-2 justify-center items-center cursor-pointer ${styles.social_data}`}
                        >
                            <Image
                                src={facebooklogo}
                                alt="googlelogo"
                                width={"20px"}
                                height={"20px"}
                                loading="lazy"
                            />{" "}
                            <span className="text-base leading-6 text-black">Facebook</span>
                        </div>
                    </div>
                </div>

                {/* or Section */}
                <div
                    className={` flex justify-center gap-2 items-center my-7 ${styles.or_section}`}
                >
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>
                {/* From section */}
                <form className={` ${styles.form_signup}`}>
                    <div className={styles.signup_inputbox}>
                        <InputField
                            placeholder="Name"
                            type="text"
                            label="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className={styles.signup_inputbox}>
                        <InputField
                            placeholder="Email"
                            type="email"
                            label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.signup_inputbox}>
                        <InputField
                            placeholder="Password"
                            type="password"
                            label="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className={styles.signup_inputbox}>
                        <InputField
                            placeholder="Confirm password"
                            type="password"
                            label="Confirm Password"
                        />
                    </div>
                    <div className={` ${styles.btn_signup}`}>
                        <Button
                            type="button"
                            value={"Create Account"}
                            onClick={() => handleSignup()}
                            padding="12px 0px"
                        />
                    </div>
                </form>
                <div className={` text-center ${styles.login_link}`}>
                    Already have an account! <Link href="/loginin"> Log in now</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPopup;
