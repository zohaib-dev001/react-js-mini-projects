import React from 'react'

const form = ({ title, setTitle, description, setDescription, Formsubmit }) => {
  return (
    <div>
      <form onSubmit={Formsubmit} className=' flex gap-5 font-medium flex-col items-center lg:p-10 2xl:p-15 p-25' >

        <input className='px-3 sm:px-10 outline-none py-4 border-2 w-full md:w-1/2 lg:w-2/9 2xl:w-1/6 rounded '
          type="text" placeholder='Enter title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea className='px-3 outline-none sm:px-5 py-2 h-25 md:w-1/2 lg:w-2/9 2xl:w-1/6 w-full border-2 rounded'
          placeholder='Write detailed'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />

        <button className='  border-white p-4 border-2 rounded  hover:bg-white hover:text-black '>Add Notes</button>
      </form>
    </div>
  )
}

export default form