'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/add-courses', label: 'Add Course' },
        { href: '/manage-courses', label: 'Manage Courses' },
        { href: '/about-us', label: 'About' },
    ]

    return (
        <header className="bg-slate-900/90 backdrop-blur border-b border-slate-800 sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4">
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="https://i.ibb.co.com/n8CD7NM8/image.png"
                        alt="CourseHub logo"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <span className="text-xl font-semibold tracking-wide text-white">
                        CourseHub
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-slate-300 hover:text-purple-400 transition duration-200 font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <Link
                        href="/login"
                        className="px-4 py-2 rounded-lg border border-purple-400 text-purple-400 hover:bg-emerald-400 hover:text-black transition"
                    >
                        Login
                    </Link>

                    <Link
                        href="/register"
                        className="px-4 py-2 rounded-lg bg-purple-400 text-black hover:bg-emerald-500 transition font-medium"
                    >
                        Register
                    </Link>
                </div>

                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-white"
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-slate-900 border-t border-slate-800 flex flex-col items-center gap-5 py-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-slate-300 hover:text-purple-400 text-lg"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <div className="flex gap-3 pt-2">
                        <Link
                            href="/login"
                            className="px-4 py-2 border border-purple-400 text-purple-400 rounded-lg hover:bg-emerald-500"
                        >
                            Login
                        </Link>

                        <Link
                            href="/register"
                            className="px-4 py-2 bg-purple-400 text-black rounded-lg hover:bg-emerald-500"
                        >
                            Register
                        </Link>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Navbar