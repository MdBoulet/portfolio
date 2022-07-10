import React, { useState } from 'react';
import './Contact.css';

function Contact() {

    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onClick = () => {
        console.log(`Nom : ${nom} \n Email : ${email} \n Message : ${message}`);

        setNom('');
        setEmail('');
        setMessage('');

        alert('Votre message a été bien envoyé !');
    }

  return (
    <section id='contact'>
        <div className="container px-5 py-10 mx-auto contact">
            <div className="mb-20">
                <div className="bg-gray-900 relative flex py-6 rounded shadow-md">
                    <div className="lg:w-1/2 px-6">
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            ADRESSE
                        </h2>
                        <p className="mt-1">
                            Conakry, Guinée
                        </p>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            EMAIL
                        </h2>
                        <a className="text-indigo-400 leading-relaxed">
                            lamineboulet@gmail.com
                        </a>
                        <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                            PHONE
                        </h2>
                        <p className="leading-relaxed">+224-624-509-374</p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <h4>Contactez moi</h4>
                <input type="text" name='nom' className='mb-3' placeholder='Nom' value={nom} onChange={(e)=>setNom(e.target.value)} /><br />
                <input type="text" className='mb-3' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea><br />
                <button className='btn bg-blue-600' onClick={()=>onClick()}>Envoyez</button>
            </div>
        </div>
    </section>
  )
}

export default Contact