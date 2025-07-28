import { useNavigate } from "react-router-dom";
import AllStudent from "../../assets/Gallery/Landing/learningZone/allStudent.png";
import FacultyAndStaff from "../../assets/Gallery/Landing/FacultyAndStaffs/facultyAndStaff.jpeg";
import sportsCover from "../../assets/Gallery/Landing/Sports/sportsCover.png";
import NepalScout from "../../assets/Gallery/Landing/NepalScout/scout3.png";
import vaccination from "../../assets/Gallery/Landing/vaccinationProgramme/vac3.jpg";
import saraswati from "../../assets/Gallery/Landing/SaraswotiPuja/saraswatifeature.png";

const places = [
  { name: "Learning zone", image: AllStudent },
  { name: "Faculty and Staffs", image: FacultyAndStaff },
  { name: "Nepal Scout", image: NepalScout },
  { name: "Sports", image: sportsCover },
  { name: "Vaccination Programme", image: vaccination },
  { name: "Saraswoti Puja", image: saraswati },
];

export default function ExploreCarousel() {
  const navigate = useNavigate();

  return (
    <div className="pt-8 pb-10 responsive-padding">
      <h1 className="text-3xl 2xl:text-4xl text-primaryBlue font-bold text-center pb-6">
        Explore Our Gallery
      </h1>

      <div className="w-full overflow-hidden relative">
        <div className="flex animate-infinite-scroll space-x-4 group-hover:animate-none items-center flex-nowrap">
          {[...places, ...places].map((place, index) => (
            <div
              key={index}
              className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mx-4 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primaryBlue/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-primaryBlue bg-white border border-white px-4 py-2 font-semibold text-lg sm:text-xl rounded-md">
                  See More
                </button>
              </div>
              <div className="p-2 bg-white w-full text-center">
                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-500">
                  EXPLORE
                </p>
                <h3 className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl">
                  {place.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-6 sm:hidden">
        <button
          className="text-white bg-primaryBlue px-6 py-3 font-semibold text-lg rounded-md shadow-md"
          onClick={() => navigate("/gallery")}
        >
          See More
        </button>
      </div>

      
    </div>
  );
}
