import React, {useRef, useState} from 'react'
import {TbSend} from 'react-icons/tb'
import {AiOutlineWarning} from 'react-icons/ai'
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion';
import { staggerContainer, textVariant, fadeIn } from '../utils/motion';




const Contact = () => {
  const form = useRef();
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_key', 'template_key', form.current, 'public_key')
      .then((result) => {
          console.log(result.text);
          setIsError(false)
      }, (error) => {
          console.log(error.text);
          setIsError(true)
      });
      e.target.reset();
  };
  return (
    <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25}}
    id='contact' className=' sm:w-full h-screen relative flex flex-col items-center top-[500px] xs:top-[200px]  sm:top-[300px] md:top-[50px] lg:top-[-100px] pt-[100px] pb-[700px]'>

      <motion.h1 variants={textVariant()} className="py-4 text-4xl font-bold text-center">Contact me</motion.h1>
      <motion.div variants={textVariant()} className='flex flex-row items-center'>
        <AiOutlineWarning className='w-5 h-5 text-red-600'/>
        <motion.p variants={textVariant()} className='text-[14px] text-red-600'>Currently unavailable to message through this form.</motion.p>
      </motion.div>
      <form ref={form} onSubmit={sendEmail}>
        <motion.div variants={fadeIn("right", "spring", 0.25, 1)} className='w-[300px] md:w-[600px] lg:w-[1000px]'>
          <div>
            <div>
              <label className='uppercase text-sm py-2 '>Name</label>
              <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="text" name="user_name" placeholder='NAME' required />
            </div>
            <div>
              <label className='uppercase text-sm py-2 '>Email</label>
              <input className='border-2 rounded-lg p-3 flex border-gray-300 w-full' type="email" name="user_email" id="" placeholder='EMAIL' required />
            </div>

          </div>
          <div>

            <label className='uppercase text-sm py-2'>Message</label>
            <textarea  rows="10" name="message" placeholder='MESSAGE' required minLength={5} className='border-2 rounded-lg p-3 flex border-gray-300 w-full' />
            <button type='submit' value="Send" className=' bg-[rgb(1,176,245)] flex flex-row align-middle items-center justify-center text-gray-100 mt-4 w-full rounded-lg p-4'>
              <TbSend className='sendIcon' />
              SEND MESSAGE
            </button>
            {isError &&
            <div className='flex flex-col text-center'> 
            <p className='text-[20px] text-red-600 font-bold '>Failed to send message. Messaging through here is currently unavailable, sorry.</p>
            <p className='text-[20px] text-green-700 font-fold'>Message me at: naikouragnell@gmail.com</p>
            </div>}
          </div>

        </motion.div>
      </form>

    </motion.section>
  )
}

export default Contact
