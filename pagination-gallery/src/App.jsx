import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Paginationcomp from './components/pagination'

const App = () => {

  const [user, setuser] = useState([])
  const [index, setindex] = useState(1)
  useEffect(function () {
    data()
  }, [index])

  const data = async () => {
    const rep = await axios.get(`https://picsum.photos/v2/list?page=${index}1&limit=10`)
    setuser(rep.data);
    console.log(rep.data);

  }

  let renderData = <h1 className='absolute left-[45%] top-1/2'>Loading data.....</h1>;
  if (user.length > 0) {
    renderData = user.map((item, idx) => {
      return <div key={idx} className='mt-10 '>
        <a href={item.download_url}><img className='h-40 w-35 lg:h-30 xl:h-40 xl:w-45  lg:w-30 sm:h-44 sm:w-50 object-cover rounded-lg shadow-lg' src={item.download_url} alt="images" />
          <h1 className='font-bold text-sm pt-1 sm:text-xl'>{item.author}</h1></a>
      </div>
    })
  }

  return (
    <div className='min-h-screen bg-zinc-900 text-white flex flex-col'>
      <div className='flex flex-wrap  justify-center gap-10  sm:gap-3  lg:gap-10 sm:w-[80%] md:w-[90%] md:h-[80%]  m-auto ' >
        {renderData}
      </div>
      <div className='flex justify-center gap-5  m-6  '>
        <Paginationcomp index={index} setindex={setindex} setuser={setuser} />
      </div>
    </div >
  )
}

export default App