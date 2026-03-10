'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Courses = () => {
    const [search, setSearch] = useState("");
    const [courseData, setCourseData] = useState([]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        fetch("/data.json")
            .then(res => res.json())
            .then(data => setCourseData(data));
    }, []);


    return (
        <div className="max-w-7xl mx-auto px-6 py-10">

            {/* Page Title */}
            <h1 className="text-4xl font-bold mb-4">Our Courses</h1>

            {/* Description */}
            <p className="text-gray-600 mb-6">
                Explore our wide range of courses designed to help you build modern development skills.
            </p>

            {/* Search */}
            <input
                type="text"
                placeholder="Search courses..."
                className="border p-2 rounded w-full mb-8"
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                {isClient && courseData.filter(course =>
                    course.title.toLowerCase().includes(search.toLowerCase())
                ).map(course => (
                    <div
                        key={course.id}
                        className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                    >
                        <img
                            src={course.image}
                            alt={course.title}
                            className="h-48 w-full object-cover"
                        />

                        <div className="p-4">
                            <h2 className="text-xl font-semibold">{course.title}</h2>

                            <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                                {course.shortDescription}
                            </p>

                            <p className="mt-3 font-semibold">${course.price}</p>

                            <Link
                                href={`/courses/${course.id}`}
                                className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Details
                            </Link>
                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Courses;