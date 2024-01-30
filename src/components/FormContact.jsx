import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function FormContact({nameProject = ''}){

  const form = useRef();
  const [state, setState] = useState({
    name: "",  
    lastname:"",
    email:"",
    message:""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();    

    emailjs.sendForm('service_j6hd50n', 'template_yqebv4w', form.current, 'e99raosYZvsjsqOFx')
      .then((result) => {
          setState({name: "", lastname:"", email:"",message:""});
          Swal.fire(
            'Gracias por Contactarnos!',
            'Pronto un asesor te contactará para ayudarte y dar respuesta a tus dudas',
            'success'
          )
          //console.log(result.text);
      }, (error) => {
        Swal.fire({
          title: 'Error!',
          text: `Tenemos Problema para contactar el equipo de APunidos ${error}`,
          icon: 'error',
          confirmButtonText: 'Cool'
        })
        //console.log(error.text);
      });
  };
  
  return (
    <>
    <div className="row-span-2 col-span-2 mx-2">
                <div className="px-2 w-full rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">       
                        <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white text-center my-5 ">
                            Contáctanos
                        </h2>                     
                        <form className="w-full" ref={form} onSubmit={sendEmail}>
                            <div className="-mx-2 md:items-center md:flex">
                                <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Nombre</label>
                                    <input type="text" placeholder="John " className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="name" value={state.name} onChange={handleInputChange} required />
                                </div>
        
                                <div className="flex-1 px-2 mt-4 md:mt-0">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Apellido</label>
                                    <input type="text" placeholder="Doe" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" name="lastname" value={state.lastname} onChange={handleInputChange} />
                                </div>
                            </div>
        
                            <div className="mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                <input type="email" placeholder="johndoe@example.com" className="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                name="email" value={state.email} onChange={handleInputChange} required/>
                            </div>
        
                            <div className="w-full mt-4">
                                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mensaje</label>
                                <textarea className="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-200 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder={`p.e: Quiero saber mas de ${nameProject}`} name="message" value={state.message} onChange={handleInputChange} required></textarea>
                            </div>

                            <input type='hidden' name="nameProject" value={nameProject} />
        
                            <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-apsky rounded-lg hover:bg-regal-blue focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                Envia tu Mensaje
                            </button>
                        </form>
                </div>
            </div>
  </>
);
}
