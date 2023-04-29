import React from 'react'

import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/java_logo.png'
import SpringBoot from '../assets/new_spring.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen  bg-blue-950  text-blue-50'>

        {/* Parent Container */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#ffcc00] text-[#ffcc00]'>Skills</p>
            <p className='py-4'>Trained Technologies</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
            {/* Logo Container */}
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML Logo" />
                <p className='my-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="CSS Logo" />
                <p className='my-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript Logo" />
                <p className='my-4'>JavaScript</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg Logo" />
                <p className='my-4'>React</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Java} alt="Java Logo" />
                <p className='my-4'>Java</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={SpringBoot} alt="SpringBoot Logo" />
                <p className='my-4'>SpringBoot</p>
            </div>
        </div>

    </div>

    </div>

  )
}

export default Skills