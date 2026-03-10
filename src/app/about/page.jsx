import React from "react";

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-6 py-12 text-slate-200 mt-10">

            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 text-white">
                    About CourseHub
                </h1>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    CourseHub is a modern learning platform designed to help students
                    improve their skills through high‑quality online courses. Our goal
                    is to make education accessible, practical, and career‑focused.
                </p>
            </div>

            <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <img
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                    alt="learning"
                    className="rounded-xl shadow-xl"
                />

                <div className="mt-5">
                    <h2 className="text-2xl font-semibold mb-4 text-white mt-5">
                        Learn Modern Skills
                    </h2>

                    <p className="text-slate-400 mb-4">
                        CourseHub provides structured courses designed by experienced
                        instructors. Students can explore different technology topics
                        including web development, backend engineering, UI/UX design,
                        and database systems.
                    </p>

                    <p className="text-slate-400">
                        Our platform focuses on practical learning so students can
                        apply their knowledge in real‑world projects.
                    </p>
                </div>
            </section>

            <section className="my-5">
                <h2 className="text-3xl font-bold text-center p-4 text-white">
                    Why Choose Our Platform
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-700 transition">
                        <h3 className="font-semibold text-lg mb-2 text-white">
                            Quality Courses
                        </h3>
                        <p className="text-slate-400">
                            Carefully designed courses covering modern technologies.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-700 transition ">
                        <h3 className="font-semibold text-lg mb-2 text-white">
                            Expert Instructors
                        </h3>
                        <p className="text-slate-400">
                            Learn from professionals with real industry experience.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-700 transition">
                        <h3 className="font-semibold text-lg mb-2 text-white">
                            Flexible Learning
                        </h3>
                        <p className="text-slate-400">
                            Study anytime at your own pace from anywhere.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:bg-slate-700 transition">
                        <h3 className="font-semibold text-lg mb-2 text-white">
                            Practical Projects
                        </h3>
                        <p className="text-slate-400">
                            Build real projects to strengthen your portfolio.
                        </p>
                    </div>

                </div>
            </section>
            <section className="bg-slate-800 border border-slate-700 rounded-xl text-center p-4">
                <h2 className="text-3xl font-bold mb-4 text-white">
                    Our Mission
                </h2>

                <p className="text-slate-400 max-w-3xl mx-auto">
                    Our mission is to empower students with the knowledge and skills
                    required to succeed in the modern technology industry. We aim to
                    provide accessible learning resources that inspire innovation,
                    creativity, and continuous growth.
                </p>
            </section>

        </div>
    );
};

export default About;