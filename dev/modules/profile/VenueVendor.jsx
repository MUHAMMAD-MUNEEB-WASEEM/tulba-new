import Card from './Card'
import React, { useState } from 'react'
import styles from 'styles/profile/venuevendor.module.scss'
import Flower from '../../public/assests/profile/flowers.jpg'

const VenueVendor = () => {

    const [cards, setCards] = useState([
        {
            image: Flower,
            title: "Get started with hand picked recs.",
            description: "O curse of marriage! That we can call these delicate creatures ours "
        },
        {
            image: Flower,
            title: "Get started with hand picked recs.",
            description: "O curse of marriage! That we can call these delicate creatures ours "
        },
        {
            image: Flower,
            title: "Get started with hand picked recs.",
            description: "O curse of marriage! That we can call these delicate creatures ours "
        }
    ])

    return (
        <div className={styles.section}>
        <div className={styles.header}>
            <h1>Venue And Vendor</h1>
            <p>That we can call these delicate creatures ours</p>
        </div>
            <div className={styles.cardsContainer}>
                {cards.map((item, index) => (
                    <Card key={index} title={item.title} image={item.image} description={item.description} />
                ))}
                {/* <Card title="Get started with hand picked recs." image={Flower} description={"O curse of marriage! That we can call these delicate creatures ours, And not their appetites! I had rather be a toad"} /> */}
            </div>
        </div>
    )
}

export default VenueVendor