import React from 'react'
import heroImg from '../assets/Jenish.png'
import { MdArrowRight } from 'react-icons/md'
import {Link} from 'react-scroll'


function Home() {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 text-white md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl'>I'm a Front-end Developer</h2>
          <p className='text-gray-500 py-4 max-wd-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non voluptate, aliquam saepe vitae minima maiores minus sit, adipisci sunt dolor praesentium veritatis eveniet nulla consectetur? Blanditiis nemo nesciunt illo, laudantium tempore eos quibusdam similique cupiditate voluptates aliquid voluptatum ab voluptas est reiciendis, molestias ad dicta magnam veritatis ipsa dignissimos assumenda!

          </p>
          <div>
            <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500'>
              portfolio
              <span className='group-hover:rotate-90 duration-300'>
                <MdArrowRight className='ml-1' size={25}/>
              </span>
            </Link>
          </div>
      </div>
      <div>
        <img src={heroImg} alt="my-profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
      </div>
      </div>
    </div>
  )
}

export default Home
