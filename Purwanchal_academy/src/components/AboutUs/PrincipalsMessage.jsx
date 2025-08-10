import { useEffect, useState } from "react";
import axios from "axios";

const PrincipalsMessage = () => {
  const defaultData = {
    name: "Dipen Rai",
    title: "Principal",
    message:
      "Education is essential for every child's future, and fostering extracurricular activities plays a crucial role in their overall development—physically, mentally, and emotionally. With a strong commitment to excellence, Mount Saipal International Academy effectively manages its academic, administrative, and economic activities, ensuring a well-rounded education that nurtures students' growth and potential.",
  };

  const [message, setMessage] = useState(defaultData.message);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/principal-message/")
      .then((res) => {
        console.log("Backend response:", res.data);

        const backendMsg = res.data?.message?.trim();
        console.log("Processed backend message:", backendMsg);

        if (
          backendMsg &&
          backendMsg.toLowerCase() !== "principal msg is not sent yet"
        ) {
          setMessage(backendMsg);
          console.log("Using backend message");
        } else {
          setMessage(defaultData.message);
          console.log("Using default message (invalid or missing backend message)");
        }
      })
      .catch((error) => {
        console.error("Error fetching principal message:", error);
        setMessage(defaultData.message);
      });
  }, []);

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

          <p className="text-gray-700 leading-relaxed md:pr-8 mb-4">{message}</p>
          <p className="font-semibold">Sincerely,</p>
          <p className="text-lg font-medium">{defaultData.name}</p>
          <p className="text-gray-600">{defaultData.title}</p>
        </div>
      </div>
    </div>
  );
};

export default PrincipalsMessage;
