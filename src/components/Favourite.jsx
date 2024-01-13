import React from 'react'
import CheckLike from './CheckLike'



const Favourite = ({ fav }) => {

    console.log("fav ",fav)
  return (
   
             <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>

                {fav.map((data ,index) => (
                    <div key={index} className='m-1'>
                        <h3 className='text-lg'>{data?.name}</h3>
                        <img src={data?.sprites?.other?.home?.front_default} alt={data?.name} />
                        <CheckLike/>
                    </div>
        ))}
    </div>
       
  )
}

export default Favourite