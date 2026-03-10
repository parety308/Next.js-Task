"use client";
import React, { useState } from "react";

const AddCourses = () => {
  const [message, setMessage] = useState("");

  const handleAddCourse = (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const shortDescription = form.shortDescription.value;
    const description = form.description.value;
    const price = form.price.value;
    const date = form.date.value;
    const priority = form.priority.value;
    const image = form.image.value;

    const newCourse = {
      title,
      shortDescription,
      description,
      price,
      date,
      priority,
      image,
    };

    console.log(newCourse);
    setMessage("Course added successfully ✅");
    form.reset();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center text-white">
        Add New Course
      </h1>

      <form
        onSubmit={handleAddCourse}
        className="bg-slate-800 border border-slate-700 shadow-xl rounded-2xl p-6 space-y-5"
      >
        <div>
          <label className="font-semibold text-slate-300">
            Course Title
          </label>
          <input
            name="title"
            type="text"
            required
            placeholder="Enter course title"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Short Description
          </label>
          <input
            name="shortDescription"
            type="text"
            required
            placeholder="Enter short description"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Full Description
          </label>
          <textarea
            name="description"
            required
            rows="4"
            placeholder="Enter full description"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          ></textarea>
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Price
          </label>
          <input
            name="price"
            type="number"
            required
            placeholder="Enter price"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Date
          </label>
          <input
            name="date"
            type="date"
            required
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Priority
          </label>
          <select
            name="priority"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div>
          <label className="font-semibold text-slate-300">
            Image URL (optional)
          </label>
          <input
            name="image"
            type="text"
            placeholder="Enter image URL"
            className="w-full bg-slate-900 border border-slate-600 px-3 py-2 rounded-lg mt-1 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold"
        >
          Submit
        </button>

        {message && (
          <p className="text-green-400 text-center font-semibold">
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AddCourses;