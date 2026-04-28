import React from 'react'

const notes = ({ index, note, Deletenotes }) => {
    return (
        <div>
            <div key={index} className='w-40 h-55 rounded  text-black p-4 flex flex-col justify-between bg-cover bg-center  bg-[url("https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png")]'>
                <div>
                    <h1 className='font-medium break-all text-xl pt-4'>{note.title}</h1>
                    <p className='text-sm break-all  '>{note.description}</p>
                </div>
                <button onClick={() => { Deletenotes(index) }} className='bg-red-500 w-28 flex items-center mx-auto cursor-pointer hover:bg-red-600 justify-center rounded'>Delete</button>
            </div>
        </div>
    )
}

export default notes