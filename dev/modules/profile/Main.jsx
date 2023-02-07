import React, { useState } from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VenueVendor from './VenueVendor'
import Guest from './Guest'
import Dates from './Dates'
import Stepper from "react-stepper-horizontal"
import styles from 'styles/profile/profile.module.scss'
import Image from 'next/image'
import Male from '../../public/assests/profile/Male.png'

const Main = () => {
  const [percentage, setPercentage] = useState(73)



  return (
    <div className={styles.main}>
      <div className={styles.top}>
        <div className={styles.userInfo}>
          <div className={styles.pictures}>
            <div className={styles.container1}>
              <Image

                src={Male}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                objectFit='cover'
                alt=''
              />
            </div>
            <div className={styles.container2}>
              <Image

                src={Male}
                width={"100%"}
                height={"100%"}
                layout="responsive"
                objectFit='cover'
                alt=''
              />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.name}>
              Zeeshan And Mariyam Weds
            </div>
            <div className={styles.description}>
              Enter You Wedding Details and get the record of the  requested data of your wedding
            </div>
          </div>
        </div>
        <div className={styles.progress}>

          <CircularProgressbar value={percentage} text={`${percentage}%`} />;
        </div>
      </div>

      <div className={styles.stepper}>
        <h5>Complete the below process for your Wedding to get started</h5>
        <Stepper
          steps={[{ title: 'Complete Your Profile' }, { title: 'Add your Event' }, { title: 'Shop Invites & Nikkah Templates' }, { title: 'Guest Account' }]} activeStep={1}
          completeColor="#f85757"
          activeColor="#fff"
          defaultColor="#808080"
          defaultTitleColor="#f85757"
          activeTitleColor="#f85757"
          completeTitleColor="#f85757"
          circleTop={40}
          circleFontColor="#000"
          size={32}
          circleFontSize={16}
          defaultOpacity={0.5}
          activeBorderColor='#f85757'
        />
      </div>

      <div className={styles.cardSection}>
        <VenueVendor />
        <Guest />
        <Dates />
      </div>

    </div>
  )
}

export default Main