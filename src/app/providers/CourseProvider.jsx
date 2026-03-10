"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

const CourseContext = createContext();
const provider = new GoogleAuthProvider();

export const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState();

    useEffect(() => {
        fetch("/data.json")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const addCourse = (course) => {
        setCourses((prev) => [...prev, course]);
    };

    const deleteCourse = (id) => {
        setCourses((prev) => prev.filter((course) => course.id !== id));
    };

    const updateCourse = (id, updatedCourse) => {
        setCourses((prev) =>
            prev.map((course) =>
                course.id === id ? { ...course, ...updatedCourse } : course
            )
        );
    };
    const CreateUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInGoogle = () => {
        return signInWithPopup(auth, provider);

    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };
    return (
        <CourseContext.Provider
            value={{
                courses,
                setCourses,
                addCourse,
                deleteCourse,
                updateCourse,
                signIn,
                CreateUser,
                signInGoogle,
                user
            }}
        >
            {children}
        </CourseContext.Provider>
    );
};

export const useCourses = () => useContext(CourseContext);