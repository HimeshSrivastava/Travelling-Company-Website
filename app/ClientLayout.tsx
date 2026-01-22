"use client";

import { useState } from "react";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import EnquiryModal from "@/src/components/common/EnquiryModal";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Navbar setOpen={setOpen} />
      <EnquiryModal open={open} setOpen={setOpen} />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
