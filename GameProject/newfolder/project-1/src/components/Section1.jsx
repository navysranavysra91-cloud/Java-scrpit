import React from 'react'
import Box from './Box'

const Section1 = (props) => {
  return (
    <div className='content h-fit flex flex-col flex-wrap gap-5 justify-center'>
      {props.company.map((elem) => {
         return <Box img={elem.img} name={elem.name +'  |'} work={elem.work} rate={elem.rate} />
      })}
    </div>
  )
}

export default Section1