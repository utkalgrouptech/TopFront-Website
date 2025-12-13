import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { sliderArr, serviceArr, clientArr } from "@/utils/Home";
import Image from "next/image";
import { cmd } from "@/assests/Home";

// Slider settings
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: true,
  autoplay: true,
  autoplaySpeed: 5000,
};

// Vision, Mission & Core Values data
const companyValues = {
  vision: "To be a globally recognized leader in sustainable infrastructure solutions, driving progress through innovation and excellence.",
  mission: "To deliver exceptional value to our clients through quality construction, timely execution, and sustainable practices while fostering a culture of safety, integrity, and continuous improvement.",
  coreValues: [
    {
      title: "Integrity",
      description: "We conduct our business with honesty, transparency, and ethical practices."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, continuously improving our processes and outcomes."
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to meet evolving challenges."
    },
    {
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices that benefit communities and future generations."
    },
    {
      title: "Collaboration",
      description: "We work together with clients, partners, and teams to achieve shared success."
    }
  ]
};

// Additional sections data
const statsData = [
  { number: "500+", label: "Projects Completed" },
  { number: "25+", label: "Years of Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "50+", label: "Expert Team Members" }
];

const additionalServices = [
  {
    title: "Project Management",
    description: "End-to-end project management services ensuring timely and within-budget completion.",
    icon: "📊"
  },
  {
    title: "Consulting",
    description: "Expert consulting services to help you make informed decisions about your projects.",
    icon: "💼"
  },
  {
    title: "Maintenance",
    description: "Comprehensive maintenance services to keep your infrastructure in optimal condition.",
    icon: "🔧"
  }
];

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

  const router = useRouter();

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <section className="w-full h-full overflow-hidden">
        <Slider {...settings}>
          {sliderArr.map((item, index) => (
            <div key={index} className="relative w-full lg:h-screen h-96">
              <img
                src={item.img.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                <div
                  className="main-container text-left text-white"
                  data-aos="flip-up"
                >
                  <h1 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold mb-4 mt-3">
                    {item.title}
                  </h1>
                  <p className="font-semibold md:text-lg leading-loose mb-6 w-full sm:w-2/3 md:w-1/2">
                    {item.paragraph}
                  </p>
                  <Link href="/services">
                    <button className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-orange-600 transition duration-300">
                      Know More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* about section */}
      <section className="w-full py-20 bg-gray-50 main-container fade-in">
        <div className="mx-auto px-4 sm:px-6 lg:px-20">

          {/* PAGE TITLE */}
          <div className="text-center mb-20 fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              About Us
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-green-600 rounded-full"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Delivering excellence in industrial solutions across India
            </p>
          </div>

          {/* DIRECTOR DESK SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

            {/* IMAGE LEFT */}
            <div className="relative flex justify-center lg:justify-start zoom-in">
              <div className="w-80 h-80 relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={cmd.src}
                  alt="Managing Director"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative border */}
              <div className="absolute -z-10 -bottom-5 -right-5 w-80 h-80 border-2 border-green-600 rounded-xl"></div>
            </div>

            {/* TEXT RIGHT */}
            <div className="space-y-6 fade-up delay-1">
              <h3 className="text-3xl font-bold text-gray-900">Director’s Desk</h3>

              <p className="text-lg text-gray-700 leading-relaxed">
                I am proud to introduce <span className="font-bold text-green-600">TOPFRONT</span>, 
                one of the fastest-growing verticals of the 
                <span className="font-semibold text-gray-900"> UTKAL GROUP</span>. 
                Guided by innovation, discipline, and excellence, we continue to transform India’s 
                industrial sector with world-class solutions.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our operations span across critical industries — steel, power, cement, aluminum, 
                and refineries — where we have built a reputation for reliability, precision, 
                and unmatched work ethics.
              </p>
              
              <p className="font-semibold text-gray-900">
                — Mr. Suresh Mishra, Managing Director
              </p>
            </div>
          </div>

          {/* MAIN ABOUT SECTION BELOW DIRECTOR DESK */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* LEFT TEXT BLOCK */}
            <div className="space-y-6 fade-up">

              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="font-bold text-green-600">TOPFRONT</span>, a proud vertical of the 
                <span className="font-semibold text-gray-900"> UTKAL GROUP</span> with a net worth of 
                <span className="font-semibold text-gray-900"> ₹12 billion</span>, 
                is one of India’s most trusted industrial service providers.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in{" "}
                <span className="font-semibold text-gray-900">Operations & Maintenance (O&M)</span>{" "}
                for steel plants, cement plants, power units, refineries, aluminum industries,
                and large manufacturing ecosystems.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our expertise also includes{" "}
                <span className="font-semibold text-gray-900">
                  Fabrication & Erection, Plant & Equipment Commissioning, Refurbishment, 
                  Shutdown Maintenance, and Technical Audits
                </span>.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Through strong manpower management, top-tier staffing, HR outsourcing, payroll, 
                compliance, and talent development, we ensure smooth and effective operations for 
                industries of all sizes.
              </p>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center bg-white p-6 rounded-xl shadow fade-up delay-1">
                  <p className="text-4xl font-bold text-green-600">12+</p>
                  <p className="text-gray-600">Years Experience</p>
                </div>
                <div className="text-center bg-white p-6 rounded-xl shadow fade-up delay-2">
                  <p className="text-4xl font-bold text-green-600">500+</p>
                  <p className="text-gray-600">Projects Completed</p>
                </div>
              </div> */}
            </div>

            {/* RIGHT PROFILE CARD */}
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto lg:mx-0 fade-up delay-1">
              <h3 className="text-3xl font-bold text-gray-900 text-center">Our Leadership</h3>

              <p className="mt-4 text-gray-700 text-center leading-relaxed">
                Under the strategic guidance of <strong>Mr. Suresh Mishra</strong>, TOPFRONT has emerged 
                as a powerhouse of workforce excellence, operational efficiency, and customer 
                satisfaction across India.
              </p>

              <p className="mt-4 text-gray-600 italic text-center">
                “Our mission is to deliver measurable value while prioritizing safety, innovation, 
                and long-term partnerships.”
              </p>

              {/* Leadership Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">12+</p>
                  <p className="text-gray-600 text-sm">Years Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">500+</p>
                  <p className="text-gray-600 text-sm">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Custom Animation Styles */}
        <style>
          {`
            .fade-in {
              animation: fadeIn 1.2s ease-out forwards;
              opacity: 0;
            }

            .fade-up {
              opacity: 0;
              transform: translateY(20px);
              animation: fadeUp 1s ease-out forwards;
            }

            .zoom-in {
              opacity: 0;
              transform: scale(0.95);
              animation: zoomIn 1.1s ease-out forwards;
            }

            .delay-1 { animation-delay: 0.3s; }
            .delay-2 { animation-delay: 0.6s; }

            @keyframes fadeIn {
              to { opacity: 1; }
            }

            @keyframes fadeUp {
              to {
                opacity: 1;
                transform: translateY(0px);
              }
            }

            @keyframes zoomIn {
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
          `}
        </style>
      </section>

            {/* Vision, Mission & Core Values Section */}
      <section className="w-full py-16 main-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Vision, Mission & Values</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-blue-50 p-8 rounded-lg shadow-md" data-aos="fade-right">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-gray-700">{companyValues.vision}</p>
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg shadow-md" data-aos="fade-left">
            <h3 className="text-2xl font-bold text-green-800 mb-4">Our Mission</h3>
            <p className="text-gray-700">{companyValues.mission}</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyValues.coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Services Section – Equal Height Cards */}
      <section className="w-full py-24 bg-[#0f172a] relative overflow-hidden">
        
        {/* Decorative background */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-green-400/10 rounded-full blur-3xl"></div>

        <div className="main-container relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-1 sticky top-32">
            <h2 className="text-4xl font-bold text-white leading-tight">
              Our <span className="text-green-400">Services</span>
            </h2>
            <div className="w-20 h-1 bg-green-500 mt-4"></div>
            <p className="text-gray-300 mt-6 leading-relaxed">
              End-to-end industrial solutions focused on safety, precision, and
              long-term value creation.
            </p>

            <button
              onClick={() => router.push("/services")}
              className="mt-10 px-7 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              View All Services →
            </button>
          </div>

          {/* RIGHT SLIDER */}
          <div className="lg:col-span-2">
            <Slider
              dots={false}
              infinite
              speed={600}
              slidesToShow={2}
              slidesToScroll={1}
              autoplay
              autoplaySpeed={4500}
              arrows
              responsive={[
                { breakpoint: 1024, settings: { slidesToShow: 1 } }
              ]}
              className="services-modern-slider"
            >
              {serviceArr.map((service, index) => (
                <div key={service.id} className="px-4 h-full">
                  {/* CARD */}
                  <div className="group relative h-[420px] flex flex-col rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 hover:border-green-400/40 transition-all duration-300">

                    {/* Number */}
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold z-20">
                      {index + 1}
                    </div>

                    {/* Image */}
                    <div className="relative h-52 shrink-0 overflow-hidden">
                      <img
                        src={service.img.src}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-white mb-4">
                        {service.title}
                      </h3>

                      <ul className="space-y-2 text-gray-300 text-sm flex-grow">
                        {service.description.slice(0, 3).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 mt-2 rounded-full bg-green-400"></span>
                            {point}
                          </li>
                        ))}
                      </ul>

                      {/* Button pinned bottom */}
                      <button
                        onClick={() => router.push("/services")}
                        className="mt-auto pt-4 text-green-400 font-semibold inline-flex items-center gap-2 hover:text-green-300 transition"
                      >
                        Know More →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Slider fixes */}
        <style jsx global>{`
          .services-modern-slider .slick-slide > div {
            height: 100%;
          }

          .services-modern-slider .slick-list {
            padding-bottom: 10px;
          }

          .services-modern-slider .slick-prev,
          .services-modern-slider .slick-next {
            width: 44px;
            height: 44px;
            border-radius: 9999px;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(6px);
            z-index: 20;
          }

          .services-modern-slider .slick-prev:before,
          .services-modern-slider .slick-next:before {
            color: white;
            font-size: 18px;
          }

          .services-modern-slider .slick-prev:hover,
          .services-modern-slider .slick-next:hover {
            background: #10b981;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white rounded-lg shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="w-full bg-gray-100 py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Additional Services</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We offer a comprehensive range of services to meet all your infrastructure needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <button className="mt-6 text-green-600 font-semibold hover:text-green-700 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="w-full py-16">
        <div className="main-container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">Our Clients</h2>
            <div className="w-20 h-1 bg-green-500 mx-auto mt-2"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We are proud to have worked with some of the most respected names in the industry.
            </p>
          </div>
          
          <div className="overflow-hidden mb-12">
            <Slider {...{
              infinite: true,
              slidesToShow: 6,
              slidesToScroll: 1,
              autoplay: true,
              speed: 1000,
              autoplaySpeed: 4000,
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  },
                },
              ],
            }}>
              {clientArr.map((client) => (
                <div key={client.id} className="flex justify-center px-4">
                  <img 
                    src={client.img.src} 
                    alt={`client-${client.id}`} 
                    className="w-32 h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300" 
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}