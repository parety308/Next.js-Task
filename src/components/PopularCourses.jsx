'use client'
import { useCourses } from "@/app/providers/CourseProvider";
import Link from "next/link";

const PopularCourses = () => {
    const { courses: coursesData } = useCourses();
    const courses = coursesData.sort((a, b) => b.priority - a.priority).slice(0, 4);
    return (
        <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
            <div className="flex justify-between items-center mb-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Popular Courses
                    </h2>
                    <p className="text-slate-400 mt-2">
                        Learn the most in-demand programming skills
                    </p>
                </div>

                <Link
                    href="/courses"
                    className="hidden md:block text-purple-400 hover:text-purple-300"
                >
                    View All →
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="group bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 transition duration-300"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                            />

                            <span className="absolute top-3 left-3 bg-purple-500 text-xs px-3 py-1 rounded-full text-white">
                                {course.priority}
                            </span>

                            <span className="absolute top-3 right-3 bg-black/70 text-xs px-3 py-1 rounded-full text-white">
                                ${course.price}
                            </span>
                        </div>

                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition">
                                {course.title}
                            </h3>

                            <p className="text-slate-400 text-sm mt-2">
                                {course.shortDescription}
                            </p>

                            <Link
                                href={`/courses/${course.id}`}
                                className="mt-5 inline-block w-full text-center bg-purple-500 hover:bg-purple-600 text-white font-medium px-4 py-2 rounded-lg transition"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PopularCourses;