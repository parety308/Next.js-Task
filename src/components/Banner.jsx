'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
  const router = useRouter();

  return (
    <section className="bg-gradient-to-r from-sky-400 to-sky-200 rounded-xl text-center space-y-6 max-w-7xl mx-auto px-10 py-16 mt-6">

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Learn Skills That Shape Your Future
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Explore high quality programming and technology courses.
        Start learning today and boost your career with practical skills.
      </p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">

        <button
          onClick={() => router.push('/courses')}
          className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-900 transition"
        >
          Browse Courses
        </button>

        <button
          onClick={() => router.push('/add-course')}
          className="bg-amber-400 text-black px-6 py-2 rounded-lg hover:bg-amber-500 transition"
        >
          Add Course
        </button>

      </div>

    </section>
  );
};

export default Banner;