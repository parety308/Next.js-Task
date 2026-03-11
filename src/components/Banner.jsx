'use client'
import { useRouter } from 'next/navigation'

const Banner = () => {
  const router = useRouter()

  return (
    <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-800 rounded-2xl shadow-xl text-center space-y-8 px-8 py-20 mt-10">

      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        Learn Skills That Shape <span className="text-purple-400">Your Future</span>
      </h1>

      <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Explore high quality programming and technology courses.
        Start learning today and boost your career with practical skills.
      </p>

      <div className="flex justify-center gap-4 pt-4 flex-wrap">

        <button
          onClick={() => router.push('/courses')}
          className="bg-purple-400 text-black font-medium px-6 py-3 rounded-lg hover:bg-emerald-500 transition duration-200 shadow-md"
        >
          Browse Courses
        </button>

        <button
          onClick={() => router.push('/add-courses')}
          className="bg-slate-700 text-white font-medium px-6 py-3 rounded-lg hover:bg-emerald-500 transition duration-200 border border-slate-600"
        >
          Add Course
        </button>

      </div>

    </section>
  )
}

export default Banner