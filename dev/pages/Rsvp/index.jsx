import Banner from 'modules/Rsvp/Banner'
import BasicExample from 'modules/Rsvp/table'
import React from 'react'
import Footer from "layout/footer";
import Header from "layout/header";

const Rsvp = () => {
  return (
    <div>
      <Header />
      <Banner />
      <BasicExample />
      <Footer />
    </div>
  )
}

export default Rsvp