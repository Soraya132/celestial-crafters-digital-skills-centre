"use client"
import React, { useState } from 'react';
import { TitleText } from './CustomText';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
  };

  return (
    <div className="w-full flex-col flex justify-center items-center min-h-screen py-10 px-5 md:px-10">
      <TitleText title={<>Contact Us</>} textStyles="text-center" />

      <div className=" w-full md:w-[80%] lg:w-[70%] flex justify-evenly items-center flex-wrap my-4 mx-4 pt-4">
        <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
          <img src={'/email.png'} alt="email" className='w-[40px] h-[40px] my-0 mx-2' />
          <a href="mailto:hello@micael.com" className="font-[500]">hello@micael.com</a>
        </div>
        <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
          <img src={"/mobile.png"} alt="phone" className='w-[40px] h-[40px] my-0 mx-2' />
          <a href="tel:+1 (123) 456-7890" className="font-[500]">+1 (123) 456-7890</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="w-full md:w-[80%] lg:w-[70%] flex-col my-2  flex justify-center items-center">
          <div className="flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150">
            <input className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
          </div>
          <div className="flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150">
            <input className="p-text bg-primary-color w-full px-3 py-4 border-none rounded-[7px] text-secondary-color outline-none" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
          </div>
          <div className='flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150'>
            <textarea
              className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button type="button" className="p-text py-2 px-3 rounded-[10px] border-none bg-secondary-color font-[500] text-white-color outline-none my-4 cursor-pointer hover:bg-[#2430af]" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </div>
  );
};

export default Contact
