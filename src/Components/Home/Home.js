import React from "react";
import Navbar from "../Navbar/Navbar";
import logo from '../assests/logo.jpg';

function Home() {
    return(
        <>
            {/* Navbar Component */}
            <Navbar/>

             {/* Hero Section */}
             <header className="text-center my-8 md:my-12">
                <h1 className="m-4 text-3xl md:text-4xl font-bold">Welcome to AuralApp!</h1>
                <p className="mb-4 text-sm md:text-base">Empowering deaf students through education</p>
                <button className="bg-black text-white py-4 px-8 md:py-3 md:px-10 rounded">Get Started</button>
            </header>

            {/* Main Content Section */}
            <main className="text-center my-8 md:my-12">
                <section className="what-we-offer container mx-auto mt-8 md:mt-12 p-6 md:p-10 rounded-md md:m-1/4">
                        <h2 className="text-2xl md:text-4xl font-bold mb-4">What we Offer</h2>
                        {/* Education Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Education</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Skills Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Skills</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Exposure Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Exposure</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Explore Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Explore</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Donation Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Donation</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Experts Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Experts</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                        {/* Sucess Stories Section  */}
                        <div className="flex items-center rounded-md border border-gray-500 p-2 md:p-4 mb-4">
                            <img src={logo} alt="Logo" className="w-8 h-8 md:w-12 md:h-12 mr-4" />
                            <div>
                                <h3 className="text-base md:text-xl font-bold mb-1 md:mb-2 text-left">Sucess Stories</h3>
                                <p className="text-xs md:text-sm">Access comprehensive educational resources and courses</p>
                            </div>
                        </div>
                </section>

                {/* Featured Courses */}
                
                <section class="featured-courses p-4 md:p-16">
                    <h2 class="text-4xl font-bold mb-6">Featured Courses</h2>
                    <p class="mb-6">Explore our popular courses</p>

                    <div class="flex flex-wrap justify-center">
                        <div class="our__courses_card flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                        <img src={logo} alt="item 1 offer card" class="w-64 h-48 object-cover mx-auto" />
                            <div class="our__courses_content text-center">
                                <p class="text-lg font-bold mb-2">Course Name</p>
                                <h2 class="text-sm">Course Details</h2>
                            </div>
                        </div>

                        <div class="our__courses_card flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <img src={logo} alt="item 1 offer card" class="w-64 h-48 object-cover mx-auto" />
                            <div class="our__courses_content text-center">
                                <p class="text-lg font-bold mb-2">Course Name</p>
                                <h2 class="text-sm">Course Details</h2>
                            </div>
                        </div>

                        <div class="our__courses_card flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <img src={logo} alt="item 1 offer card" class="w-64 h-48 object-cover mx-auto" />
                            <div class="our__courses_content text-center">
                                <p class="text-lg font-bold mb-2">Course Name</p>
                                <h2 class="text-sm">Course Details</h2>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    )
}

export default Home;