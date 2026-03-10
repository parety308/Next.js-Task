'use client'
import React, { useState } from 'react'
import Link from 'next/link'

const Register = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const form = event.target
      const formData = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
      }

      console.log('User registered:', formData)
      form.reset()
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="w-full max-w-md bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-8 text-white">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Your Account
        </h2>

        {error && (
          <div className="bg-red-600 text-sm p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-5">

          <div>
            <label className="block mb-1 text-sm font-medium text-slate-300">
              Name
            </label>
            <input
              name="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full bg-slate-800 border border-slate-600 px-3 py-2 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-slate-800 border border-slate-600 px-3 py-2 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-slate-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              className="w-full bg-slate-800 border border-slate-600 px-3 py-2 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-emerald-600 py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold disabled:opacity-50"
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>

        </form>

        <p className="text-center mt-6 text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-emerald-400 font-semibold hover:text-emerald-300"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}

export default Register