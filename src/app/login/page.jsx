"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCourses } from "../providers/CourseProvider";

const LoginPage = () => {
  const { signIn, signInGoogle, user } = useCourses();
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirect = searchParams.get("redirect") || "/";
  const [error, setError] = useState("");

//   useEffect(() => {
    // if (user) {
    //   router.push("/");
    // }
//   }, [user, router]);

  const handleLogin = (event) => {
    event.preventDefault();
    setError("");

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        // console.log(res.user);
        form.reset();
        router.push(redirect);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleGoogleLogin = () => {
    setError("");

    signInGoogle()
      .then(() => {
        router.push(redirect);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className="flex justify-center items-center py-20 px-4">
      <div className="bg-slate-800 text-white p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-700">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>

        {error && (
          <p className="text-red-400 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Email
            </label>

            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-700 border border-slate-600 px-3 py-2 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-slate-300">
              Password
            </label>

            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full bg-slate-700 border border-slate-600 px-3 py-2 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-400 text-black py-2 rounded-lg font-medium hover:bg-purple-500 transition"
          >
            Login
          </button>
        </form>

        <div className="text-center my-5 text-slate-500 text-sm">OR</div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-slate-600 py-2 rounded-lg text-slate-300 hover:bg-slate-700 transition"
        >
          Continue with Google
        </button>

        <p className="text-center mt-6 text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="text-purple-400 font-semibold hover:text-purple-300"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;