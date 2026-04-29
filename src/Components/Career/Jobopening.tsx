'use client'

import { useState } from 'react'

interface JobOpening {
  title: string
  location: string
  experience: string
  description: string
}

const jobOpenings: JobOpening[] = [
  {
    
]

export default function Jobopening() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-green-600 mb-12">Current Job Openings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 w-full h-full overflow-hidden">
            <h3 className="text-2xl font-semibold text-green-600">{job.title}</h3>
            <p className="text-gray-600 mt-2">{job.location}</p>
            <p className="text-gray-500 text-sm mt-1">{job.experience} of experience required</p>
            <p className="text-gray-700 mt-4">{job.description}</p>

            <div className="mt-6">
              <button
                onClick={() => alert(`Applied for ${job.title}`)}
                className="px-6 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
