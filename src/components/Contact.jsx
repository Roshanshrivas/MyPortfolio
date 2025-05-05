import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {

    const form = useRef();
    const [isSent, setIsSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                "service_tbv0o9s",
                "template_55hfeq5",
                form.current,
                "UHZRZAYjgbjjC-oEB"
            )
            .then(
                () => {
                    setIsSent(true);
                    form.current.reset();
                    toast.success("Message sent successfully!", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark'
                    });
                },
                (error) => {
                    toast.error("Error sending message.", error);
                    toast.error("Failed to send message. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        theme: 'dark'
                    });
                }
            )

    }

  return (
    <section id="contact" className="min-h-screen bg-gray-900 text-white px-6 py-20 md:px-20">
        <ToastContainer />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">Contact Me</h2>
        <p className="text-lg md:text-xl mb-12">
          Have a project in mind or just want to connect? Feel free to reach out!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full px-5 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            name="message"
            rows="5"
            className="w-full px-5 py-3 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
