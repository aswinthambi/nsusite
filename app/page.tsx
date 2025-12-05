"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-white text-black font-sans">
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="NSU Secure Solutions Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold tracking-wide text-blue-500">NSU Secure Solutions</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-black/90 font-medium">
            <a href="#services" className="hover:text-blue-500 transition duration-300">Services</a>
            <a href="#why" className="hover:text-blue-500 transition duration-300">Why NSU</a>
            <a href="#contact" className="hover:text-blue-500 transition duration-300">Contact</a>
            <a href="#consult" className="bg-blue-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-blue-400 transition duration-300">Free VAPT</a>
          </nav>
          {/* Mobile menu icon */}
          <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <a href="#services" className="block py-3 px-6 hover:bg-gray-100 transition duration-200">Services</a>
            <a href="#why" className="block py-3 px-6 hover:bg-gray-100 transition duration-200">Why NSU</a>
            <a href="#contact" className="block py-3 px-6 hover:bg-gray-100 transition duration-200">Contact</a>
            <a href="#consult" className="block py-3 px-6 bg-blue-500 text-black font-semibold hover:bg-blue-400 transition duration-200">Free VAPT</a>
          </div>
        )}

        {/* HERO SECTION */}
        <div className="relative h-[90vh] w-full flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-blue-900 via-black to-blue-800 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('/tech-grid.svg')] bg-no-repeat bg-center bg-cover"></div>
          <h2 className="relative text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight animate-fadeInUp">Reduce Cyber Threats with Expert VAPT Services</h2>
          <p className="relative text-blue-300 mt-4 max-w-2xl text-lg animate-fadeInUp delay-200">FREE Vulnerability Assessment for the first 5 companies</p>
          <a href="#consult" className="relative mt-6 bg-blue-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-blue-400 transition duration-300 text-lg animate-fadeInUp delay-400">Get Free Consultation</a>
        </div>
      </header>

      <main className="bg-white text-black">
        {/* LEAD FORM */}
        <section className="px-6 lg:px-20 py-20 grid lg:grid-cols-2 gap-12 items-center" id="consult">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-500 leading-tight">
              Reduce the Risk of CYBER THREATS
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Vulnerability Assessment & Penetration Testing (VAPT)<br />
              Get a complete security report + remediation guidance.
            </p>
            <div className="mt-8">
              <a className="bg-blue-600 hover:bg-blue-700 px-6 py-4 rounded-xl text-lg font-semibold shadow-lg transition duration-300">
                GET FREE CONSULTATION
              </a>
            </div>
          </div>

          <form className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-2xl shadow-xl border border-blue-200">
            <h3 className="text-2xl font-bold text-blue-500">Get Your FREE Security Consultation</h3>
            <p className="text-sm text-gray-500 mb-6">Limited to first 5 companies only.</p>

            <div className="grid grid-cols-1 gap-4">
              <input placeholder="Name" className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Email" className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Mobile" className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500" />
              <input placeholder="Company Name" className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500" />

              <select className="p-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500">
                <option>Web VAPT</option>
                <option>Mobile VAPT</option>
                <option>Network VAPT</option>
                <option>Cloud VAPT</option>
                <option>API Security</option>
                <option>DPDP Compliance</option>
                <option>Others</option>
              </select>

              <button className="bg-blue-500 hover:bg-blue-600 py-3 rounded-lg font-semibold transition duration-300">GET FREE CONSULTATION</button>
            </div>
          </form>
        </section>

        {/* WHY NSU */}
        <section className="px-6 lg:px-20 py-20 bg-blue-50 border-t border-blue-200" id="why">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">Why Choose NSU Secure Solutions?</h2>
          <ul className="space-y-4 text-gray-700">
            <li>✔ Expert Manual Pen-Testing Team</li>
            <li>✔ Fast Turnaround (3–5 Days Report)</li>
            <li>✔ Clear, Simple & Actionable Reports</li>
            <li>✔ DPDP-Ready Security Approach</li>
            <li>✔ End-to-End Support (Testing → Fixing → Certification)</li>
            <li>✔ Affordable Pricing for SMEs</li>
            <li>✔ 100% Confidential & Secure</li>
          </ul>
        </section>

        {/* STANDARDS */}
        <section className="px-6 lg:px-20 py-20">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">We Follow Global Security Frameworks</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li>• OWASP Top 10 (Web + API)</li>
            <li>• OSSTMM</li>
            <li>• SANS 25</li>
            <li>• NIST SP 800-115</li>
            <li>• CIS Benchmark</li>
            <li>• MITRE ATT&CK Framework</li>
          </ul>
          <div className="mt-8">
            <button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300">GET FREE CONSULTATION</button>
          </div>
        </section>

        {/* INDUSTRIES */}
        <section className="px-6 lg:px-20 py-20 bg-blue-50 border-t border-blue-200">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-gray-700 text-center">
            {[
              "BFSI","Fintech","NBFC","Telecom","Consumer Internet","Manufacturing",
              "Healthcare","IT/Consulting","Government","Infrastructure","Technology",
              "Cloud Platforms","SaaS","HR","Conglomerates"
            ].map(item => (
              <div key={item} className="bg-white p-4 rounded-lg border border-blue-200 shadow hover:shadow-lg transition duration-300">
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="px-6 lg:px-20 py-20">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">Our VAPT Services</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ Web Application Penetration Testing</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ Mobile App Penetration Testing (Android & iOS)</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ API & Endpoint Security Testing</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ Cloud Infrastructure Security (AWS, Azure, GCP)</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ Network Security Assessment</li>
            <li className="bg-blue-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-300">✔ Wireless & IoT Security Testing</li>
          </ul>
        </section>

        {/* TESTIMONIAL */}
        <section className="px-6 lg:px-20 py-20 bg-blue-50 border-t border-blue-200">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Testimonials</h2>
          <blockquote className="text-gray-700 text-lg bg-white p-6 rounded-xl border border-blue-200 shadow-lg">
            "NSU’s VAPT helped us discover critical vulnerabilities. Their report was clear and immediately useful. Highly recommended." – TKS Engineering Pvt Ltd
          </blockquote>
        </section>

        {/* AWARDS */}
        <section className="px-6 lg:px-20 py-20">
          <h2 className="text-3xl font-bold text-blue-500 mb-6">Awards & Recognition</h2>
          <ul className="space-y-2 text-gray-700">
            <li>• ISO-aligned methodology</li>
            <li>• CERT-IN aligned practice</li>
            <li>• DPDP readiness partner</li>
            <li>• Trusted cybersecurity provider</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="px-6 lg:px-20 py-20 bg-blue-50 border-t border-blue-200">
          <h2 className="text-3xl font-bold text-blue-500 mb-8">FAQ</h2>
          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="font-bold text-blue-400">What is VAPT?</h3>
              <p>VAPT identifies weaknesses before attackers exploit them.</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400">What does a VA include?</h3>
              <p>Scanning, misconfig checks, outdated components, security control checks.</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400">What does Penetration Testing include?</h3>
              <p>Manual exploitation, logic testing, attacker-style simulations, PoC.</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400">What report will you receive?</h3>
              <p>Severity, PoC, step-by-step fix, retesting included.</p>
            </div>
            <div>
              <h3 className="font-bold text-blue-400">What can you achieve?</h3>
              <p>Compliance, trust, audits, security strengthening.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="px-6 lg:px-20 py-20" id="contact">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            📞 +91 8248850356, +91 9677617985<br />
            📧 info@nsusolutions.com<br />
            🌐 www.nsusolutions.com<br />
            🏢 87 Pallavan Nagar, Chennai - 600095<br />
            🏢 333 MBS Complex, Cuddalore Dt – 606303
          </p>
        </section>
      </main>
    </div>
  );
}
