// "use client";
// import React, { useState } from "react";
// import { TitleText } from "../Common/CustomText";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isFormSubmitted, setIsFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const { username, email, message } = formData;

//   const handleChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = () => {
//     setLoading(true);
//     console.log(formData)
//   };

//   return (
//     <div className="w-full flex-col flex justify-center items-center py-10 px-5 md:px-10" id="contact">
//       <TitleText
//         title={<>Contact us to become a donor</>}
//         textStyles="text-center"
//       />

//       <div className=" w-full md:w-[80%] lg:w-[70%] flex justify-evenly items-center flex-wrap my-4 mx-4 pt-6">
//         <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
//           <a href="mailto:inquirecelestialcrafters@gmail.com" className="font-[500] text-[14px] sm:text-[18px] overflow-hidden">
//           inquirecelestialcrafters@gmail.com
//           </a>
//         </div>
//         <div className="min-w-[290px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
//           <img
//             src={"/mobile.png"}
//             alt="phone"
//             className="w-[40px] h-[40px] my-0 mx-2"
//           />
//           <a href="tel:+254-7-27-493-854" className="font-[500]">
//           +254-7-27-493-854
//           </a>
//         </div>
//       </div>
//       {!isFormSubmitted ? (
//         <div className="w-full md:w-[80%] lg:w-[70%] flex-col my-2  flex justify-center items-center">
//           <div className="flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150">
//             <input
//               className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none"
//               type="text"
//               placeholder="Your Name"
//               name="username"
//               value={username}
//               onChange={handleChangeInput}
//             />
//           </div>
//           <div className="flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150">
//             <input
//               className="p-text bg-primary-color w-full px-3 py-4 border-none rounded-[7px] text-secondary-color outline-none"
//               type="email"
//               placeholder="Your Email"
//               name="email"
//               value={email}
//               onChange={handleChangeInput}
//             />
//           </div>
//           <div className="flex justify-center items-center w-full my-2 mx-0 rounded-[10px] cursor-pointer bg-primary-color transition-all duration-150">
//             <textarea
//               className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none"
//               placeholder="Your Message"
//               value={message}
//               name="message"
//               onChange={handleChangeInput}
//             />
//           </div>
//           <button
//             type="button"
//             className="p-text py-3 px-4 rounded-[10px] border-none bg-secondary-color font-[500] text-white-color outline-none my-4 cursor-pointer hover:bg-[#2430af]"
//             onClick={handleSubmit}
//           >
//             {!loading ? "Send Message" : "Sending..."}
//           </button>
//         </div>
//       ) : (
//         <div>
//           <h3 className="head-text">Thank you for getting in touch!</h3>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contact;


"use client"
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const formSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string().required("Required"),
  })

const Contact = () => {
    const [serverState, setServerState] = useState();
    const handleServerResponse = (ok, msg) => {
      setServerState({ ok, msg });
      setTimeout(() => {
        setServerState(null);
      }, 3000);
    };
    const handleOnSubmit = (values, actions) => {
      axios({
        method: "POST",
        url: "https://formspree.io/f/xgegaqwd",
        data: values,
      })
        .then((response) => {
          actions.setSubmitting(false);
          actions.resetForm();
          handleServerResponse(true,"Thanks for your message! We'll be in touch soon.");
        })
        .catch((error) => {
          actions.setSubmitting(false);
          handleServerResponse(false,"There was an error");
        });
    };
  
  return (
    <Formik
            initialValues={{ name: "", email: "", message: "" }}
            onSubmit={handleOnSubmit}
            validationSchema={formSchema}
          >
            {({ isSubmitting }) => (
              <Form id="fs-frm" noValidate className="grid  gap-5 ">
                <div className="grid lg:grid-cols-2 gap-5 ">
                  <div>
                    <label htmlFor="name"></label>
                    <Field
                      id="name"
                      type="text"
                      name="name"
                      placeholder="name"
                      className="get__in_touch text-white"
                    />
                    <ErrorMessage
                      name="name"
                      className="errorMsg"
                      component="p"
                    />
                  </div>
                  <div>
                    <label htmlFor="email"></label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="email"
                      className="get__in_touch text-white"
                    />
                    <ErrorMessage
                      name="email"
                      className="errorMsg"
                      component="p"
                    />
                  </div>
                </div>

                <label htmlFor="message"></label>
                <Field
                  id="message"
                  name="message"
                  component="textarea"
                  placeholder="message"
                  className="get__in_touch resize-none lg:h-32 text-white"
                />
                <ErrorMessage
                  name="message"
                  className="errorMsg"
                  component="p"
                />
                <button
                  className="button text-white w-[40%]"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
                {serverState && (
                  <p className={!serverState.ok ? "errorMsg" : ""}>
                    {serverState.msg}
                  </p>
                )}
              </Form>
            )}
          </Formik>
  )
}

export default Contact;
