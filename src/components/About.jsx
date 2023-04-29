import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-blue-950  text-blue-50'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                {/* Parent Container */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                {/* Section Title */}
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#ffcc00] text-[#ffcc00]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold'>Hello, and thank you for visiting my React cv. Hope you enjoy and feel free to contact me.</p>
                    </div>
                    <div>
                        <p>
                            I am an enthusiastic team player trained in Java Full Stack development. Seeking to learn and challenge myself in future roles. Some of the training I've had
                            consist of HTML, CSS, JS, React, Java, Spring Boot, Git and AWS. I am currently pursuing certifications in more technologies. 
                             
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>

    
  )
}

export default About