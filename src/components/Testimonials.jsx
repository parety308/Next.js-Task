import React from "react";

const Testimonials = () => {
  const reviews = [
    { name: "John", text: "This platform helped me learn React easily!" },
    { name: "Sara", text: "Great courses and instructors." },
    { name: "Mike", text: "Highly recommended for beginners." },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Student Testimonials
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          Hear from our students who have transformed their careers
          through our high quality courses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900 transition duration-300"
          >
            <p className="text-slate-300 italic">
              "{review.text}"
            </p>

            <h4 className="mt-4 font-semibold text-white">
              {review.name}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;