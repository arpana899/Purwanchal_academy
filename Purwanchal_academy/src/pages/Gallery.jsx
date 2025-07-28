import React, { useState, useEffect } from 'react';

function Gallery() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/gallery/')
      .then(response => response.json())
      .then(data => {
        if (data.images) {
          setImages(data.images);
        }
      })
      .catch(error => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-semibold text-center mb-8">Image Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.length === 0 && <p className="text-center col-span-full">No images found</p>}
        {images.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Gallery Image ${index + 1}`}
            onClick={() => setSelectedImage(url)}
            className="w-full h-auto rounded-xl cursor-pointer object-cover shadow-md hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white text-4xl font-bold z-50"
            aria-label="Close image"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Enlarged View"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-2xl object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
