import Footer from 'layout/footer'
import Header from 'layout/header'
import Save_date from 'modules/save_date'
import React from 'react'

const index = () => {
  return (
    <div>
      <Header />
        <Save_date />
        <Footer />
    </div>
  )
}

export default index