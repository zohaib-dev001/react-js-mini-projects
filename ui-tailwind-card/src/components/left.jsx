import React from 'react'
import Paragraph from './paragraph'
import Icon from './icon'
import 'remixicon/fonts/remixicon.css'
const left = () => {
    return (
        <div className=' flex flex-col h-full w-1/4 justify-around'>
            <Paragraph />
            <Icon />
        </div>
    )
}

export default left