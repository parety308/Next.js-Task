"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CourseDetails = ({ params }) => {
    const [courses, setCourses] = useState([]);
    const router = useRouter();
    const { id } = React.use(params)

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    const course = courses.find((c) => c.id == id);

    if (!course) {
        return (
            <p className="text-center mt-10 text-slate-400">
                Loading...
            </p>
        );
    }

    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            <button
                onClick={() => router.back()}
                className="mb-6 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition"
            >
                ← Back
            </button>

            <div className="bg-slate-800 border border-slate-700 shadow-xl rounded-2xl overflow-hidden">

                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-96 object-cover"
                />

                <div className="p-8">

                    <h1 className="text-3xl font-bold text-white mb-4">
                        {course.title}
                    </h1>

                    <p className="text-slate-300 mb-6 leading-relaxed">
                        {course.description}
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 text-slate-300">

                        <p className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                            <span className="font-semibold text-white">Price:</span> ${course.price}
                        </p>

                        <p className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                            <span className="font-semibold text-white">Date:</span> {course.date}
                        </p>

                        <p className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                            <span className="font-semibold text-white">Priority:</span> {course.priority}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseDetails;