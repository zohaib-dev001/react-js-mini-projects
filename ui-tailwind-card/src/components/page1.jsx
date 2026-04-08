import React from 'react'
import Left from './left'
import Right from './right'
const page1 = ({ data }) => {
    

    return (
        <div className='h-[90vh]  flex py-4 px-18 gap-24 '>
            <Left />
            <Right data={data} />
        </div>
    )
}

export default page1