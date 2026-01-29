"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Booking () {
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
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6" >
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-900 mb-12">
          Book Your Ride
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – FORM */}
          <div className="bg-white shadow-lg rounded-lg p-8 border-t-gray-600 border-2">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handlePayment}>
              <Input className=" booking-input text-black" placeholder="Full Name" required/>
              <Input className=" booking-input text-black pr-9" type="Number" placeholder="Mobile No." required/>
              <Input className=" booking-input text-black" placeholder="Pick-Up Location" required/>
              <Input className=" booking-input text-black" placeholder="Drop-Off Location" required/>
              <Input className=" booking-input text-black" placeholder="Choose Your Ride" required/>
              <Input className=" booking-input text-black"
                placeholder="No. Of People"
                type="number"
                required
              />

              <div className="md:col-span-2">
                <Label className="block text-sm mb-1 font-medium text-gray-500">
                  Departure Date
                </Label>
                <Input title="Date" type="date" className="booking-input text-black w-full" required/>
              </div>

              <div className="md:col-span-2">
                <Label className="block text-sm mb-1 font-medium text-gray-500">
                  Return Date
                </Label>
                <Input title="Date" type="date" className=" booking-input text-black w-full" required/>
              </div>

              <div className="md:col-span-2 flex justify-center mt-6">
                <Button
                  type="submit"
                  className="bg-black text-white px-10 py-3 rounded-md text-sm font-medium hover:bg-gray-800 transition"
                >
                  BOOK NOW
                </Button>
              </div>
            </form>
          </div>

          {/* RIGHT – IMAGE */}
          <div className="hidden lg:block">
            <Image
              src="/images/taxi-service.jpg"   
              alt="Book Your Ride"
              width={600}
              height={450}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      </section>
  )
}