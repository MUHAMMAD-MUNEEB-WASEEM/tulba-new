import Footer from 'layout/footer'
import Header from 'layout/header'
import Banner from 'modules/Vendors/Banner'
import Cardcontent from 'modules/Vendors/Cardcontent'
import VendorCard from 'modules/Vendors/VendorCard'
import Card from 'modules/Vendors/VendorCard'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header />
        <Banner />
        <VendorCard />
        {/* <Cardcontent /> */}
        <Footer />
    </div>
  )
}

export default index