import React from 'react';
import './About.css';
import Particles from "../Particles";

function About() {
  return (
    <section id='about'>
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col item-center">
            <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                <h1 className="title-font sm:tex-4xl text-4xl mb-4 font-bold text-white">
                        Salut🖐, Je suis Mohamed.
                </h1>
                <h1 className='title-font sm:tex-4xl text-4xl mb-4 font-bold text-blue-500'>WEB DEVELOPER &amp; MOBILE.</h1>
                <h1 className='title-font sm:tex-4xl text-4xl mb-4 font-bold text-white'>Basé à Conakry.</h1>
                <p className="mb-8 leading-relaxed">
                    Je suis diplômé d'une licence en informatique et je me suis très vite spécialisé en developpement
                    d'applications Web & Mobile.
                </p>
                <div className="flex justify-center">
                    <a 
                        href="#contact"
                        className="btn-plus text-lg">
                        En savoir plus
                    </a>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md-w-1/2 w-5/6">
                {/* <img 
                    className="object-cover object-center rounded"
                    src="./logo512.png" alt="" /> */}
                <Particles />
            </div>
        </div>
    </section>
  )
}

export default About