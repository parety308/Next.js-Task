'use client'

import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/courses', label: 'Courses' },
        { href: '/add-course', label: 'Add Course' },
        { href: '/manage-courses', label: 'Manage Courses' },
        { href: '/about', label: 'About' },
    ]

    return (
        <header className="bg-gray-900 text-white shadow-md">
            <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-4">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <img
                        src="https://i.ibb.co.com/n8CD7NM8/image.png"
                        alt="CourseHub logo"
                        className="w-10 h-10 rounded-full"
                    />
                    <span className="text-2xl font-bold">CourseHub</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} className="hover:text-amber-400">
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Desktop Auth */}
                <div className="hidden md:flex gap-3">
                    <Link href="/login" className="border border-amber-400 px-3 py-1 rounded-lg hover:bg-amber-400 hover:text-black">
                        Login
                    </Link>
                    <Link href="/register" className="bg-amber-400 text-black px-3 py-1 rounded-lg hover:bg-amber-500">
                        Register
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden text-2xl"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-800 flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href}>
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/login" className="border border-amber-400 px-3 py-1 rounded-lg">
                        Login
                    </Link>
                    <Link href="/register" className="bg-amber-400 text-black px-3 py-1 rounded-lg">
                        Register
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar
