import React from 'react'

function Contact() {
  return (
    <section id='contact'>
        <div className="container px-5 py-10 mx-auto">
            <div className="mb-20">
                <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
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
        </div>
    </section>
  )
}

export default Contact