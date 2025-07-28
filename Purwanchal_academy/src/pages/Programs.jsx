import React from 'react';
import { Link } from 'react-router-dom';
import { TeachingMethodology } from '../components/Programs/TeachingMethodology';


const activities = [
  {
    title: "Sports",
    description: "Promoting physical health and teamwork through various sports activities.",
    image: "/images/sports.jpg",
  },
  {
    title: "Arts & Crafts",
    description: "Encouraging creativity through drawing, painting, and crafts.",
    image: "/images/artsAndCrafts.jpg",
  },
  {
    title: "Music & Dance",
    description: "Fostering artistic expression through music and dance performances.",
    image: "/images/musicAndDance.jpg",
  },]


const Programs = () => {
  return (
    <div className=" mx-auto  py-12">

      <section className="text-center responsive-padding  mb-7">

        <h1 className="md:text-4xl text-3xl font-bold  text-primaryBlue ">Our Educational Programs</h1>
        
        <p className="text-xl text-gray-600 mt-3">
          At <span className="font-semibold text-primaryBlue">Purwanchal Academy</span>, we provide a nurturing environment for students from Kindergarten to 10th grade. Our programs focus on academic excellence, personal growth, and holistic development.
        </p>
      </section>


      <section className="grid responsive-padding grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
 
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
    <div className="overflow-hidden rounded-md mb-4">
      <img 
        src="/images/programs/playGroup.JPG" 
        alt="Grade 1-3" 
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Playgroup</h3>
    <ul className="list-disc pl-5 text-gray-600">
      <li>Basic Subjects: Math, English, Science, Social Studies, Art</li>
      <li>Physical Education and Creative Arts</li>
    </ul>
  </div>

  
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
    <div className="overflow-hidden rounded-md mb-4">
      <img 
        src="/images/programs/nursery.JPG" 
        alt="Grade 4-6" 
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nursery-KG</h3>
    <ul className="list-disc pl-5 text-gray-600">
      <li>Expanded subjects with in-depth learning</li>
      <li>Introduction to computers and practical learning</li>
    </ul>
  </div>

 
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
    <div className="overflow-hidden rounded-md mb-4">
      <img 
        src="/images/programs/1-8.JPG" 
        alt="Grade 7-8" 
        className="w-full h-48 object-cover object-top hover:scale-105 transition-transform duration-300" 
        
      />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Grade 1-8</h3>
    <ul className="list-disc pl-5 text-gray-600">
      <li>Core subjects with an introduction to specializations</li>
      <li>Focus on student projects and extracurricular activities</li>
    </ul>
  </div>

 
  <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
    <div className="overflow-hidden rounded-md mb-4">
      <img 
        src="/images/programs/9-10.JPG" 
        alt="Grade 9-10" 
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300" 
      />
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Grade 9-10</h3>
    <ul className="list-disc pl-5 text-gray-600">
      <li>Preparation for secondary education and career planning</li>
      <li>In-depth focus on Science, Math, and Languages</li>
    </ul>
  </div>
</section>



      <section className="mt-12 responsive-padding text-center">
        <h2 className="text-4xl font-bold text-primaryBlue mb-4">Extracurricular Activities</h2>
        <p className="text-lg text-gray-600 mb-6">
          Our extracurricular activities include a range of sports, arts, and creative workshops designed to foster growth beyond the classroom.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <div key={index} className="relative group rounded-lg overflow-hidden shadow-lg">
              <img
                src={activity.image}
                alt={activity.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover object-top transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primaryBlue/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">

                <Link to="/Gallery">
                  <button className="mt-4 px-4 py-2 bg-white text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      <TeachingMethodology />





      <section className="mt-12 text-center bg-primaryBlue py-12">
        <h2 className="text-4xl font-bold text-white mb-8">Give Your Child a Bright Future</h2>
        <button className="px-8 py-3 bg-white text-primaryBlue rounded-md  transition">
          <a href="tel:+9779842067261" className="flex items-center text-xl space-x-2">
            Call +977 9842067261
          </a>
        </button>
      </section>

    </div>
  );
};

export default Programs;
