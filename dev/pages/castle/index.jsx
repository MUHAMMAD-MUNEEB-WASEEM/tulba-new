import Footer from 'layout/footer'
import Header from 'layout/header'
import About from 'modules/Castle/About'
import Banner from 'modules/Castle/Banner'
import Carousel from 'modules/Castle/Carousel'
import Property from 'modules/Castle/Property'
import Reviews from 'modules/Castle/Reviews'
import Vendor from 'modules/Castle/Vendor'
import Faq from 'modules/home/faq'
import React from 'react'

const index = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Vendor />
        <About />
        <Property />
        <Reviews />
        <Faq />
        <Footer />

    </div>
  )
}

export default index