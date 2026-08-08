// src/app/page.tsx

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import Departments from "@/components/home/Departments";
import Stats from "@/components/home/Stats";
import CampusLife from "@/components/home/CampusLife";
import LatestNews from "@/components/home/LatestNews";
import Testimonials from "@/components/home/Testimonials";
import Campuses from "@/components/home/Campuses";
import Link from "next/link";
import CallToAction from "@/components/home/CallToAction";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <Departments />
        <FeaturedCourses />
        <Campuses />
        <Stats />
        <CampusLife />
        <LatestNews />
        <Testimonials />
        <CallToAction />
      </main>

      <Footer />
    </>
  );
}