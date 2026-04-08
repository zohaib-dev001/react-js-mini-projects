import React from 'react'
import Navbar from './navbar'
import Page1 from './page1'

const section1 = ({ data }) => {
  
  return (
    <div>
      <Navbar />
      <Page1 data={data} />
    </div>
  )
}

export default section1