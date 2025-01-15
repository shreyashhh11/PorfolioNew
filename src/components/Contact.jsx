import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
import Header from './Header';
import Footer from './Footer';

const Contact = () => {
    const navigate = useNavigate();
    const form = useRef();

    const [formData, setFormData] = useState({
      from_name: '',
      from_email: '',
      message: ''
    });

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.from_name || !formData.from_email || !formData.message) {
          swal('Error', 'Please fill in all fields.', 'error');
          return;
        }

        emailjs.sendForm(
          'service_djj3dvv', 
          'template_6s4knar', 
          form.current, 
          'aFlUe-ITNhqp72mr7'
        ).then(
          () => {
            swal('SUCCESS!', "I'll get back to you ASAP :)");
          },
          (error) => {
            swal('FAILED TO SEND', "Please try again later :(");
          },
        );
    };

    return (
      <>
      <Header/>
      <div className="h-screen flax flex-grow lg:px-40 pt-14 sm:px-10">

        <div className='flex flex-row justify-between pb-2'>
          <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-800 mb-6">Contact Me</h1>
          <button 
            onClick={() => navigate(-1)} // Navigate back
            className="mb-4 px-4 py-2 border-gray-300 text-gray-800 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            Back
          </button>
        </div>

        <div className='Gcard grid grid-cols-1  gap-4 pt-3'>
          <form 
            className='ctForm flex flex-col w-full col-span-1 lg:col-span-2 rounded-lg p-6 shadow-lg  dark:bg-coffee bg-white' 
            ref={form}  
            onSubmit={sendEmail}
          >

            <h2 className='text-2xl dark:text-gray-100 font-bold text-gray-800 mb-4 text-center'>
              Get in Touch
            </h2>
            <p className='text-lg dark:text-gray-200 text-gray-600 mb-6 text-center'>
              Let's catch-up sometime
            </p>

            <input 
              className='py-2 mb-3 txt dark:bg-gray-300 text-gray-800 bg-gray-200 rounded-lg px-3' 
              type='text' 
              name='from_name' 
              value={formData.from_name} 
              onChange={handleChange} 
              placeholder='Your Name'
            />
            <input 
              className='py-2 mb-3 email dark:bg-gray-300 text-gray-800  bg-gray-200 rounded-lg px-3' 
              type='email'  
              name='from_email' 
              value={formData.from_email} 
              onChange={handleChange} 
              placeholder='Your Email'
            />
            <textarea 
              className='py-2 mb-3 msg dark:bg-gray-300 text-gray-800  bg-gray-200 rounded-lg px-3' 
              name='message' 
              rows="5" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder='Your Message'
            />
            
            <button 
              className='py-2 bg-violet-100 dark:bg-violet-200 dark:bg-opacity-80 text-gray-700 rounded-lg px-3 dark:hover:bg-opacity-60 hover:bg-opacity-80' 
              type='submit' 
              value="Send"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <Footer/>
      </>
    )
}

export default Contact;
