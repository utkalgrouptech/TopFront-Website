import MainLayouts from "@/Layouts/MainLayouts";
import Image from "next/image";
import { infrastructureData } from "@/utils/Home";
import Link from "next/link";
import Commonbreacrumb from "@/Components/Common/Commonbreadcrumb";
import { aboutgroup } from "@/assests/About";

const data = {
cont1: "OUR INFRASTRUCTURE",
  cont2: "",
};

export default function Infrastructure() {
  return (
    <MainLayouts>
       <Commonbreacrumb data={data} image={aboutgroup.src}/>

      {/* Hero */}
      <div className="bg-gray-100 py-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          OUR <span className="text-red-600">INFRASTRUCTURE</span>
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-16 py-16">
        {/* Left Content */}
        <div className="w-full lg:w-3/4 space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Resource Management</h2>
            <p className="text-gray-700 leading-relaxed">
           
We operate a robust and integrated resource management system encompassing manpower planning, machinery deployment, material procurement, and efficient workforce mobilization.

Backed by a highly skilled team of 1000+ professionals—including engineers, technicians, and project managers, we ensure timely project execution with precision, efficiency, and operational excellence. Our industry experts bring significant value through their deep domain knowledge, technical expertise, and hands-on experience.

            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
            Our infrastructure is further strengthened by a fleet of advanced equipment, including excavators, dozers, cranes, rock breakers, loaders, and other heavy earthmoving machinery (HEMM).
            This enables us to deliver prompt, reliable, and high-quality services across diverse and large-scale industrial projects.
            </p>
          </div>

          {/* Equipment Grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">For Prompt & Efficient Services</h2>
            <div className="flex justify-center">
  <div className="w-full max-w-4xl">
    <Image
      src={infrastructureData[0].image}
      alt="Infrastructure Highlight"
      width={1200}
      height={700}
      className="rounded-lg object-cover w-full h-auto"
    />
  </div>
</div>
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
                <Link href="/services/5" className="hover:text-red-600">Shutdown / Capital maintenance</Link>
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
             <a href="/Brochure.pdf" download>
            <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded">
              Download Now
            </button>
             </a>
          </div>
        </aside>
      </div>
    </MainLayouts>
  );
}
