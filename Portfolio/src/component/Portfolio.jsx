import React from 'react'
import '../css/portfolio.css'
import todolist from '../assets/portfolio/to-do-list.png'
import weatherApp from '../assets/portfolio/weatherApp.png'
import recipe from '../assets/portfolio/recipe.png'
import textUtils from '../assets/portfolio/text-utilities.jpg'

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: todolist,
            details:(<>
            <p className='text-center my-3 text-3xl'>To-do-list</p>
            <p className=''>A simple todo list app made using html, css and Javascript</p>
            </>),
            href:'https://github.com/JenishSambahamphe24/to-do-list'
        },
        {
            id: 2,
            src: weatherApp,
            details:(<>
                <p className='text-center my-3 text-2xl'>Weather App</p>
                <p>A weather app made using react and rapid API</p>
                </>),
                href:'https://github.com/JenishSambahamphe24/A-simple-life'
            
        }, {
            id: 3,
            src: recipe,
            details:(<>
                <h3 className='text-center my-3 text-3xl'>Recipe App</h3>
                <p>A simple Recipe app built using react and spoonacular API</p>
                </>),
                href:'https://github.com/JenishSambahamphe24/my-food-app'

        },
        {
            id: 4,
            src: textUtils,
            details:(<>
                <h3 className='text-center my-3 text-3xl'>To-do-list</h3>
                <p>A text utilities app made using React and Bootstrap</p>
                </>),
                href:'https://github.com/JenishSambahamphe24/text-utils'
        }
    ]
    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  h-full'>
                <div className='pb-6'>
                    <p className='text-4xl inline font-bold border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6 '>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-6 px-8 sm:px-0' style={{maxWidth:'600px', margin:'0 auto'}}>
                {portfolios.map(({ id, src, href, details }) => (
                        <div key={id} className='card shadow-md shadowgray-600 rounded-lg'>
                            <img className='rounded-md duration-200 hover:scale-105' src={src} alt="" />
                            <div className='info text-white text-center'>
                             {details}
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className='card-button w-1/2 my-2 px-3 py-1 mx-auto bg-gradient-to-r from-cyan-500 to-blue-500'> <a href={href} target='_blank'>Code</a></button>
                            </div>
                        </div>
                ))}

                </div>


            </div>
        </div>
    )
}

export default Portfolio