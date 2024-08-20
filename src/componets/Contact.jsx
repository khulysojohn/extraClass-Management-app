import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import { FaSkype, FaGithub, FaTelegram} from 'react-icons/fa';
import icon from '../assets/logo-white.png';


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
              <a href='t.me/khuljohn'>
                <FaTelegram size={40} color='white'/>
              </a>
            </li>
            <li>
              <a  href='https://github.com/khulyso-dev'>
                <FaGithub size={40} color='white'/>
              </a>
            </li>
            <li>
              <a  href='https://twitter.com/Khulyso12'>
                <img src={icon} alt='x' width={30} height={30}/>
              </a>
            </li>
            <li>
              <a  href='https://join.skype.com/invite/AnCZ9LffcFSD'>
                <FaSkype size={40} color='white'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
