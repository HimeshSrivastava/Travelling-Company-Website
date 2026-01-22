"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function BookingPage() {
    const router = useRouter();
  const [tripType, setTripType] = useState<"oneway" | "round">("oneway");
  
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };
  

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const res = await loadRazorpay();
    if (!res) {
      alert("Razorpay SDK failed to load");
      return;
    }
  
    // Create order
    const orderRes = await fetch("/api/create-order", {
      method: "POST",
    });
  
    const order = await orderRes.json();
  
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Tourist Website",
      description: "Ride Booking Payment",
      order_id: order.id,
      handler: function (response: any) {
        alert("Payment Successful!");
        console.log(response);
        router.push("/"); // redirect after payment
      },
      prefill: {
        name: "Customer Name",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };
  
    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };
  

  return (
    <>
    <div className="fixed inset-0 bg-black z-40"></div>
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      {/* Modal */}
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-xl relative">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b">
          <h2 className="text-xl font-semibold text-red-600">
            Book Your Ride
          </h2>
          <button onClick={() => router.push("/")}
  className="text-2xl font-bold text-red-600 hover:scale-110 transition">×</button>
        </div>

        {/* Form */}
        <div className="px-8 py-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handlePayment}>
            {/* Row 1 */}
            <input className="booking-input text-black" placeholder="Full Name" />
            <input className="booking-input text-black" placeholder="Mobile No." />

            {/* Row 2 */}
            <input className="booking-input text-black" placeholder="Pick-Up Location" />
            <input className="booking-input text-black" placeholder="Drop-Of Location" />

            {/* Trip Type */}
            <div className="flex items-center gap-10 md:col-span-2 text-sm">
              <label className="flex items-center gap-2 cursor-pointer text-black">
                <input
                  type="radio"
                  checked={tripType === "oneway"}
                  onChange={() => setTripType("oneway")}
                  className="accent-purple-600 text-black"
                />
                One-Way Trip
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-black">
                <input
                  type="radio"
                  checked={tripType === "round"}
                  onChange={() => setTripType("round")}
                  className="accent-purple-600 text-black"
                />
                Round Trip
              </label>
            </div>

            {/* Row 3 */}
            <input className="booking-input text-black" placeholder="Choose Your Ride" />
            <input
              className="booking-input text-black"
              placeholder="No. Of People"
              type="number"
            />

            {/* Departure Date */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-black">Departure Date</label>
              <input type="date" className="booking-input w-full text-black" />
            </div>

            {/* Return Date */}
            <div className="md:col-span-2">
              <label className="block text-sm mb-1 text-black">Return Date</label>
              <input type="date" className="booking-input w-full text-black" />
            </div>

            {/* Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-black text-white px-14 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
              >
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Local styles matching your globals.css */}
      <style jsx>{`
        .booking-input {
          width: 100%;
          background: #f3f3f3;
          border: none;
          padding: 14px 16px;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }
        .booking-input::placeholder {
          color: black;
        }
        .booking-input:focus {
          box-shadow: inset 0 0 0 1px #999;
          background: #f0f0f0;
        }
      `}</style>
    </div>
    </>
  );
}
