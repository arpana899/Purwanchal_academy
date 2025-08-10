import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-masonry-css";
import SummaryApi from "../api/api";
import {backendDomain} from "../api/api"

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

 useEffect(() => {
  const fetchImages = async () => {
    try {
      const response = await axios.get(SummaryApi.GalleryUrl.url, {
      });
      setImages(response.data.reverse());
    } catch (error) {
      console.error("Error fetching images:", error);
      alert("Network Error: Unable to fetch images");
    }
  };

  fetchImages();
}, []);


  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section className="py-4">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-center p-4 text-primary">
        𝐌𝐞𝐦𝐨𝐫𝐢𝐞𝐬
      </h1>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex gap-3 p-3"
        columnClassName="masonry-column space-y-2"
      >
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={`${backendDomain}${image.image}`}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-contain rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(`${backendDomain}${image.image}`)} 
              />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No images found.</p>
        )}
      </Masonry>
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-50"
          onClick={() => setSelectedImage(null)} 
        >
          <div className="max-w-3xl max-h-[80vh] p-4 rounded-lg shadow-lg">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
