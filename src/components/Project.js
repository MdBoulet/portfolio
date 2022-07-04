import React from 'react';
import './Project.css';
import { HiCode } from 'react-icons/hi'
import { projects } from '../data';

function Project() {
  return (
    <div id='projects' className='text-gray-400 bg-gray-900 body-font'>
        <div className="container px-5 py-6 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-20">
                <HiCode size={32} className='mx-auto inline-block w-10 mb-4' />
                <h1 className='sm:text-4xl text-3xl font-medium title-fond mb-4 text-white'>Mes Apps</h1>
                <p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                    Voici quelques applications que j'ai réalisé avec des technologies Frontend
                </p>
            </div>
            <div className="flex flex-wrap -m-4">
                {
                    projects.map((project) => (
                        <a href={ project.link}
                            target="_blank"
                            key={project.image}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img src={project.image} alt="Gallery" 
                                    className='object-cover object-center'
                                />
                            </div>
                        </a>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Project