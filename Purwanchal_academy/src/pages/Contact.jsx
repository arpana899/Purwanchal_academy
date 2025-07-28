import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("Email Sent Successfully!", response);
          setIsSent(true);
          setStatusMessage("Message sent successfully! We’ll get back to you soon.");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email", error);
          setIsSent(false);
          setStatusMessage("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="responsive-padding py-12 bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-primaryBlue">Leave Us Your Info</h1>
        <p className="text-lg text-gray-600 mt-2">We will get back to you</p>
      </div>

      <div className="flex flex-col md:flex-row mt-10 gap-12 items-start">
        <div className="w-full md:w-1/2 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact Form</h2>

          {statusMessage && (
            <p className={isSent ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
              {statusMessage}
            </p>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="text-gray-700 font-medium">
                Phone no.
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="text-gray-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-auto bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7131.137757598952!2d87.2978245935791!3d26.6622827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ef6f744e24f76b%3A0x6ba3163e5cb908f0!2sPURWANCHAL%20ACADEMY!5e0!3m2!1sen!2snp!4v1740469474694!5m2!1sen!2snp"
            width="100%"
            height="600"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;