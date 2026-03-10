import React from "react";

const Categories = () => {
  const categories = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Mobile Development",
  ];

  return (
    <section id="categories" className="py-20 px-4 sm:px-6">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Course Categories
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          Explore courses from different technology domains and build
          the skills needed for your future career.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-8 text-center hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">
              {cat}
            </h3>

            <p className="text-slate-400 text-sm mt-2">
              Explore courses
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Categories;