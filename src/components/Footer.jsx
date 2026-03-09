import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                            <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                            <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
                        </ul>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Product</h3>
                        <ul className="space-y-2">
                            <li><a href="#features" className="hover:text-white transition">Features</a></li>
                            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                            <li><a href="#docs" className="hover:text-white transition">Documentation</a></li>
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#privacy" className="hover:text-white transition">Privacy Policy</a></li>
                            <li><a href="#terms" className="hover:text-white transition">Terms of Service</a></li>
                            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                        </ul>
                    </div>

                    {/* Social Icons */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#twitter" className="hover:text-white transition">Twitter</a>
                            <a href="#linkedin" className="hover:text-white transition">LinkedIn</a>
                            <a href="#github" className="hover:text-white transition">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 pt-8">
                    <p className="text-center text-gray-400">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;