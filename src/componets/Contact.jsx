import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { FaLinkedin, FaGithub, FaDev, FaWhatsapp} from 'react-icons/fa';



const Contact = () => {
 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_kdq6e6a',
       'template_6lrwrqh',
        form.current, 'voB-NL4TSCv7fUDrM'
        )
      .then((result) => {
          console.log(result.text);
          alert("mesege sent");
          form.current.reset();
        }, (error) => {
          console.log(error.text);
          alert("message not sent");
      });
  };


  return (
    <div name='contact' className='w-full h-screen bg-[#1E2D40] flex justify-center items-center pt-64'>
      <div className='flex flex-col w-full justify-center items-center bg-[#1E2D40] pb-6 px-4'>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-[#00FFC3] text-gray-300'>Contact</p>
            <p className='text-gray-300 py-4'>Feel free to get in touch with the developer</p>
          </div>
          <input
            className='bg-[#ccd6f6] p-2'
            type='text'
            placeholder='Name'
            name="User_name"
          />
          <input
            className='my-4 p-2 bg-[#ccd6f6]'
            type='email'
            placeholder='Email'
            name="User_email"
          />
          <textarea
            className='bg-[#ccd6f6] p-2'
            name="message"
            rows='10'
            placeholder='Message'
          >
          </textarea>
          <input
            type='submit' value="Collaborate"
            className='text-white border-2 hover:bg-[#00FFC3] hover:text-black hover:border-[#00FFC3] px-4 py-3 my-8 mx-auto flex items- '
          />
            
        </form>

        <div className='lg:hidden'>
          <ul className='flex'>
            <li>
              <a href='https://dev.to/khulysojohn'>
                <FaDev size={40} color='white'/>
              </a>
            </li>
            <li>
              <a  href='https://github.com/khulysojohn'>
                <FaGithub size={40} color='white'/>
              </a>
            </li>
            <li>
              <a  href='https://wa.me/27818854153'>
                <FaWhatsapp size={40} color='white'/>
              </a>
            </li>
            <li>
              <a  href='https://www.linkedin.com/in/khulyso/'>
                <FaLinkedin size={40} color='white'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
