import { useRouter } from 'next/router';
import { servicesData } from '@/utils/Service';
import MainLayouts from '@/Layouts/MainLayouts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import Image from 'next/image';

export default function ServiceDetail() {
  const { query } = useRouter();
  const serviceId = Number(query.id);
  const service = servicesData.find((s) => s.id === serviceId);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);
if (!service) return <p className="p-10 text-center text-red-500">Service not found!</p>;
  return (
    <MainLayouts>
      {/* Hero Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={service.image.src}
          alt={service.title}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white">{service.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-10 px-6 md:px-16 py-16">
        {/* Left Content */}
        <div className="w-full lg:w-3/4 space-y-6" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold">{service.details.heading}</h2>

          {service.details.mainContent.map((text, idx) => (
            <p key={idx} className="text-gray-700 leading-relaxed">{text}</p>
          ))}

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {service.details.features.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 mt-2">{feature.content}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
             <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">
    {service.id === 8 ? 'Technology-Enabled Learning:' : 'Why Choose Us?'}
  </h2>

  <ul className="space-y-3">
    {service.details.whyChooseUs.map((reason, idx) => (
      <li key={idx} className="flex items-start">
        <span className="text-green-600 text-xl mr-2">✔</span>
        <span className="text-gray-700">{reason}</span>
      </li>
    ))}
  </ul>
                {/* Add this for paragraph */}
  {service.details.paragraph && (
    <p className="text-gray-700 leading-relaxed mt-6">
      {service.details.paragraph}
    </p>
  )}
</div>

          {/* Checklist Section */}
   {service.details.checklist && service.id !== 9 && (
  <div className="mt-10">
    <h2 className="text-2xl font-bold mb-4">
      {service.id === 8 ? 'Programme Outcomes:' : 'Our Checklist'}
    </h2>

    <p className="text-gray-700 mb-4">
      {service.details.checklist.description}
    </p>

    <ul className="space-y-3">
      {service.details.checklist.items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <span className="text-red-600 text-xl mr-2">✔</span>
          <span className="text-gray-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
)}
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 space-y-8">
          {/* Services Offered */}
          <div className="bg-white shadow-md rounded-lg p-5" data-aos="fade-left">
            <h3 className="text-lg font-bold border-b-2 border-red-600 pb-2 mb-4">
              Services Offered
            </h3>
            <ul className="space-y-2 text-gray-700">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a
                    href={`/services/${s.id}`}
                    className={`block text-sm font-medium hover:text-red-600 ${
                      s.id === serviceId ? 'text-red-600' : ''
                    }`}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Are */}
          <div className="bg-white shadow-md rounded-lg p-5">
            <h3 className="text-lg font-bold border-b-2 border-red-600 pb-2 mb-4">
              Who We Are?
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Topfront Pvt. Ltd. was founded with a mission to provide reliable staffing and
              business services across industries. Backed by a skilled workforce and industry
              expertise, we deliver innovative, sustainable, and scalable solutions for modern
              enterprises.
            </p>
          </div>

          {/* E-Brochure */}
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
