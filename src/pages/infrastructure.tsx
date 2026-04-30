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
             We operate a robust resource management system encompassing manpower planning, machinery deployment, material procurement, and workforce mobilization. Backed by a skilled team of 700+ professionals—including engineers, technicians, and project managers—we ensure timely project execution with high operational efficiency and precision.

            </p>
            <p className="text-gray-700 leading-relaxed mt-3">
             Our infrastructure is strengthened by a fleet of advanced equipment, including excavators, dozers, cranes, rock breakers, loaders, and other heavy machinery. This enables us to deliver prompt, reliable, and high-quality services across diverse industrial projects.
            </p>
          </div>

          {/* Equipment Grid */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">For Prompt & Efficient Services</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {infrastructureData.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-3"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={200}
                    height={150}
                    className="object-fill"
                  />
                  {/* <p className="mt-2 text-sm font-medium text-gray-700">{item.title}</p> */}
                </div>
              ))}
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
                <Link href="/services/1">Operations & Maintenance</Link>
              </li>
              <li>
                <Link href="/services/2">Fabrication</Link>
              </li>
              <li>
                <Link href="/services/3">Plant commissioning</Link>
              </li>
              <li>
                <Link href="/services/4">Refurbishing of old plant</Link>
              </li>
              <li>
                <Link href="/services/5">Shutdown / Capital maintenance</Link>
              </li>
              <li>
                <Link href="/services/6">Man power Management</Link>
              </li>
              <li>
                <Link href="/services/7">Technical audit</Link>
              </li>
                           <li>
                <Link href="/services/8">Industrial Training</Link>
              </li>
                              <li>
                <Link href="/services/9">Technical Ship Management</Link>
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
