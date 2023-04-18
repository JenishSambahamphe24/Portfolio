import React from 'react'

function ABout() {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full justify-center h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>About</p>
                </div>
                <p className='text-xl'>
                Welcome to my website! I am a front-end developer with a passion for creating beautiful and functional websites. Although I don't have prior experience in a professional environment, I have attended multiple coding bootcamps and have a solid foundation in front-end technologies such as HTML, CSS, Bootstrap, Tailwind, JavaScript, and React.In addition to my bootcamp experience, I have completed a degree that has equipped me with a diverse range of programming language knowledge, including C, web development, back-end development, Java, advance Java, networking, advance networking, cybersecurity, software engineering, and database management. I am eager to apply this knowledge to real-world projects and collaborate with a team of expert software developers.
                </p>
                <br />
                <p className='text-xl'>Currently, I am searching for an internship to further develop my skills and gain experience in a professional setting. I am excited to learn and contribute to meaningful projects that make a positive impact on people's lives. Thank you for taking the time to visit my website, and please don't hesitate to contact me if you have any questions or opportunities.</p>
            </div>

        </div>
    )
}

export default ABout