"use client";
import Link from "next/link";
import { useCourses } from "../providers/CourseProvider";
import Swal from "sweetalert2";
import PrivateRoute from "@/components/PrivateRoute";

const ManageCourses = () => {
    const { courses: allcourses, deleteCourse } = useCourses()
    const courses = [...allcourses].sort((a, b) => new Date(b.date) - new Date(a.date));
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "This course will be deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteCourse(id);
                Swal.fire(
                    "Deleted!",
                    "Course has been deleted.",
                    "success"
                );
            }
        });
    }

    return (
        <PrivateRoute>
            <div className="max-w-6xl mx-auto px-4 py-10">
                <h1 className="text-3xl font-bold mb-6 text-center text-white">
                    Manage Courses
                </h1>

                <div className="overflow-x-auto">
                    <table className="w-full border border-slate-700 shadow-xl rounded-xl overflow-hidden">
                        <thead className="bg-slate-800 text-slate-200">
                            <tr>
                                <th className="p-3 text-left">Title</th>
                                <th className="p-3">Price</th>
                                <th className="p-3">Priority</th>
                                <th className="p-3">Date</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="bg-slate-900 text-slate-300">
                            {courses.map((course) => (
                                <tr
                                    key={course.id}
                                    className="border-t border-slate-700 text-center hover:bg-slate-800 transition"
                                >
                                    <td className="p-3 text-left">{course.title}</td>
                                    <td className="p-3">${course.price}</td>
                                    <td className="p-3">{course.priority}</td>
                                    <td className="p-3">{course.date}</td>

                                    <td className="p-3 flex justify-center gap-3">
                                        <Link
                                            href={`/courses/${course.id}`}
                                            className="bg-emerald-600 text-white px-3 py-1 rounded-lg hover:bg-emerald-700 transition"
                                        >
                                            View
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(course.id)}
                                            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </div>
            </div>
        </PrivateRoute>
    );
};

export default ManageCourses;