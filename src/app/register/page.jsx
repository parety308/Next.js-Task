'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const form = event.target;
            const formData = {
                name: form.name.value,
                email: form.email.value,
                password: form.password.value
            };

            console.log('User registered:', formData);
            form.reset();
        } catch (err) {
            setError(err.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 ">
            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
                    Register a New Account
                </h2>
                {error && <div className="bg-red-600 p-3 rounded mb-4 text-sm">{error}</div>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium">Name</label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Enter your name"
                            required
                            className="w-full bg-gray-800 border border-gray-700 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            required
                            className="w-full bg-gray-800 border border-gray-700 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            required
                            className="w-full bg-gray-800 border border-gray-700 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-600 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </button>
                </form>

                <p className="text-center mt-5 text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-400 font-semibold hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
