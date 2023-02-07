import React from 'react'
import styles from 'styles/profile/card.module.scss'
import Image from 'next/image'

const Card = ({image, title, description}) => {
  return (
    <div className={styles.card}>
        <div className={styles.image}>
              <Image
              className={styles.img}
                  src={image}
                  width={"80%"}
                  height={"70%"}
                  // layout="fill"
                  objectFit='cover'
                  alt=''
              />
           
        </div>
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <div className={styles.desc} >{description} </div>
        </div>
    </div>
  )
}

export default Card