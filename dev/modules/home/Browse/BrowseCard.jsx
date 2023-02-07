/* eslint-disable jsx-a11y/alt-text */
import Button from 'react-bootstrap/Button';
import Image from "next/image";
import styles from "/styles/home/Index.module.scss";
import { AiFillStar, AiOutlineUsergroupAdd, AiOutlineArrowRight } from "react-icons/ai";
import { BiMap, BiDish } from "react-icons/bi";
import Link from "next/link";

const BrowseCard = (props) => {
  return (
    <>

    <Link href="/castle">

      <div className={`mx-2 cursor-pointer ${styles.browse}`}>
        <Image
          src={props.imgsrc}
          width={"303px"}
          height={"222px"}
          layout="responsive"
          className='m-0'
        />
        <div className='d-flex justify-content-between'>
          <Button className={`mx-3 my-4 ${styles.cardbtn}`}>{props.btn}</Button>
          <div className='d-flex justify-content-center mx-3 my-1'>
            <AiFillStar
              className={` my-4 ${styles.star}`}
            />
            <span className={` mx-1 ${styles.myspan}`}>5</span>
          </div>

        </div>
        <h1 className='mx-3'>The Asthetcal</h1>
        <div className='d-flex justify-content-start align-items-center'>
          <BiMap
            className={` ${styles.map1}`}
          />
          <span>
            Bekasi, Jawa Barat Hall Al khema
          </span>
        </div>
        <div className='mx-1 d-flex justify-content-start align-items-center'>
          <BiDish
            className={`  my-2 ${styles.map}`}
          />
          <span className='my-2'>From 20$</span>
          <AiOutlineUsergroupAdd
            className={` my-2 ${styles.map}`}
          />
          <span className='my-2'>50 to 600</span>
        </div>
        <div className='d-flex justify-content-between'>
          <div className='d-flex  align-items-start'>
            <h4 className='my-1'>{props.price}</h4>
            <span className='my-3'> Per Event</span>
          </div>
          <div>

          </div>
        </div>

      </div>
      </Link>
    </>

  )
}

export default BrowseCard