import Banner from 'modules/wedding_template/Banner'
import React from 'react'
import Footer from "layout/footer";
import Header from "layout/header";
import Template from 'modules/wedding_template/Template';

const index = () => {
  return (
    <div>
        <Header />
        <Banner />
        <Template />
        <Footer />
    </div>
  )
}

export default index