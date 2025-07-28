import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SummaryApi from "../api/api";

const truncateHTML = (html, maxLength) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  let text = doc.body.textContent || "";

  if (text.length > maxLength) {
    text = text.slice(0, maxLength) + "...";
  }

  doc.body.textContent = text;
  return doc.body.innerHTML;
};

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(SummaryApi.events.url);
        const data = response.data;

        if (data && Array.isArray(data)) {
          const sortedEvents = data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
          setEvents(sortedEvents);
        } else {
          setEvents([]);
        }
      } catch (error) {
        console.error("Error fetching events:", error);
        setError("Failed to load events. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  if (!events.length) {
    return <div className="text-center py-8">No events found.</div>;
  }

  return (
    <div className="mx-auto p-6 max-w-7xl">
      <h1 className="text-5xl font-bold mb-12 text-center text-primaryBlue">Our Events</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {events.length > 0 && (
          <div className="md:col-span-2">
            <Link to={`/events/${events[0].slug}`} className="block">
              <div className="bg-white rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-3xl">
                {events[0].image && (
                  <img
                    src={`http://localhost:8000${events[0].image}`}
                    alt={events[0].title}
                    className="w-full rounded-2xl h-96 object-cover"
                  />
                )}
                <div className="p-3">
                  <h2 className="text-3xl font-bold mt-2 text-gray-900">{events[0].title}</h2>
                  <p className="text-lg text-gray-600 mt-2">
                    {new Date(events[0].created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>

                  <p
                    className="text-gray-700 mt-2"
                    dangerouslySetInnerHTML={{
                      __html: truncateHTML(events[0].content, 150)
                    }}
                  ></p>

                  <div className="flex items-center">
                    <Link
                      to={`/events/${events[0].slug}`}
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        <div className="flex flex-col gap-6 h-screen md:overflow-y-scroll overflow-x-hidden overflow-y-hidden  ">
          {events.slice(1).map((event) => (
            <Link to={`/events/${event.slug}`} key={event.slug} className="block">
              <div className="bg-white flex items-center gap-4 transition transform hover:scale-105 relative group">
                <div className="relative w-40 h-40">
                  {event.image && (
                    <img
                      src={`http://localhost:8000${event.image}`}
                      alt={event.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        console.error("Image failed to load:", e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <Link
                    to={`/events/${event.slug}`}
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity rounded-lg sm:flex lg:hidden"
                  >
                    See More
                  </Link>
                </div>

                <div className="flex-1 overflow-hidden sm:hidden lg:block">
                  <h2 className="text-xl font-semibold text-gray-900">{event.title}</h2>
                  <p className="text-gray-600 mb-2">
                    {new Date(event.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </p>
                  <p className="text-gray-700 max-w-md overflow-hidden text-ellipsis line-clamp-2">
                    {truncateHTML(event.content, 100)}
                  </p>
                  <Link
                    to={`/events/${event.slug}`}
                    className="text-blue-600 font-semibold hover:underline mt-2 inline-block"
                  >
                    See More
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>


      

      </div>
    </div>
  );
};

export default Events;