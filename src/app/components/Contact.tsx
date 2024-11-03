import React from "react";

function Contact() {
  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h1>
      <p className="mb-4">If you have any questions or would like to get in touch, please feel free to reach out!</p>
      
  

      <h2 className="text-xl font-semibold mt-4">Contact Form:</h2>
      <form className="mt-4">
        <label className="block mb-2">
          Name:
          <input type="text" name="name" required className="border border-gray-300 p-2 w-full" />
        </label>
        <label className="block mb-2">
          Email:
          <input type="email" name="email" required className="border border-gray-300 p-2 w-full" />
        </label>
        <label className="block mb-2">
          Message:
          <textarea name="message" required className="border border-gray-300 p-2 w-full h-32"></textarea>
        </label>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
