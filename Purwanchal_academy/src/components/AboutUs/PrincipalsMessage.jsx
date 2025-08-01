import { useEffect, useState } from 'react';
import axios from 'axios';

const PrincipalsMessage = () => {
  const [messageData, setMessageData] = useState(null);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/principal-message/') // replace with your actual API URL
      .then((res) => setMessageData(res.data))
      .catch((err) => console.error('Error fetching principal message:', err));
  }, []);

  // Default message to show before backend data is loaded
  const defaultData = {
    name: 'Dipen Rai',
    title: 'Principal',
    message:
      "Education is essential for every child's future, and fostering extracurricular activities plays a crucial role in their overall development—physically, mentally, and emotionally. With a strong commitment to excellence, Mount Saipal International Academy effectively manages its academic, administrative, and economic activities, ensuring a well-rounded education that nurtures students' growth and potential.",
  };

  const content = messageData || defaultData;

  return (
    <div className="responsive-padding mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="relative flex justify-center">
          <img
            src="/images/principalMessage.jpg"
            alt="Principal"
            className="w-full h-full max-w-sm rounded-xl object-cover"
          />
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4 text-primaryBlue">
            Message From Principal
          </h1>
          <h6 className="text-lg font-semibold text-primary bg-white inline-block">
            Message
          </h6>

          <p className="text-gray-700 leading-relaxed md:pr-8 mb-4">
            {content.message}
          </p>
          <p className="font-semibold">Sincerely,</p>
          <p className="text-lg font-medium">{content.name}</p>
          <p className="text-gray-600">{content.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalsMessage;