import React from 'react'
import { useState } from 'react'
import { FaRegHeart,FaHeart  } from "react-icons/fa";



const CheckLike = () => {

    const [like, setLike] = useState(false)

    const checkLike = () => {
        setLike((check) => !check)
        // setLike(true)
    }

  return (
    <div>
        <button onClick={checkLike} className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
           {like ? <FaHeart className='text-red-500'/> : <FaRegHeart />}
        </button>
   
    </div>
  )
}

export default CheckLike 