import Venue_temp from 'modules/venue/Venue_temp'
import Venue_banner from 'modules/venue/Venue_banner'
import React from 'react'
import Footer from 'layout/footer'
import Header from 'layout/header'

const index = () => {
  return (
    <div>
        <Header />
        <Venue_banner />
        <Venue_temp />
        <Footer />
    </div>
  )
}

export default index