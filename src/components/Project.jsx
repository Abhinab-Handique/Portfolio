// src/components/Projects.jsx

import React from 'react';

const Projects = () => {
  return (
    <div className="text-white mt-12 mb-6">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* ReserveURSeat Project */}
        <div className="bg-indigo-400 rounded-lg shadow-xl p-4 hover:bg-blue-500 transition-all">
          <h3 className="text-white text-xl font-semibold mb-2">ReserveURSeat</h3>
          <p className="text-gray-100 text-sm mb-4">
            A web app for seat booking and real-time food order notifications using Node.js, React.js, Express.js, and MongoDB.
          </p>
          <a
            href="https://github.com/Abhinab-Handique/ReserveURSeat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-all"
          >
            View Project
          </a>
        </div>

        {/* PlacementGuide Project */}
        <div className="bg-indigo-400 rounded-lg shadow-xl p-4 hover:bg-blue-500 transition-all">
          <h3 className="text-white text-xl font-semibold mb-2">PlacementGuide</h3>
          <p className="text-gray-100 text-sm mb-4">
            A platform offering on-campus placement insights for NIT students, built with Node.js, Express.js, and MongoDB.
          </p>
          <a
            href="https://github.com/Abhinab-Handique/PlacementGuide"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-all"
          >
            View Project
          </a>
        </div>

        {/* MovieSearch Project */}
        <div className="bg-indigo-400 rounded-lg shadow-xl p-4 hover:bg-blue-500 transition-all">
          <h3 className="text-white text-xl font-semibold mb-2">MovieSearch</h3>
          <p className="text-gray-100 text-sm mb-4">
            A responsive movie search website using React.js and the OMDB API to fetch and display movie details.
          </p>
          <a
            href="https://github.com/Abhinab-Handique/MovieSearch"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-500 transition-all"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
