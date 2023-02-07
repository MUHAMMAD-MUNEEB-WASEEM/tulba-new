import Footer from 'layout/footer'
import Header from 'layout/header'
import React from 'react'
import Form_checkout from 'modules/checkout/Form_checkout'
import Payment from 'modules/checkout/Payment'

const Checkout = () => {
    return (
        <div>
            <Header />
            <Form_checkout />
            <Payment />
            <Footer />

        </div>
    )
}

export default Checkout