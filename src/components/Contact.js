import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#E9C46A] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/27bfbd4b-3839-4380-8be8-8456579dacc4" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-red-500'>Contact</p>
                <p className='py-4'>Use this form or email me - keelanpattersoncaesar@gmail.com</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' required/>
            <textarea className='p-2' name="message" rows="10" placeholder='Message' required></textarea>
            <button className='text-white border-2 bg-[#E76F51] hover:border-[#E76F51] hover:text-black hover:bg-[#EE9882] px-4 py-3 my-8 mx-auto flex items-center'>Connect with me!</button>
        </form>
    </div>
  )
}

export default Contact