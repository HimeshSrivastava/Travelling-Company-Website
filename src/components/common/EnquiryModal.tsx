"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function EnquiryModal({ open, setOpen }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_m0q3r73",
        "template_p1faomm",     
        {
          from_name: form.name,
          from_email: form.email,
          contact: form.contact,
          message: form.message,
        },
        "tq3pD5CiU8BdYA4ao"      // 🔴 replace with real one
      )
      .then(() => {
        alert("Enquiry sent successfully!");
        setOpen(false);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        console.log(form);
        alert("Failed to send enquiry");
      });
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <button
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-xl text-black"
        >
          ×
        </button>

        <h2 className="text-xl font-bold mb-4 text-blue-950">Enquiry Form</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            value={form.contact}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <textarea
            name="message"
            placeholder="Write your message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
