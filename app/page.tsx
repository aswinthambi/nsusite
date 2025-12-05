"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white text-black font-sans">
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NSU Secure Solutions Logo" className="h-10 sm:h-12 w-auto" />
            <h1 className="text-xl sm:text-2xl font-bold tracking-wide text-blue-500">
              NSU Secure Solutions
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-black/90 font-medium">
            <a href="#services" className="hover:text-blue-500 transition">Services</a>
            <a href="#why" className="hover:text-blue-500 transition">Why NSU</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
            <a
              href="#consult"
              className="bg-blue-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-blue-400 transition"
            >
              Free VAPT
            </a>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            {["services", "why", "contact"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="block py-3 px-6 hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
            <a
              href="#consult"
              className="block py-3 px-6 bg-blue-500 text-black font-semibold hover:bg-blue-400 transition"
              onClick={() => setMenuOpen(false)}
            >
              Free VAPT
            </a>
          </div>
        )}

        {/* HERO */}
        <div className="relative h-[70vh] sm:h-[85vh] w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 bg-gradient-to-br from-blue-900 via-black to-blue-800">
          <h2 className="text-3xl sm:text-5xl font-bold text-white leading-tight max-w-xl">
            Reduce Cyber Threats with Expert VAPT Services
          </h2>
          <p className="text-blue-300 mt-4 max-w-md text-base sm:text-lg">
            FREE Vulnerability Assessment for the first 5 companies
          </p>
          <a
            href="#consult"
            className="mt-6 bg-blue-500 text-black font-semibold px-5 py-3 rounded-lg hover:bg-blue-400 transition text-base sm:text-lg"
          >
            Get Free Consultation
          </a>
        </div>
      </header>

      <main className="bg-white text-black">
        {/* LEAD FORM */}
        <section className="px-4 sm:px-6 lg:px-20 py-16 grid lg:grid-cols-2 gap-12" id="consult">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">
              Reduce the Risk of CYBER THREATS
            </h2>
            <p className="mt-4 text-gray-700 text-base sm:text-lg">
              Vulnerability Assessment & Penetration Testing (VAPT)
              <br /> Get a complete security report + remediation guidance.
            </p>
            <a className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-lg transition">
              GET FREE CONSULTATION
            </a>
          </div>

          {/* FORM */}
          <form className="bg-blue-50 p-6 sm:p-8 rounded-2xl shadow-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-500">Get Your FREE Security Consultation</h3>
            <p className="text-sm text-gray-500 mb-6">Limited to first 5 companies only.</p>

            <div className="grid grid-cols-1 gap-4">
              {["Name", "Email", "Mobile", "Company Name"].map((placeholder) => (
                <input
                  key={placeholder}
                  placeholder={placeholder}
                  className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500"
                />
              ))}

              <select className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500">
                <option>Web VAPT</option>
                <option>Mobile VAPT</option>
                <option>Network VAPT</option>
                <option>Cloud VAPT</option>
                <option>API Security</option>
                <option>DPDP Compliance</option>
                <option>Others</option>
              </select>

              <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition">
                GET FREE CONSULTATION
              </button>
            </div>
          </form>
        </section>

        {/* WHY NSU */}
        <section className="px-4 sm:px-6 lg:px-20 py-16 bg-blue-50 border-t border-blue-200" id="why">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Why Choose NSU Secure Solutions?</h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            {[
              "Expert Manual Pen-Testing Team",
              "Fast Turnaround (3–5 Days Report)",
              "Clear, Simple & Actionable Reports",
              "DPDP-Ready Security Approach",
              "End-to-End Support",
              "Affordable Pricing",
              "100% Confidential & Secure",
            ].map((item) => (
              <li key={item}>✔ {item}</li>
            ))}
          </ul>
        </section>

        {/* INDUSTRIES */}
        <section className="px-4 sm:px-6 lg:px-20 py-16 bg-blue-50 border-t border-blue-200">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Industries We Serve</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {[
              "BFSI","Fintech","NBFC","Telecom","Internet","Manufacturing",
              "Healthcare","Consulting","Government","Infra","Tech",
              "Cloud","SaaS","HR","Enterprise"
            ].map((item) => (
              <div
                key={item}
                className="bg-white p-3 rounded-lg border border-blue-200 shadow hover:shadow-lg transition text-sm sm:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-4 sm:px-6 lg:px-20 py-16" id="services">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Our VAPT Services</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            {[
              "Web Application Penetration Testing",
              "Mobile App Penetration Testing",
              "API & Endpoint Security Testing",
              "Cloud Infrastructure Security",
              "Network Security Assessment",
              "Wireless & IoT Security Testing",
            ].map((item) => (
              <li key={item} className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition">
                ✔ {item}
              </li>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section className="px-4 sm:px-6 lg:px-20 py-16" id="contact">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact Us</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            📞 +91 8248850356, +91 9677617985 <br />
            📧 info@nsusolutions.com <br />
            🌐 www.nsusolutions.com <br />
            🏢 87 Pallavan Nagar, Chennai - 600095 <br />
            🏢 333 MBS Complex, Cuddalore Dt – 606303
          </p>
        </section>
      </main>
    </div>
  );
}
