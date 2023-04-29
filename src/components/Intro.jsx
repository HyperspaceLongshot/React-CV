import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Intro = () => {
  return (
    <div name='intro' className='w-full h-screen bg-blue-950'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-blue-50'>
            Hello, my name is
          </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-blue-50 py-1'>Johnathan Regan</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-blue-50 py-1'>and I am a Full Stack Developer.</h2>
          <p className='text-blue-50 py-4 max-w-[700px]'>
            Resourceful and motivated junior full stack developer, proficient in core java full stack principals.
            Looking to join a professional team on which to work, learn and grow.
          </p>
      </div>
      </div>
  )
}

export default Intro