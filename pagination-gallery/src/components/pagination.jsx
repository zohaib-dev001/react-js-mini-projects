import React from 'react'
import Pagination from '@mui/material/Pagination';
const pagination = ({ index, setindex, setuser }) => {
    return (
        <div className='flex  items-center justify-center m-5'>
            <button disabled={index === 1} style={{ opacity: index === 1 ? 0.5 : 1 }} onClick={() => {
                if (index > 1) { setindex(index - 1) }
                setuser([])
            }} className='bg-blue-600 rounded px-2  sm:px-5 sm:py-2 active:scale-90'>Back</button>
            <Pagination className='sm:text-2xl  sm:scale-100  shrink-0  ' count={9}
                size={"small"}
                page={index}
                onChange={(e, value) => {
                    setindex(value)
                    setuser([])
                }} color="primary"

                sx={{
                    "& .MuiPaginationItem-root": {
                        color: "white",
                    },
                    "& .Mui-selected": {
                        backgroundColor: "#2563eb !important",
                        color: "white",
                    },
                }}
            />
            <button disabled={index === 9} onClick={() => {
                setindex(index + 1)
                setuser([])
            }} style={{ opacity: index === 9 ? 0.5 : 1 }} className='bg-blue-600 rounded  px-2  sm:px-5 sm:py-2 active:scale-90'>Next</button>
        </div>
    )
}

export default pagination