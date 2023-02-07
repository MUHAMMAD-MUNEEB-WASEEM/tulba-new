import React from 'react';
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";
import { useRouter } from 'next/router';

const VendorCard = (props) => {
  const router = useRouter();

  const redirectionHandler = () => {
    router.push(props.onclick);
  };

  return (
    <>
      <div onClick={redirectionHandler} className={` ${styles.box}`}>
        <Image
          src={props.imgsrc}
          width={"250px"}
          height={"350px"}
          layout="responsive"
          alt="template"
        />
      </div>
      <p className={`text-center ${styles.cardtitle}`}>{props.title}</p>
    </>
  );
};

export default VendorCard;