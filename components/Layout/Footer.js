"use client";
import { footerLinks, socialMedia } from "../../constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <section className="flex justify-center items-center sm:pt-16 pt-6  flex-col bg-lightGray-color">
    <div
      className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full px-5 md:px-10`}
    >
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <Link href={"/"}>
          <Image
            src={"/logo-removebg-preview.png"}
            alt="logo"
            width={150}
            height={10}
            className="w-[175px]"
          />
        </Link>
        <p
          className={`font-poppins font-normal text-lightRed text-[18px] leading-[30.8px] mt-4 max-w-[312px]`}
        >
          Transforming Lives in Nairobi's Slums, Empowering Women for a Digital
          Future with Celestial Crafters
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div
            key={footerlink.title}
            className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
          >
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-lightRed">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-lightRed hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                <Link href={link.link}>{link.name}</Link>
                  
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full py-5 pb-8 px-6 bg-lightRed flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 Celestial Crafters Digital Skills Center. All Rights
        Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6 gap-4">
        {socialMedia.map((social, index) => (
          <Link href={social.link} key={index} className="text-3xl text-white hover:text-secondary-color">
            {social.imageUrl}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
