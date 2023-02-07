/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import temp4 from "public/assests/asthetical/template1.svg";


const MyCarousel = () => {

  return (
    <div>
        <Carousel>
                <div>   
                    <img src="../assests/asthetical/temp2.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp3.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp4.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp5.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp6.svg"/>
                </div>
                <div>   
                    <img src="../assests/asthetical/temp3.svg"/>
                </div>
            </Carousel>

    </div>
  )
}

export default MyCarousel


