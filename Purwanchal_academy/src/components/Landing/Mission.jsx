import React, { useEffect, useState } from "react";
import axios from "axios";

export const MissionVision = () => {

  const fallbackData = {
    vision: {
      image: "/images/missionVission/vision.JPG",
      description:
        "Our vision is to be a center of educational excellence, where students become lifelong learners, leaders, and global citizens. We strive to create an innovative and dynamic learning environment that prepares students for the challenges of the future."
    },
    mission: {
      image: "/images/missionVission/mission.JPG",
      paragraph:
        "Our mission is to provide a nurturing and inclusive learning environment that fosters academic excellence, personal growth, and character development. We aim to empower students with knowledge, skills, and values that prepare them for a successful future and responsible citizenship."
    }
  };

  const [data, setData] = useState(fallbackData);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/vision/") 
      .then((res) => {
        const backendVision = res.data;

        if (backendVision?.image || backendVision?.description) {
          setData((prev) => ({
            ...prev,
            vision: {
              image:
                backendVision?.image && backendVision.image.trim() !== ""
                  ? backendVision.image
                  : prev.vision.image,
              description:
                backendVision?.description &&
                backendVision.description.trim() !== ""
                  ? backendVision.description
                  : prev.vision.description
            }
          }));
        }
      })
      .catch((err) => {
        console.error("Error fetching vision:", err);
        setData(fallbackData);
      });
  }, []);

  return (
    <section className="py-16 bg-primaryBlue mt-10">
      <div className="mx-auto flex responsive-padding flex-col md:flex-row flex-1">
        {/* Heading */}
        <div className="flex flex-1 items-center justify-center">
          <h2 className="md:text-7xl text-3xl font-bold flex-1 text-white text-center mb-12">
            Our Mission <span> & Vision</span>
            <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-1 gap-7 flex-col">
          {/* Vision */}
          <div className="flex flex-col gap-3 md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full flex-shrink-0">
              <img
                src={data.vision.image}
                alt="Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:mr-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Vision</h3>
              <p className="text-gray-600 text-lg max-w-lg">{data.vision.description}</p>
            </div>
          </div>

        
          <div className="flex flex-col gap-3 md:flex-row items-center bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-full flex-shrink-0">
              <img
                src={data.mission.image}
                alt="Mission"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:mr-6 text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-900">Mission</h3>
              <p className="text-gray-600 text-lg max-w-lg">{data.mission.paragraph}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
