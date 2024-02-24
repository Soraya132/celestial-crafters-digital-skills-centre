"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
// Import Swiper styles

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Keyboard, Scrollbar, Pagination } from "swiper/modules";
import Image from "next/image";
import { TitleText } from "./CustomText";
const Slideshow = () => {
  const imapctStatement = [
    {
      id: 1,
      photo: "/impact1.png",
    },
    {
      id: 2,
      photo:  "/impact2.png",
    },
    {
      id: 3,
      photo: "/impact3.png",
    },
    {
      id: 4,
      photo: "/impact4.png",
    },
    {
      id: 5,
      photo: "/impact5.png",
    },
    {
      id: 6,
      photo: "/impact6.png",
    },
  ];

  return (
    <div id="team" className="bg-lightGray-color/70">
      <div className="relative z-20 flex flex-col py-20 px-10 lg:px-32">
      <TitleText title={<>Our Impact Statement</>} textStyles="text-center" />
        <div className="w-full">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay every 5 seconds
            allowTouchMove={true} // Disable draggi
            centeredSlides={false}
            slidesPerGroupSkip={1}
            grabCursor={false}
            spaceBetween={20}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
              },
              900: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
              1200: {
                slidesPerView: 3,
                slidesPerGroup: 1,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Keyboard, Scrollbar, Pagination, Autoplay]}
            className="mySwiper"
          >
          
              {imapctStatement.map((member) => (
                <SwiperSlide
                  key={member.id}
                  className="grid  md:grid-cols-2 xl:grid-cols-3 py-8 gap-2 overflow-x-hidden overflow-y-hidden"
                >
                  <div
                    key={member.id}
                    className="h-full px-3 py-5 flex flex-col gap-x-2"
                  >
                    <Image
                      src={member.photo}
                      alt={member.name}
                      height={70}
                      width={70}
                      className=" w-full md:w-[250px] h-[200px] mx-auto mb-2 object-fill"
                    />
                  </div>
                </SwiperSlide>
              ))}
            ;
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
;
