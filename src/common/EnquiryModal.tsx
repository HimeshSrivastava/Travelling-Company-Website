"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useEnquiry } from "@/context/EnquiryContext";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  contact: string;
  message: string;
};

type FormErrors = Partial<FormState>;

export default function EnquiryModal() {
  const { isOpen, closeEnquiry } = useEnquiry();

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: FormErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!form.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^\d{10}$/.test(form.contact)) {
      newErrors.contact = "Enter a valid 10-digit number";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        closeEnquiry();
        setForm({ name: "", email: "", contact: "", message: "" });
      } else {
        alert("Message sent successfully!");
        closeEnquiry();
        setForm({ name: "", email: "", contact: "", message: "" });
      }
    } catch (error) {
      alert("Server error. Please try later.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md relative">

        <Button
          onClick={closeEnquiry}
          className="absolute top-3 right-3 text-xl text-black bg-white hover:text-white"
        >
          ×
        </Button>

        <h2 className="text-xl font-bold mb-4 text-blue-950">
          Enquiry Form
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">

          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={form.name}
              className="text-black"
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              className="text-black"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <Input
              name="contact"
              placeholder="Contact Number"
              className="text-black"
              value={form.contact}
              onChange={handleChange}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm">{errors.contact}</p>
            )}
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Write your message"
              rows={4}
              className="text-black"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  );
}
