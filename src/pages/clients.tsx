import MainLayouts from "@/Layouts/MainLayouts";
import Image from "next/image";
import { clientArr } from "@/utils/Home"; // your array of logos
import Link from "next/link";
import Commonbreacrumb from "@/Components/Common/Commonbreadcrumb";
import { aboutgroup } from "@/assests/About";

const data = {
  cont1: "CLIENT WE SERVE",
  cont2: "",
};

export default function Clients() {
  return (
    <MainLayouts>
        <Commonbreacrumb data={data} image={aboutgroup.src}/>
      {/* Hero */}
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">CLIENTS</span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-16 py-16">
        {/* Clients Grid */}
        <div className="w-full lg:w-3/4">
          <h2 className="text-2xl font-semibold mb-6">Our Clients</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {clientArr.map((client) => (
              <div
                key={client.id}
                className="flex items-center justify-center p-4 bg-white shadow-sm rounded"
              >
                <Image
                  src={client.img.src}
                  alt=''
                  width={150}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-bold border-b-2 border-red-600 pb-2 mb-4">
              Services Offered
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <Link href="/services/1" className="hover:text-red-600">Operations & Maintenance</Link>
              </li>
              <li>
                <Link href="/services/2" className="hover:text-red-600">Fabrication</Link>
              </li>
              <li>
                <Link href="/services/3" className="hover:text-red-600">Plant commissioning</Link>
              </li>
              <li>
                <Link href="/services/4" className="hover:text-red-600">Refurbishing of old plant</Link>
              </li>
              <li>
                <Link href="/services/5" className="hover:text-red-600">Shutdown maintenance</Link>
              </li>
              <li>
                <Link href="/services/6" className="hover:text-red-600">Man power Management</Link>
              </li>
              <li>
                <Link href="/services/7" className="hover:text-red-600">Technical audit</Link>
              </li>
              <li>
                <Link href="/services/8" className="hover:text-red-600">Industrial Training</Link>
              </li>
              <li>
                <Link href="/services/9" className="hover:text-red-600">Technical Ship Management</Link>
              </li>
            </ul>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-bold border-b-2 border-red-600 pb-2 mb-4">
              Who We Are?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
We are the largest Management Solutions provider, associated with leading end-to-end service provider for Indian industrial sector, Facility Management, Green Energy, Utility Services, IT Software, Real Estate, Payroll services, Automobiles, and CSR across PAN India operations. 
            </p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 text-center">
            <h3 className="text-lg font-bold border-b-2 border-red-600 pb-2 mb-4">
              Download Our E-Brochure
            </h3>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
              Download Now
            </button>
          </div>
        </aside>
      </div>
    </MainLayouts>
  );
}
