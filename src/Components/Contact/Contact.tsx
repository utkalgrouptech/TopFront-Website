import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="md:order-2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Send a Message</h1>
          <p className="text-gray-600 mb-8">
            Feel free to get in touch by phone or through the contact form below. Your message will be sent directly to our staff who will answer as soon as they can.
          </p>
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name*</label>
              <input
                type="text"
                required
                placeholder="Enter Name"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Location*</label>
              <input
                type="text"
                required
                placeholder="Enter Location"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {/* Mobile and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile No*</label>
                <input
                  type="text"
                  required
                  placeholder="Enter Mobile No."
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email*</label>
                <input
                  type="email"
                  required
                  placeholder="Enter Email ID"
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Write your message</label>
              <textarea
                rows={5}
                placeholder="Type your message..."
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Company Location */}
        <div className="md:order-1">
          {/* Responsive Map */}
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d412.66028536560367!2d85.75513660966763!3d20.244715835556402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a9f84571a633%3A0x600f47c59a3bcf8!2sUtkal%20Group%20of%20Companies!5e1!3m2!1sen!2sin!4v1743144349889!5m2!1sen!2sin"
              className="w-full h-64 sm:h-80 lg:h-96 border-0 rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          {/* Address & Contact Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Company Address</h3>
              <p className="text-gray-600">
                Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar, Dist- Khurda, Odisha, India-751019.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Details</h3>
              <p className="text-gray-600">+91 7978992560</p>
              <p className="text-gray-600">info@topfront.in</p>
              <p className="text-gray-600">www.topfront.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
