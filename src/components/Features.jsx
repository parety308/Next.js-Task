import React from "react";

const Features = () => {
  const features = [
    { title: "Expert Instructors", desc: "Learn from industry professionals." },
    { title: "Flexible Learning", desc: "Study anytime anywhere." },
    { title: "Certification", desc: "Get certified after completing courses." },
    { title: "Lifetime Access", desc: "Access courses forever." },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Why Choose Our Platform
        </h2>
        <p className="text-slate-400 mt-3 max-w-xl mx-auto">
          Discover powerful features designed to help you learn faster
          and build real-world development skills.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900 transition duration-300"
          >
            <h3 className="text-lg font-semibold text-white">
              {feature.title}
            </h3>

            <p className="text-slate-400 mt-2 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;