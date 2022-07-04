import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { SiFrontendmentor } from 'react-icons/si';
import './Header.css';

function Header() {
  return (
    <div className='container mx-auto px-10 py-5 header'>
        <div className="home">
            <SiFrontendmentor size={32} />
            <a href="">Portfolio</a>
        </div>
        <div className='links'>
            <a href="#projects">
                Projects
            </a>
            <a href="#techno">
                Technologies
            </a>
            <a href="#contact">
                Contact
            </a>
        </div>
        <div className="social">
            <a href="https://github.com/mdboulet" target='_blank'>
                <AiFillGithub size={32}/>
            </a>
            <a href="https://gn.linkedin.com/in/mohamed-boulet-camara-27b4261a4" target='_blank'>
                <AiFillLinkedin size={32} />
            </a>
            <a href="https://www.instagram.com/mdboulet/" target='_blank'>
                <AiOutlineInstagram size={32} />
            </a>
        </div>
    </div>
  )
}

export default Header