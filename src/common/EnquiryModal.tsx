"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {useEnquiry} from "@/context/EnquiryContext";
import { useState } from "react";

export default function EnquiryModal() {
  const { isOpen, closeEnquiry } = useEnquiry()
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const res = await fetch("/api/send-mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if(data.success){
      alert("Message sent successfully!");
      closeEnquiry();
      setForm({ name:"", email:"", contact:"", message:""});
    } else {
      alert("message sent");
      setForm({ name:"", email:"", contact:"", message:""});
    }
  };

  if (!isOpen) return null  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">
        <Button
          onClick={closeEnquiry}
          className="absolute top-3 right-3 text-xl text-black bg-white hover:text-white"
        >
          ×
        </Button>

        <h2 className="text-xl font-bold mb-4 text-blue-950">Enquiry Form</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <Input
            type="text"
            name="contact"
            placeholder="Contact Number"
            required
            value={form.contact}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <Textarea
            name="message"
            placeholder="Write your message"
            rows={4}
            required
            value={form.message}
            onChange={handleChange}
            className="w-full border p-2 rounded text-black"
          />

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded"
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
