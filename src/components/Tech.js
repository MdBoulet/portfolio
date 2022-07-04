import React from 'react';
import './Tech.css';
import { HiChip, HiBadgeCheck } from 'react-icons/hi';

function Tech() {

    const skills = [
        'React',
        'Javascript',
        'Flutter',
        'JAVA',
        'NextJS',
        'Firebase',
        'Node'
    ]

  return (
    <section id='techno'>
        <div className="container px-5 py-10 mx-auto">
            <div className="text-center mb-20">
                <HiChip size={32} className='w-10 inline-block mb-4'/>
                <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                    Compétences &amp; Technologies
                </h1>
                <p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
                    Voici la liste des Langages de programmation et Framework que j'utilise
                </p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {
                    skills.map((skill) => (
                        <div key={skill} className='p-2 sm:w-1/2 w-full'>
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <HiBadgeCheck className='text-blue-400 w-6 h-6 flex-shrink-0 mr-4'/>
                                <span className='title-font font-medium text-white'>
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Tech