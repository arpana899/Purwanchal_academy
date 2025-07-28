const backendDomain = "http://127.0.0.1:8000";

const frontendUrl = "http://localhost:5173";

export { frontendUrl, backendDomain };

const SummaryApi = {
  GalleryUrl: {
    url: `${backendDomain}/api/gallery`,
    method: "get",
  },
  teams: {
    url: `${backendDomain}/api/teams`,
    method: "get",
  },

  events: {
    url: `${backendDomain}/api/events`,
    method: "get",
  },

  eventDetails: (slug) => ({
    url: `${backendDomain}/api/events/${slug}/`,
    method: "get",
  }),

  testimonials: {
    url: `${backendDomain}/api/testimonial`,
    method: "get",
  },
};

export default SummaryApi;