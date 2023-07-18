import React, { useState } from 'react';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        // Handle success
        console.log('Email sent successfully');
      } else {
        // Handle error
        console.error('Failed to send email');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div name='contact' className='w-full h-screen bg-[#1E2D40] flex justify-center items-center pt-24'>
      <div className='flex flex-col w-full justify-center items-center bg-[#1E2D40] pb-6 px-4'>
        <form action='/submit' className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00FFC3] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below to get in touch</p>
          </div>
          <input
            className='bg-[#ccd6f6] p-2'
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='my-4 p-2 bg-[#ccd6f6]'
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            className='bg-[#ccd6f6] p-2'
            name='message'
            rows='10'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button
            type='submit' onClick={handleSubmit}
            className='text-white border-2 hover:bg-[#00FFC3] hover:text-black hover:border-[#00FFC3] px-4 py-3 my-8 mx-auto flex items-center'
          >
            Let's Collaborate
          </button>
        </form>

        <div className='lg:hidden'>
          <ul className='flex'>
            <li>
              <a href='https://www.linkedin.com/in/khulysojohn/'>
                <FaLinkedinIn size={40} />
              </a>
            </li>
            <li>
              <a href='https://github.com/khulyso-dev'>
                <FaGithub size={40} />
              </a>
            </li>
            <li>
              <a href='https://twitter.com/Khulyso12'>
                <FaTwitter size={40} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
