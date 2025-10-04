'use client';

import { team1, team10, team2, team3, team4, team5, team6, team7, team8, team9 } from '@/assests/About';
import { LinkedIn } from '@mui/icons-material';
import Link from 'next/link';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Mr.Suresh Mishra',
    role: 'CMD',
    image: team1,
    company: '',
    linkedIn: '#',
  },
  {
    name: 'Mrs.Swayanshree Mishra',
    role: 'Director',
    image: team9,
    company: 'TopFront',
    linkedIn: '#',
  },
  // {
  //   name: 'LTP Narayan',
  //   role: 'Director',
  //   image: team10,
  //   company: 'TopFront',
  //   linkedIn: '#',
  // },
  {
    name: 'Mr.Niranjan Mishra',
    role: 'Director',
    image: team6,
    company: 'TopFront',
    linkedIn: '#',
  },
  {
    name: 'Mr.Bir Binod Singh',
    role: 'VP',
    image: team8,
    company: 'TopFront',
    linkedIn: '#',
  },
  // {
  //   name: 'Priyabrata Mishra',
  //   role: 'Enterprise Director',
  //   image: team2,
  //   company: 'TopFront',
  //   linkedIn: '#',
  // },
  {
    name: 'Mr.Dusmanta Kumar Nayak',
    role: 'Hr Head',
    image: team7,
    company: 'TopFront',
    linkedIn: '#',
  },
  // {
  //   name: 'Himanshu Mohapatra',
  //   role: 'Branch Head',
  //   image: team3,
  //   company: 'Utkal Group',
  //   linkedIn: '#',
  // },
  // {
  //   name: 'Malaya Kumar Rath',
  //   role: 'CTO',
  //   image: team4,
  //   company: 'Utkal Group',
  //   linkedIn: '#',
  // },
];

export default function OurTeam() {
  return (
    <div className="min-h-screen py-16 px-4 bg-gradient-to-br from-green-400 to-green-700">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16 tracking-wide">
          OUR LEADERSHIP TEAM
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-green-600 to-gray-700 text-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative w-40 h-40 mb-4">
                  <Image
                    src={member.image.src}
                    alt={member.name}
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-green-500 object-cover"
                  />
                  <Link
                    href={member.linkedIn}
                    className="w-7 h-7 absolute top-5 -right-1 bg-blue-50 hover:bg-blue-600 p-2 rounded-md  transition-colors flex justify-center items-center"
                  >
                    <LinkedIn className="w-6 h-6 text-blue-700 hover:text-white" />
                  </Link>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{member.name}</h3>
                  <p className="text-green-200 text-lg">{member.role}</p>
                  {member.company && (
                    <p className="text-sm text-green-300 mt-1 italic">{member.company}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}