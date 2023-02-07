import React from "react";
import vector from "public/assests/home_img/Vector.svg";
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";

const Faqcard = () => {
  return (
    <>
      <ul className="my-5">
        <li>Why should I use this Platform Whats Good in This ?</li>
        <p className="my-5">
          This Platform Enables you to make your desire marriage events happens
          effiicietly and economically. You can get all the necessary things
          like, invitation, cards, website for marriages , vendors and many more
          from this. Start Explore by yourself or contact us for more details.
        </p>
        <div className={`d-flex justify-content-between my-4 ${styles.mobilefaqs}`}>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}
            />
            <span className="m-3">Fast Service</span>
          </div>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}

            />
            <span  className="m-3">Secure Payment</span>

          </div>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}

            />
            <span className="m-3"> Hastle Free Registration</span>
          </div>
        </div>
        <div className={`d-flex justify-content-between my-4 ${styles.mobilefaqs}`}>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}

            />
            <span className="m-3"> Reliable Services</span>
          </div>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}

            />
            <span className="m-3">    Many Wed Tamplates
            </span>
          </div>
          <div>
            <Image
              src={vector}
              alt="star"
              width={"20px"}
              height={"14px"}
            />
            <span className="m-3"> Hastle Free Registration</span>
          </div>
        </div>
      </ul>
    </>
  );
};

export default Faqcard;
