import React from 'react'
import Rightcardcontent from './rightcardcontent'
const rightcard = (props) => {

  return (
    <div className=' h-full  w-60 flex   relative'>
      <img className='w-full h-full rounded-4xl object-cover' src={props.img} alt="" />
      <Rightcardcontent paragraph={props.paragraph} button={props.button} id={props.id} color={props.color} index={props.index} />
    </div>
  )
}

export default rightcard