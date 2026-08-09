import React from 'react'

const Box = (props) => {
  return (
      <div className='box flex items-center justify-between uppercase h-100 bg-black text-white'>
        <div className='flex items-center gap-2'>
        <img className='h-20 rounded-2xl' src={props.img} alt="" />
        <h3 className='font-bold text-lg py-10'>{props.name}</h3>
        <p>{props.work}</p>
        </div>
        <div>
          <button className='btn text-2xl rounded-3xl uppercase font-bold'>Apply ${props.rate}/hr</button>
        </div>
      </div>

  )
}

export default Box