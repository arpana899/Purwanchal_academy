import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SummaryApi from "../api/api";
import { Link } from "react-router-dom";

const EventDetailPage = () => {
  const { slug } = useParams(); 
  const [eventDetails, setEventDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(SummaryApi.eventDetails(slug).url);
        if (!response.ok) {
          throw new Error("Failed to fetch event details");
        }
        const data = await response.json();
        
        if (!data) {
          throw new Error("Event not found");
        }
        
        setEventDetails({
          ...data,
          
          image: data.image ? `http://localhost:8000${data.image}` : null
        });
      } catch (error) {
        console.error("Error fetching event:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-semibold">Loading event details...</div>
        <div className="mt-4 animate-pulse">Please wait</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-semibold text-red-500">Error</div>
        <div className="mt-4 text-gray-600">{error}</div>
       
      </div>
    );
  }

  if (!eventDetails) {
    return (
      <div className="text-center py-12">
        <div className="text-2xl font-semibold">Event Not Found</div>
        <Link 
          to="/events" 
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:"
        >
          Browse All Events
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
     
      
      <h1 className="text-4xl font-bold mb-6 text-gray-900">{eventDetails.title}</h1>
      
      <div className="mb-6">
        <p className="text-gray-500">
          {new Date(eventDetails.created_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>
      </div>

      {eventDetails.image && (
        <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
          <img
            src={eventDetails.image}
            alt={eventDetails.title}
            className="w-full h-auto max-h-96 object-cover"
            onError={(e) => {
              console.error("Image failed to load:", e.target.src);
              e.target.style.display = 'none';
            }}
          />
        </div>
      )}

      <div 
        className="prose max-w-none text-gray-700" 
        dangerouslySetInnerHTML={{ __html: eventDetails.content }}
      />

      <div className="mt-12 pt-6 border-t border-gray-200">
        <Link 
          to="/events" 
          className="inline-block px-6 py-2 bg-primaryBlue text-white rounded hover:bg-blue-600"
        >
          View All Events
        </Link>
      </div>
    </div>
  );
};

export default EventDetailPage;