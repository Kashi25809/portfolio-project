import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
     <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h2 className='text-4xl md:text-5xl'>I work with Technologies</h2>
            <p className='text-black text-[18px]pt-2'>
            I have solid foundation in web development, specializing in HTML, CSS, and Javascript. My Experience Extands to using frameworks like React and Next.js to create Dynamic and user-friendly applications. I am also proficient in Tailwind CSS for efficient styling and design. With a passion for learning, I stay updated on the latest Technologies to enhance my skills set and contribute effectively to projrcts.
            </p>
        </div>
        <div>
            <div className='grid grid-cols-3 text-accent text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Tailwind</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    
                </div>
                <div className='space-y-2'>
                <h2 data-aos="zoom-in-up">Next.js</h2>
                <h2 data-aos="zoom-in-up">Node.js</h2>
                </div>
            </div>
        </div>
     </div>
      
    </div>
  )
}

export default Skills
