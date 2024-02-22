import React from "react";
import { TitleText } from "./CustomText";
import Image from "next/image";

const Challengs = () => {
  return (
    <section className='min-h-screen challenge  p-4 md:p-14 lg:p-16'>
      <div className="flex flex-col gap bg-lightGray-color/90 p-9 pb-10 items-center justify-center">
      <TitleText title={<> The Challenge</>} textStyles="text-center" />

       
        <p className="py-6 font-normal  text-[20px]  text-center">
          In Kenya , there’s high demand for digital skills but the institutions
          offering them are expensive thus making young girls and women from
          vulnerable communities shun away from accessing the institutions
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-4">
        {["/slumshouses.jpg","/poorchild.jpg","/home.jpg","/poorchildrenplaying.jpg","/blackchildren.jpg","/challenge.jpg","/womenhouseworking.jpg","/womenhardwork.jpg","/poorpeople.jpg"].map((item)=>{
            return(
            <div className="">
                <Image src={item} width={300} height={300} alt="image"
                className=" w-full h-[250px] rounded-sm object-cover"
              />
            </div>)

        })}
      </div>
      </div>
    </section>
  );
};

export default Challengs;
