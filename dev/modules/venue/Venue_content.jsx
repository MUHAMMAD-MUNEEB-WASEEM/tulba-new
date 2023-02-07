import React from 'react'
import Image from "next/image";

const Venue_content = (props) => {
  return (
    <div>
            <Image
       src={props.client} 
       width={"150px"}
       height={"150px"}
       layout="fixed"
       alt="template" 
       />

    </div>
  )
}

export default Venue_content