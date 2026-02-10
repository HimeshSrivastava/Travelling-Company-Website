"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEnquiry } from "@/context/EnquiryContext";
import { Facebook, Mail, Twitter } from "lucide-react";

export default function ContactPage() {
  const{ openEnquiry }=useEnquiry();
  return (
    <>
    <section className="bg-[#f2f2f0] py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="max-w-7xl mx-auto px-6">
  {/* Heading */}
  <h2 className="text-center text-4xl font-bold text-gray-700">
    CONTACT US
  </h2>

  {/* Divider */}
  <div className="flex items-center justify-center gap-4 mt-4 mb-12">
    <span className="h-px w-24 bg-gray-300" />
    <span className="text-red-800 text-xl">♡</span>
    <span className="h-px w-24 bg-gray-300" />
  </div>

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
          <div className="space-y-6">
            <Input
              type="text"
              placeholder="Enter your name"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <Input
              type="email"
              placeholder="Enter your Email-id"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <Input
              type="tel"
              placeholder="Enter Your Contact No."
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

<Select>
      <SelectTrigger className="w-full p-4">
        <SelectValue placeholder="Choose Services" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="tour">Tour Packages</SelectItem>
        <SelectItem value="cab">Cab Services</SelectItem>
        <SelectItem value="corporate">Corporate Travel</SelectItem>
        <SelectItem value="hotel">Hotel Booking</SelectItem>
      </SelectContent>
    </Select>

            <Textarea
              rows={5}
              placeholder="Write Your Message Here"
              className="w-full p-4 text-black rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
            />

            <Button
              type="submit"
              onClick={openEnquiry}
              className="bg-black text-white px-10 py-3 rounded-md hover:bg-gray-800 transition"
            >
              Send Message
            </Button>
          </div>

          {/* RIGHT MAP */}
          <div className="w-full h-[450px] rounded-md overflow-hidden border">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Chetan%20Trip%20Solution%20Pvt.%20Ltd%20Noida&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

<section className="bg-white p-24">
  <div className="max-w-7xl mx-auto px-6">
   {/* Content */}
   <div className="grid grid-cols-1 md:grid-cols-2">
    {/* LEFT */}
    <div >
      <h3 className="text-2xl font-semibold text-gray-900 mb-6">
        Chetan Trip Solution
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed">
        C-17/3, Shiv Shakti Apartment, Sector 71,
        <br />
        Noida, Uttra Pradesh 201301.
      </p>

      <p className="text-gray-700 mb-2">
        <strong>Email :</strong>{" "}
        <a
          href="mailto:chetantripsolution@gmail.com"
          className="text-gray-600"
        >
          chetantripsolution@gmail.com
        </a>
      </p>

      <p className="text-gray-700 mb-2">
        <strong>URL :</strong>{" "}
        <a
          href="https://www.chetantravels.com/"
          className="text-gray-600"
        >
          https://www.chetantravels.com/
        </a>
      </p>

      <p className="text-gray-700 mt-6">
        <strong>Mobile :</strong>  9911099993, 9818280275
      </p>
    </div>

    {/* RIGHT */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-10">
        For any Queries or Feedback !
      </h3>

      <div className="space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Input
            type="text"
            placeholder="Name"
            className="contact-input text-black"
          />
          <Input
            type="email"
            placeholder="Email"
            className="contact-input text-black"
          />
        </div>

        <Textarea
          placeholder="Message"
          rows={4}
          className="contact-input resize-none text-black"
        />

        <div className="flex items-center gap-4 text-gray-700 cursor-pointer w-fit">
          <Mail size={22} />
         <Button
           onClick={openEnquiry} > 
          Send message
          </Button>
        </div>
      </div>
    </div>
  </div>

  {/* Social Icons */}
  <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 text-gray-300">
    <Twitter size={20} />
    <Facebook size={20} />
  </div>
{/* Local styles */}
<style jsx>{`
  .contact-input {
    width: 100%;
    border: none;
    border-bottom: 1px solid #d1d5db;
    padding: 10px 0;
    font-size: 15px;
    outline: none;
    background: transparent;
  }
  .contact-input:focus {
    border-bottom-color: #10b981;
  }
`}</style>
  </div>
</section>
</>
  );
}
