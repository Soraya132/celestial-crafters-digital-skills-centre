import Contact from "@/components/sections/Contact";
import CommonHeader from "@/components/Common/CommonHeader";

const ContactPage = () => {
  return (
    <div>

<section
      className="bg-top bg-cover min-h-screen bg-[url(/challenge.jpg)]"
    >
      <div className="header-gradient w-full min-h-screen flex flex-col items-center justify-center px-6 md:px-10">
        <div className="  text-lightRed  w-full  bg-secondary-color/90 p-10 py-20 mt-[180px] md:mt-[170px] lg:mt-36 mb-10">
        <div className=" text-white py-20 px-2">
        <div className=" text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Donor</h1>
          <p className="text-lg">
            Support Our Cause and Make a Difference Today
          </p>
        </div>
      </div>
         

      
        </div>
      </div>
    </section>
        <div className="bg-gray-100 min-h-screen">
      
      <Contact />

      {/* Main Content Section */}
      <div className="py-10 px-4 md:px-10 lg:px-20 bg-lightGray-color">
        <div className="max-w-6xl mx-auto ">
          {/* Donation Information Section */}
          <section className="mb-16  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
                <p className="text-lg">
                  Your donation helps us provide free digital skills training to
                  women in Nairobi's slums, empowering them to build a better
                  future for themselves and their communities.
                </p>
              </div>
              <div className="flex flex-col justify-center">
                <img
                  src={"/challenge.jpg"}
                  alt="Poor people"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>
          {/* Additional Image */}
          <div className="mt-10">
            <img
              src={"/ask.jpg"}
              alt="Poor people"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-3">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Celestial Crafters"
                className="w-[300px] h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Thanks From Our Generous Donor
              </h2>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center sm:justify-start">
                <div className="">
                  <p className="text-lg text-gray-700">
                    We are grateful to Celestial Crafters for their generous
                    contributions and support towards our mission of empowering
                    women through technology education.
                  </p>
                  <p className="text-lg text-gray-700 mt-4">
                    Their dedication to social impact has helped us make a
                    difference in the lives of many young women in Nairobi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     
    </div>
  );
};

export default ContactPage;
