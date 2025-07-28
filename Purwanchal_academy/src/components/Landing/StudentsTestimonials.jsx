import React, { useEffect, useState } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import axios from 'axios';
import stripHTML from '../../utility/textUtils'; 

const StudentTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/testimonial/');
        
        const studentTestimonials = response.data.filter((testimonial) => testimonial.post === "student");
        setTestimonials(studentTestimonials);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  if (loading) {
    return <p>Loading student testimonials...</p>;
  }

  return (
    <section className="py-10 responsive-padding">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primaryBlue mb-8">What Our Students Have to Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all"
            >
              <div className="mb-4 text-gray-400">
                <FaQuoteLeft className="text-4xl mx-auto" />
              </div>
              <div className="mb-4">
                <p className="text-lg text-gray-600">{`"${stripHTML(testimonial.description)}"`}</p>
              </div>
              <div className="flex items-center mt-4">
                <img
                  className="w-12 h-12 object-cover rounded-full mr-4"
                  src={`http://127.0.0.1:8000${testimonial.image}`} 
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.post}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
