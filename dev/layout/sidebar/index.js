import style from "styles/layout/sidebar.module.scss";
import classes from "styles/layout/header.module.scss"
import Button from "components/form/button";
import logo from "public/assests/tulbalogo.svg";
import Image from "next/image";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import { useRouter } from 'next/router';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Sidebar = ({ setOpen, open }) => {
  const router = useRouter()
  const [vendors, setVendors] = useState(false)
  const [planningTools, setPlanningTools] = useState(false)

  const handleSubMenu1 = () => {
    setOpen(false)
    router.push('/store')
  }
  const handleSubMenu2 = () => {
    setOpen(false)
    router.push('/Rsvp')
  }
  const handleSubMenu3 = () => {
    setOpen(false)
    router.push('/checkout')
  }
  const handleSubMenu4 = () => {
    // setOpen(false)
    // router.push('/checkout')
  }

  return (
    <div>
      <div
        className={`${style.sidebar} ${open == true ? `${style.active}` : ""}`}
      >
        <div className={style.sd_header}>
          <Image
            src={logo}
            alt="tulbalogo"
            loading="lazy"
            className="h-12 w-12"
          />
          <div className={style.cros_btn} onClick={setOpen}>
            <ImCross />
            {/* <div>  <Image src={cart} alt="cart" loading="lazy" /></div> */}
          </div>
        </div>
        <div className={style.sd_body}>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/Vendors"><a className={style.item}>Vendors </a></Link>
              <div onClick={() => { setVendors(!vendors) }}> <IoIosArrowDown style={{ color: 'red' }} /></div>
            </div>
            {vendors && (
              <div className={style.submenu}>
                <div onClick={handleSubMenu1}>Wedding Store</div>
                <div onClick={handleSubMenu2}>RSVP</div>
                <div onClick={handleSubMenu3}>CheckOut</div>
              </div>
            )}
          </div>
          
          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/event"><a className={style.item}>Planning Tools </a></Link>
              <div onClick={() => {setPlanningTools(!planningTools) }}> <IoIosArrowDown style={{ color: 'red' }} /></div>
            </div>
            {planningTools && (
              <div className={style.submenu}>
                <div onClick={handleSubMenu4}>Check List</div>
                <div onClick={handleSubMenu2}>RSVP</div>
              </div>
            )}
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/event"><a className={style.item}>Event Website </a></Link>
            </div>
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/store"><a className={style.item}>Shop Invitation </a></Link>
            </div>
          </div>

          <div className={style.mainItem}>
            <div className={style.menu}>
              <Link href="/store"><a className={style.item}>Nikkah Templates </a></Link>
            </div>
          </div>




        </div>
      </div>
      <div
        className={`${style.sidebar_overlay} ${open == true ? `${style.active}` : ""
          }`}
        onClick={setOpen}
      ></div>
 
    </div>
  );
};

export default Sidebar;


{/* 
           <ul className={`flex items-center ${classes.ui_list}`}>
            <li className={classes.vendros}>
              <span className="flex gap-1 items-center">
                <Link href="/Vendors">Vendors</Link> <IoIosArrowDown />
              </span>{" "}
              <ul className={classes.nav__submenu}>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/store"}>Wedding Store</Link>
                </li>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/Rsvp"}>Rsvp</Link>
                </li>
                <li className={classes.nav__submenu_item}>
                  <Link href={"/checkout"}>Checkout</Link>
                </li>
              </ul>
            </li>
            <li className={classes.planning_tools}>
              <span className="flex gap-1 items-center">
                <Link href="/event">Planning Tools</Link> <IoIosArrowDown />
              </span>
              <ul className={classes.nav__submenu}>
              
                <li className={classes.nav__submenu_item}>
                  <a>Reception</a>
                </li>
                <li className={classes.nav__submenu_item}>
                  <a>Gathering</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#/">Event Website</a>
            </li>
            <li>
              <Link href={"/store"}>Shop Invitation</Link>
            </li>
            <li>
              <a href="#/">Nikkah Templates</a>{" "}
            </li>
          </ul>  */}

// setOpen, open

// <ul className={`flex items-center ${style.ui_list}`}>
//                   <li className={style.vendros}>
//                     <span className="flex gap-1 items-center">
//                       <Link href="/Vendors">Vendors</Link> <IoIosArrowDown />
//                     </span>{" "}
//                     <ul className={style.nav__submenu}>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/store"}>Wedding Store</Link>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/Rsvp"}>Rsvp</Link>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <Link href={"/checkout"}>Checkout</Link>
//                       </li>
//                     </ul>
//                   </li>
//                   <li className={style.planning_tools}>
//                     <span className="flex gap-1 items-center">
//                       <Link href="/event">Planning Tools</Link>{" "}
//                       <IoIosArrowDown />
//                     </span>
//                     <ul className={style.nav__submenu}>
//                       {/* <li className={style.nav__submenu_item}>
//                       <a>Events</a>
//                     </li> */}
//                       <li className={style.nav__submenu_item}>
//                         <a>Reception</a>
//                       </li>
//                       <li className={style.nav__submenu_item}>
//                         <a>Gathering</a>
//                       </li>
//                     </ul>
//                   </li>
//                   <li>
//                     <a href="#/">Event Website</a>
//                   </li>
//                   <li>
//                     <Link href={"/store"}>Shop Invitation</Link>
//                   </li>
//                   <li>
//                     <a href="#/">Nikkah Templates</a>{" "}
//                   </li>
//                 </ul>
