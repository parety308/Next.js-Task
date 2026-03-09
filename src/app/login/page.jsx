'use client';

import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('Login attempt:', { email, password });
        form.reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-800 ">
            <div className="bg-gray-900 text-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-100">
                    Login to Your Account
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-300">Email</label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter your email"
                            className="w-full bg-gray-700 border border-gray-600 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-300">Password</label>
                        <input
                            name="password"
                            type="password"
                            placeholder="Enter your password"
                            className="w-full bg-gray-700 border border-gray-600 p-2 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>
                </form>

                <div className="text-center my-4 text-gray-500">OR</div>

                <button className="w-full border border-gray-600 py-2 rounded-lg text-gray-300 hover:bg-gray-700 transition">
                    Continue with Google
                </button>

                <p className="text-center mt-5 text-sm text-gray-400">
                    Don't have an account?{" "}
                    <Link href="/register" className="text-blue-400 font-semibold hover:text-blue-300">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
