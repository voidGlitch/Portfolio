import Port from "../assets/Port.png";
import Planora from "../assets/Planora.png";
import chatapp from "../assets/chatapp.png";
import boxoffice from "../assets/boxoffice.png";

export const projectData = [
  {
    id: 1,
    image: Planora,
    summary:
      "A full-stack AI-powered trip planner offering personalized itineraries, destination exploration, and a seamless user experience.",
    overlay: "Trip Planner Web Application",
    title: "Planora AI Trip Planner",
    features: [
      "AI-Driven Itineraries: Personalized trip plans powered by Gemini AI.",
      "Google Places Integration: Autocomplete location search for easy destination selection.",
      "Visuals: Stunning images of places via Google Photos API.",
      "Firebase Backend: Secure data storage, Google login, and trip history.",
      "Responsive Design: Built with TailwindCSS for an optimal experience on all devices.",
    ],
    techStack: ["React", "Gemini AI", "TailwindCSS", "Firebase"],
    links: [
      "https://planora-ai-trip-planner.vercel.app/",
      "https://github.com/voidGlitch/Planora-Ai-Trip-Planner",
    ],
  },
  {
    id: 2,
    image: Port,
    summary: "Portfolio Web-app made using React & Tailwind CSS.",
    overlay: "Portfolio- Webapplication",
    title: "Portfolio Web-app",
    features: ["My Portfolio web application is based on GOOGLE theme."],
    techStack: ["React", "Tailwind CSS"],
    links: [
      "https://portfolio-alpha-two-62.vercel.app/",
      "https://github.com/voidGlitch/Portfolio",
    ],
  },

  {
    id: 3,
    image: chatapp,
    summary:
      "A feature-rich, real-time chat application with support for chat rooms, message reactions, social media authentication, role-based access control, file uploads, audio messages, and instant notifications.",
    overlay: "Chat App - Web Application",
    title: "Chat App Web Application",
    features: [
      "Some key features are: ",
      "1. Real-time messaging with Firebase Realtime Database.",
      "2. Like messages and engage with your chat.",
      "3. Social media authentication (Google and Facebook).",
      "4. Role-based permissions for users.",
      "5. File uploads and sharing within chat.",
      "6. Audio messages for voice communication.",
      "7. Instant notifications via Firebase Cloud Messaging (FCM).",
    ],
    techStack: ["React", "Firebase", "SASS", "RSuite (React Suite)"],
    links: [
      "https://chat-web-app-9eb34.firebaseapp.com/signin",
      "https://github.com/voidGlitch/Chat-app",
    ],
  },
  {
    id: 4,
    image: boxoffice,
    summary:
      "An intuitive movie recommendation platform where users can search for movies, receive recommendations, rate their favorites, and explore detailed information for each movie.",
    overlay: "Box Office - Movie Recommendation Website",
    title: "Box Office Movie Recommendation Website",
    features: [
      "Some key features are:",
      "1. Personalized movie recommendations based on user searches.",
      "2. Star rating system to mark and save favorite movies.",
      "3. Detailed information display for each movie, including ratings, cast, and synopsis.",
    ],
    techStack: ["React", "REST API", "CSS", "Git"],
    links: [
      "https://voidglitch.github.io/box-office/#/",
      "https://github.com/voidGlitch/box-office",
    ],
  },
];
