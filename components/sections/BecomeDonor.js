"use client";
import CTA from "../Common/CTA";
import ReactPlayer from "react-player";

const BecomeDonor = () => {
  return (
    <div className="bg-gray-100 min-h-screen" id="donor">
      {/* Hero Section */}
      <div className="bg-secondary-color text-white py-20 px-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Become a Donor</h1>
          <p className="text-lg">
            Support Our Cause and Make a Difference Today
          </p>
        </div>
        <div className="mt-10 w-screen ">
            <ReactPlayer
              url="/donor.mp4"
              playing={true}
              loop={true}
              muted
              className="object-cover"
              width={"100%"}
            />
          </div>
      </div>

      {/* Main Content Section */}
      <div className="py-10 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          {/* Donation Information Section */}
          <section className="mb-16 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-4">Why Donate?</h2>
                <p className="text-lg">
                  Your donation helps us provide free digital skills training to
                  women in Nairobi's slums, empowering them to build a better
                  future for themselves and their communities.
                </p>
              </div>
              <div>
                <img
                  src={"/challenge.jpg"}
                  alt="Poor people"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </section>

          {/* Call-to-Action Section */}
          <section>
            <div className="bg-secondary-color text-white py-10 px-8 text-center rounded-lg">
              <h2 className="text-2xl font-bold mb-4">
                Ready to Make a Difference?
              </h2>
              <p className="text-lg mb-6">
                Contact us to become a donor and start changing lives today!
              </p>
              <CTA />
            </div>
          </section>
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
                Our Generous Donor
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
  );
};

export default BecomeDonor;
