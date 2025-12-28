import React from 'react'
import { AiOutlineLeftCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="mt-10 min-h-screen flex items-center justify-center">
      
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg bg-white">
        
        <p className="text-xl font-semibold text-center mb-6">
          Connect with us!
        </p>

        <form className="space-y-4 ">
          
          {/* Name */}
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Your phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Message */}
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full px-4 py-2 border border-gray-300 rounded-md 
                       resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md 
                       hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Back Icon */}
        <div className="flex justify-center mt-6">
          <AiOutlineLeftCircle
            className="size-10 cursor-pointer hover:scale-110 transition"
          />
        </div>

      </div>
    </div>
  )
}

export default Contact;
