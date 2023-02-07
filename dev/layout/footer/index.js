import style from "styles/layout/footer.module.scss";
import tulbalogo from "public/assests/tulbalogo.svg";
import Image from "next/image";
import location from "public/assests/footer/location.svg";
import email from "public/assests/footer/email.svg";
import phone from "public/assests/footer/phone.svg";
import facebook from "public/assests/footer/facebook.svg";
import instagram from "public/assests/footer/instagram.svg";
import twitter from "public/assests/footer/twitter.svg";
import locationoffice from "public/assests/footer/locationoffice.svg";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import Link from "next/link";


const Footer = () => {
  return (
    <div className={`w-full   ${style.footer_section}`}>
      <div className={`${style.nested_footer}`}>
        {/* footer Top section */}
        <div className={style.section_one}>
          <Link href={"/"}>
          <Image
            src={tulbalogo}
            alt="tulbalogo"
            loading="lazy"
            className="cursor-pointer"
          />
          </Link>
          <div>
            <p className={`text-xl ${style.Footer_text}`}>
              We got the best event planners and most economical setup for event
              so lets do this together and make your event memorable.
            </p>
          </div>
        </div>
        <div className={style.section_two}>
          <p className=""> Register</p>
          <ul>
            <li> <Link href={"/loginin"}>Login</Link> </li>
            <li><Link href={"/signup"}>Sign up</Link> </li>
            <li>Join Us</li>
          </ul>
        </div>
        <div className={style.section_one}>
          <p> Helpful</p>
          {/* <div>
            <p className={`text-xl leading-7 ${style.Footer_text}`}>
              We got the best event planners and most economical setup for event
              so lets do this together and make your event memorable.
            </p>
          </div> */}
          <ul>
            <li>Policy </li>
            <li>Conditions</li>
          </ul>
        </div>
        <div className={style.section_two}>
          <p> Contact Us</p>
          {/* <div>
            <p className={`text-xl leading-7 ${style.Footer_text}`}>
              We got the best event planners and most economical setup for event
              so lets do this together and make your event memorable.
            </p>
          </div> */}
          <ul>
            <li className="flex gap-2">
              {" "}
              <Image src={location} alt={"location"} loading="lazy" />
              <span>1234 Lorem Ipsum Street, Lorem, AB</span>
            </li>
            <li className="flex gap-2">
              <Image src={email} alt={"email"} loading="lazy" />
              <span>toulba@yahoo.com</span>
            </li>
            <li className="flex gap-2">
              <Image src={phone} alt={"phone"} loading="lazy" />

              <span>+0 123 456 7890</span>
            </li>
          </ul>
          <div className={`flex items-center  ${style.socila_links}`}>
            <Image src={facebook} alt={"facebook"} loading="lazy" />
            <Image src={instagram} alt={"instagram"} loading="lazy" />
            <Image src={twitter} alt={"twitter"} loading="lazy" />
          </div>
        </div>
        <div className={style.section_three}>
          <p>Explore by city</p>
          {/* <div>
            <p className={`text-xl leading-7 ${style.Footer_text}`}>
              We got the best event planners and most economical setup for event
              so lets do this together and make your event memorable.
            </p>
          </div> */}
          <ul>
            <li className="flex gap-2">
              {" "}
              {/* <HiLocationMarker /> */}
              <Image
                src={locationoffice}
                alt={"locationoffice"}
                loading="lazy"
              />
              <span>
                <div>Karachi</div>
                <span className="text-sm">
                  Browse through venues, catering, decor & more...
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              {" "}
              {/* <HiLocationMarker /> */}
              <Image
                src={locationoffice}
                alt={"locationoffice"}
                loading="lazy"
              />
              <span>
                <div>Lahore</div>
                <span className="text-sm">
                  Browse through venues, catering, decor & more...
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              {" "}
              {/* <HiLocationMarker /> */}
              <Image
                src={locationoffice}
                alt={"locationoffice"}
                loading="lazy"
              />
              <span>
                <div>Islamabad</div>
                <span className="text-sm">
                  {" "}
                  Browse through venues, catering, decor & more...
                </span>
              </span>
            </li>
          </ul>
        </div>
        <div className={style.section_three}>
          <p>Explore by city</p>
        </div>

      </div>

        {/* Bottom last section */}
        <div
          className={`flex justify-between items-center ${style.footer_lastsection}`}
        >
          <div>© 2021 Event MVP. All rights reserved.</div>
          <div>Privacy Policy - Terms & Conditions</div>
        </div>
    </div>
  );
};

export default Footer;
