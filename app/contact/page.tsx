"use client";

export default function ContactPage() {
  return (
    <section className="bg-[#f2f2f0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <h1 className="text-center text-3xl md:text-4xl font-semibold text-black">
          Contact Us
        </h1>

        {/* Divider */}
        <div className="flex justify-center items-center gap-4 mt-4 mb-10">
          <span className="w-16 h-px bg-gray-400" />
          <span className="w-3 h-3 rounded-full border border-red-400" />
          <span className="w-16 h-px bg-gray-400" />
        </div>

        {/* Subtitle */}
        <p className="text-center max-w-4xl mx-auto text-gray-700 mb-14">
          Get in touch with Chetan Tour and Travel for personalized travel
          experiences. Our team of travel experts is ready to provide you with
          personalized services and travel advice. Whether you’re booking a
          vacation or seeking recommendations, we’re just a message away.
        </p>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-8">
          {/* LEFT FORM */}
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <input
              type="email"
              placeholder="Enter your Email-id"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <input
              type="tel"
              placeholder="Enter Your Contact No."
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <select
              className="w-full p-4 rounded-md border border-gray-300 text-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-400"
            >
              <option>Choose Services</option>
              <option>Tour Packages</option>
              <option>Cab Services</option>
              <option>Corporate Travel</option>
              <option>Hotel Booking</option>
            </select>

            <textarea
              rows={5}
              placeholder="Write Your Message Here"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <button
              type="submit"
              className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>

          {/* RIGHT MAP */}
          <div className="w-full h-[450px] rounded-md overflow-hidden border">
            <iframe
              src="https://www.google.com/maps?q=Chetan%20Trip%20Solution%20Pvt.%20Ltd%20Noida&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
