import React from 'react'

const FullName = (props) => {
    
  return (
    <div className='flex flex-col mt-4'> 

    <h1 className='font-bold text-center text-blue-600/75 underline'>Full Name:</h1>
    <p className=' text-center  font-serif   mt-4'> {props.FullName}</p>
       
    </div>
  )
}

export default FullName