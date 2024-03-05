"use client";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const formSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string().required("Required"),
});

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
        handleServerResponse(
          true,
          "Thanks for your message! We'll be in touch soon."
        );
      })
      .catch((error) => {
        actions.setSubmitting(false);
        handleServerResponse(false, "There was an error");
      });
  };

  return (
    <div div className="w-full flex flex-col items-center justify-center px-5">
      <div className=" w-full md:w-[80%] lg:w-[70%] flex justify-center items-center flex-wrap my-4 mx-4 pt-6 gap-3">
        <div className="min-w-[290px] min-h-[70px] flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
          <a
            href="mailto:inquirecelestialcrafters@gmail.com"
            className="font-[500] text-[14px] sm:text-[18px] overflow-hidden"
          >
            inquirecelestialcrafters@gmail.com
          </a>
        </div>
        <div className="min-w-[290px]  min-h-[70px]  flex flex-row justify-start items-center my-2 mx-0 p-2 rounded-[10px] cursor-pointer bg-[#fef4f5] transiton-all duration-100">
          <img
            src={"/mobile.png"}
            alt="phone"
            className="w-[40px] h-[40px] my-0 mx-2"
          />
          <a href="tel:+254-7-27-493-854" className="font-[500]">
            +254-7-27-493-854
          </a>
        </div>
      </div>
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        onSubmit={handleOnSubmit}
        validationSchema={formSchema}
      >
        {({ isSubmitting }) => (
          <Form
            id="fs-frm"
            noValidate
            className="w-full md:w-[80%] lg:w-[70%] flex-col my-2  flex justify-center items-center "
          >
            <div className="flex flex-col w-full my-2 mx-0 rounded-[10px] cursor-pointer transition-all duration-150">
              <label htmlFor="name"></label>
              <Field
                id="name"
                type="text"
                name="name"
                placeholder="name"
                className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none"
              />
              <ErrorMessage name="name" className="errorMsg" component="div" />
            </div>
            <div className="flex flex-col w-full my-2 mx-0 rounded-[10px] cursor-pointer transition-all duration-150">
              <label htmlFor="email"></label>
              <Field
                id="email"
                type="email"
                name="email"
                placeholder="email"
                className="p-text bg-primary-color w-full px-3 py-4 border-none rounded-[7px] text-secondary-color outline-none"
              />
              <ErrorMessage name="email" className="errorMsg" component="p" />
            </div>
            <div className="flex flex-col w-full my-2 mx-0 rounded-[10px] cursor-pointer  transition-all duration-150">
              <label htmlFor="message"></label>
              <Field
                id="message"
                name="message"
                component="textarea"
                placeholder="message"
                className="p-text bg-primary-color w-full px-2 py-3 border-none rounded-[7px] text-secondary-color outline-none"
              />
              <ErrorMessage name="message" className="errorMsg" component="p" />
            </div>

            <button
              className="p-text py-3 px-4 rounded-[10px] border-none bg-secondary-color font-[500] text-white-color outline-none my-4 cursor-pointer hover:bg-[#2430af]"
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
    </div>
  );
};

export default Contact;
