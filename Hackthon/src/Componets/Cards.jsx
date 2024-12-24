
import React from 'react'

const Cards = (props) => {

return (
    <div className='mr-5 bg-white text-black inline-block text-center rounded '>
    <img src="{props.profile_photo}" alt="" className=' ml-8 h-32 w-32 rounded-full mb-3' />
    <h1 className='text-2xl font-semibold mb4'>{props.username}</h1>
    <h2>{props.city} , {props.age}</h2>
    <button className='mt-4 bg-emerald-500 text-white px-4 py-2 rounded font-medium'>Add Friend</button>
    </div>
)
}

export default Cards
