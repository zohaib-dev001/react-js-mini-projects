import React from 'react'
import Rightcard from './rightcard'

const right = ({ data }) => {
  
  return (
    <div className=' h-full w-2/3 flex  pb-8 gap-8'>
      {data.map((elem, index) => {
        return <Rightcard
          key={index}
          id={index}
          color={elem.color}
          img={elem.image}
          paragraph={elem.paragraph}
          button={elem.button}
          index={index}
        />
      })}
    </div>
  )
}

export default right