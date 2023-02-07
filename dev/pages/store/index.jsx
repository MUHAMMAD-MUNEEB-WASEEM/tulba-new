import Banner from 'modules/wedding_store/Banner'
import Wedcard from 'modules/wedding_store/Wedcard'
import React from 'react'
import Footer from "layout/footer";
import Header from "layout/header";

const Store = () => {
  return (
    <div>
      <Header />
        <Banner />
        <Wedcard />
        <Footer />
    </div>
  )
}

export default Store