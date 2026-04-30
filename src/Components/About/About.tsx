import React from "react";
import Image from "next/image";
import { logo } from "@/assests/Home"; // replace with your logo/certificate images
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-12 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Left Content */}
        <div className="lg:col-span-2 space-y-10">
          {/* Our History */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Our History
            </h2>
            <p className="mb-4">
              TOPFRONT is one of the 20 verticals which comes under the prestigious UTKAL GROUP.  TOPFRONT has emerged into a leading end-to-end service provider for Indian industrial sector, especially Cement, Aluminum, steel and mining industries — delivering solutions from mining and raw material handling to plant O&M and slag recovery. 
            </p>
            <p className="mb-4">
              Founded with a vision to provide world-class staffing and business
              services, Topfront combines technical expertise with strong
              operational execution. Our diverse service portfolio covers{" "}
              <strong>
                Staffing Solutions, Workforce Management, Engineering &
                Industrial Management, Software Solutions
              </strong>{" "}
              and more.
            </p>
<p>
  We uphold the highest standards of quality, safety, and environmental responsibility. 
  <strong>TOPFRONT under UTKAL GROUP</strong> operates a fleet of heavy earthmoving machinery (HEMM) 
  and serves marquee clients including Tata Steel (NINL), Aditya Birla Hindalco, Jai Raj Ispat Ltd, 
  Shyam Mettalics, TRL, Maithan Ispat, Oriental Bottling and many more. 
  With FY 2024–25 combined revenue of INR 12 billion, we are recognized as a trusted partner 
  for critical industrial operations. 
</p>

<p><strong>Specialties:</strong></p>
<ol>
  <li>Mining, Excavation, Drilling, and Crushing</li>
  <li>Bulk Raw Material Handling, Logistics &amp; Transportation</li>
  <li>Operation &amp; Maintenance</li>
</ol>
          </div>

          {/* Quality Policy */}
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4">
              Quality Policy
            </h2>
            <p className="mb-4">
              At Topfront, we follow an integrated framework of Quality,
              Environmental, and Occupational Health & Safety standards. These
              policies ensure project excellence, environmental responsibility,
              and legal compliance.
            </p>
            <p>
              We are committed to minimizing ecological footprints, complying
              with statutory requirements, and delivering client satisfaction
              with sustainability at our core. Our governance principles ensure
              continuous improvement, innovation, and accountability.
            </p>
          </div>

          {/* Certification */}
        
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-10">
          {/* Services Offered */}
      <div>
        <h3 className="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">
          Services Offered
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>
            <Link href="/services/1" className="hover:text-red-600">
              Operations & Maintenance
            </Link>
          </li>
          <li>
            <Link href="/services/2" className="hover:text-red-600">
              Fabrication
            </Link>
          </li>
          <li>
            <Link href="/services/3" className="hover:text-red-600">
              Plant commissioning
            </Link>
          </li>
          <li>
            <Link href="/services/4" className="hover:text-red-600">
              Refurbishing of old plant 
            </Link>
          </li>
          <li>
            <Link href="/services/5" className="hover:text-red-600">
              Shutdown /Captial maintenance 
            </Link>
          </li>
          <li>
            <Link href="/services/6" className="hover:text-red-600">
             	Man power Management
            </Link>
          </li>
                    <li>
            <Link href="/services/7" className="hover:text-red-600">
             Technical audit
            </Link>
          </li>
           <li>
            <Link href="/services/8" className="hover:text-red-600">
             Industrial Training
            </Link>
          </li>
           <li>
            <Link href="/services/9" className="hover:text-red-600">
             Technical Ship Management
            </Link>
          </li>
        </ul>
      </div>

          {/* Who We Are */}
          <div>
            <h3 className="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">
              Who We Are?
            </h3>
            <p className="text-gray-700">
We are the largest Management Solutions provider, associated with leading end-to-end service provider for Indian industrial sector, Facility Management, Green Energy, Utility Services, IT Software, Real Estate, Payroll services, Automobiles, and CSR across PAN India operations. 
            </p>
          </div>

          {/* E-Brochure */}
          <div>
            <h3 className="text-xl font-bold border-b-2 border-red-600 pb-2 mb-4">
              Download Our E-Brochure
            </h3>
                <a href="/Brochure.pdf" download>
            <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
              Download Now
            </button>
                </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
