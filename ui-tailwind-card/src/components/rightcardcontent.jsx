import React from 'react'

const rightcardcontent = (props) => {
    return (
        <div className='flex flex-col absolute justify-between p-6 h-full'>
            <h2 className='bg-white p-2 h-12 rounded-full w-12 flex items-center justify-center'>{props.id + 1}</h2>
            <div>
                <p className='font-medium text-white  shadow-neutral-400 mb-18'> {props.paragraph} </p>
                <button style={{ backgroundColor: props.color }} className={`font-medium text-amber-50 text-xl
                     ${props.index === 0 ? 'px-6' : 'px-2'} py-1 rounded-full`}>{props.button}</button>
                <button style={{ backgroundColor: props.color }} className='text-xl text-amber-50    px-4 py-1 rounded-full ri-arrow-right-line'></button>
            </div>
        </div>
    )
}

export default rightcardcontent