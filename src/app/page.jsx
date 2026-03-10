import Banner from '@/components/Banner';
import Categories from '@/components/Categories';
import Features from '@/components/Features';
import PopularCourses from '@/components/PopularCourses';
import Testimonials from '@/components/Testimonials';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <section>  <Banner /> </section>
            <section>  <PopularCourses /> </section>
            <section>  <Features /> </section>
            <section><Categories /></section>
            <section><Testimonials /></section>
        </div>
    );
};

export default HomePage;