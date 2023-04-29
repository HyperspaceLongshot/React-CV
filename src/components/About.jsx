import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-blue-950  text-blue-50'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
                {/* Parent Container */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                {/* Section Title */}
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-blue-50'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold'>Hello, and thank you for visiting my React cv. Hope you and enjoy and feel free to contact me.</p>
                    </div>
                    <div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis perferendis earum adipisci vel eum? Eveniet natus quam delectus, culpa expedita est laborum voluptatibus similique facilis.
                        </p>
                    </div>
                    
                </div>
            </div>

        </div>

    
  )
}

export default About