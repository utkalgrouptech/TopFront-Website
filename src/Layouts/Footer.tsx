import React from "react";
import Image from "next/image";
import { flogo, logo } from "@/assests/Home";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${logo.src})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 px-5 md:px-10 lg:px-20 py-12">
        {/* Top Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Logo Section */}
          <div>
            {/* <div className="mb-4">
              <Image
                src={flogo.src}
                alt="Topfront Pvt. Ltd. Logo"
                width={120}
                height={40}
              />
            </div> */}
            <h3 className="text-lg font-semibold mb-4">Topfront Pvt.Ltd.</h3>
            <p className="text-sm leading-relaxed">
              Arya Surya Enclave, Plot No- K5/475, Khata No 95/937, Fourth
              Floor, Mouza-Subudhi Pur, Kalinga Vihar, Patrapada, Bhuabneswar,
              Dist- Khurda, Odisha, India-751019.
            </p>
          </div>

          {/* Staffing Business Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              Staffing Business Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:underline">
                  Staffing Solution
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Manpower Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Workforce Management
                </Link>
              </li>
            </ul>
          </div>

          {/* TopFront Business Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              TopFront Business Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="hover:underline">
                  Engineering and Industrial Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Industrial and Asset Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Software Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/aboutus" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-green-600 pt-6 text-center">
          <p className="text-sm sm:text-base">
            © 2025 Topfront Pvt.Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
