import React from 'react'
import Image from "next/image";
import Vector from "public/assests/home_img/Vector.svg";
import testimonial from "public/assests/home_img/Ellipse 1369.svg";
import { AiFillStar} from "react-icons/ai";
import styles from "/styles/home/Index.module.scss";

const Content = (props) => {
  return (
    <>
    <div className='text-center mx-4 my-5'> 
    <p>{props.comment}</p>
    <div className="d-flex justify-content-center"> 
        <AiFillStar
        className={`my-3 ${styles.star}`}
        /> 
        <AiFillStar
        className={`my-3 ${styles.star}`}
        /> 
        <AiFillStar
        className={`my-3 ${styles.star}`}
        /> 
        <AiFillStar
        className={`my-3 ${styles.star}`}
        /> 
        <AiFillStar
        className={`my-3 ${styles.star}`}
        /> 
         
    </div>
    <div className=''>
    <Image
       src={props.client} 
       width={"100px"}
       height={"100px"}
       layout="fixed"
       alt="template" 
       className={styles.imgSize}
       />
       <h6>{props.clientName}</h6>
        </div>
          </div>
          </>
  )
}

export default Content