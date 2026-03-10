import React from "react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Careers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Blog
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Courses
                        </h3>
                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <a href="#features" className="hover:text-purple-400 transition">
                                    Features
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Documentation
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3 text-slate-400">
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-purple-400 transition">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold text-lg mb-4">
                            Follow Us
                        </h3>
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-purple-400 transition">
                                Twitter
                            </a>
                            <a href="#" className="hover:text-purple-400 transition">
                                LinkedIn
                            </a>
                            <a href="#" className="hover:text-purple-400 transition">
                                GitHub
                            </a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-slate-800 mt-12 pt-6 text-center text-slate-500 text-sm">
                    © {new Date().getFullYear()} CourseHub. All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;