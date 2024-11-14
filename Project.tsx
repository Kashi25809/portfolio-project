
import React from 'react'
import Heading from './Heading';
import Card from './Card';

const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based Interactive resume built with HTML and CSS, allowing users to showcase their skills dynimically",
        img: "/Project-1",
        tags: ["HTML", "CSS", "Typescript", "Node"],
    },
    {
      id: 1,
        title: "Dynamic Resume Builder",
        desc: "A TypeScript-based Dynamic resume builder built with HTML and CSS, allowing users to showcase their skills dynimically",
        img: "/Project-2.html",
        tags: ["HTML", "CSS", "Typescript", "Node"],
    },
    {
      id: 0,
        title: "Editable Resume Builder",
        desc: "A TypeScript-based Editable resume builder built with HTML and CSS, allowing users to showcase their skills dynimically",
        img: "/Project-3.html",
        tags: ["HTML", "CSS", "Typescript", "Node"],
    },
    {
      id: 0,
        title: "Shareable Resume Builder",
        desc: "A TypeScript-based Shareable resume builder built with HTML and CSS, allowing users to showcase their skills dynimically",
        img: "/Project-4.html",
        tags: ["HTML", "CSS", "Typescript", "Node"],
    },
    
]

const project = () => {
  return (
    <div id='project' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-item-center'>
        {data.map((el) => (<Card 
        key={el.id}
        title={el.title}
        desc={el.desc} 
        img={el.img} 
        tags={el.tags}
        />))}
      </div>
    </div>
  )
}

export default project
