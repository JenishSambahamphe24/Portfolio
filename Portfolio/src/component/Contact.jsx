import React from 'react'

function Contact() {
    return (
        <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='my-4 flex justify-center items-center'>
                    <form action="https://getform.io/f/9e8f98c1-f8cf-45e2-ae7e-5141d0c2abba" method='POST' className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name='name' placeholder='Enter Your name' className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' />
                        <input type="text" name='email' placeholder='Enter Your email' className='my-3 p-2 bg-transparent border-2 rounded-md focus:outline-none text-white' />
                        <textarea name="message" rows="10" placeholder='Enter Your Message' className='p-2 bg-transparent border-2 rounded-md focus:outline-none text-white'></textarea>
                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 my-8 px-6 py-3 mx-auto  rounded-md flex items-center hover:scale-110 duration-300'>lets talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
