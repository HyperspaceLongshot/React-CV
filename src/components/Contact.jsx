import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen  bg-blue-950  text-blue-50 flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/c197eecd-324d-4e73-ba26-c04ec2c00415" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#ffcc00] text-[#ffcc00]'>Contact</p>
                <p className='py-4'>Please fill and submit the form.</p>
            </div>
            <input className='bg-blue-100 p-2 border-2 border-[#ffcc00]  text-black' type="text" placeholder='Name' name='name'/>
            <input className='bg-blue-100 my-4 p-2 border-2 border-[#ffcc00]  text-black' type="email" placeholder='E-mail' name='email' />
            <textarea className='bg-blue-100 p-2 border-2 border-[#ffcc00] text-black' name="message" rows="10" placeholder='Message'></textarea>
            <input type="hidden" name="_gotcha" style="display:none !important"></input>
            <button className='border-2 px-4 py-3 mx-auto my-8 flex items-center hover:bg-[#ffcc00] hover:text-black duration-700'>Send It!</button>
        </form>
    </div>
  )
}

export default Contact