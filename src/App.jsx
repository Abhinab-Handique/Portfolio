import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';
import LeetCodeStats from './components/LeetcodeStatus';
import GitHubProfile from './components/Githubstats'; // Import the new component

function App() {
  const [text, setText] = useState('');
  const fullText =
    'I am Abhinab Handique, a final-year B.Tech student in Electronics and Instrumentation at the National Institute of Technology, Silchar. With a CGPA of 8.59, I have developed a strong foundation in software development. I am passionate about technology, particularly in building innovative solutions that can have a meaningful impact on the world. I have experience working with various technologies such as React, Node.js, MongoDB, and Express.js. Apart from my academic pursuits, I enjoy problem-solving and actively participate in competitive programming. I strive to continuously improve myself and look forward to exploring new opportunities in software development and technology.'; // Updated text about yourself

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center px-4">
      <Navbar />

      {/* Home Section */}
      <section id="home" className="flex flex-col md:flex-row justify-center items-center w-full py-24">
        <div className="text-center md:text-left md:basis-2/3 text-white font-sans mb-10 md:mb-0 px-8">
          <h1 className="text-4xl font-semibold mb-6">Hello Buds!</h1>
          <p className="text-xl">{text}</p>
        </div>

        <div className="md:basis-1/3 mb-10 md:mb-0">
          <img
            src="./images/abhinab.jpeg"
            alt="Abhinab"
            className="rounded-full shadow-xl max-w-xs md:max-w-sm h-auto mx-auto transition-transform transform hover:scale-105 hover:rotate-3"
          />
        </div>
      </section>

      {/* Coding Profiles Section */}
      <section id="coding-profiles" className="text-white py-24 px-4 w-full bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Coding Profiles</h2>
        <p className="text-lg sm:text-xl mb-6">
          Here are my profiles on various platforms where I engage in coding challenges and contribute to open-source projects:
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://leetcode.com/u/abhinab_2002/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-indigo-400"
          >
            LeetCode
          </a>
          <a
            href="https://github.com/Abhinab-Handique"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-indigo-400"
          >
            GitHub
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/abhinabhandique20/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-white hover:text-indigo-400"
          >
            GeeksforGeeks
          </a>
        </div>
      </section>

      {/* LeetCodeStats Graph Section */}
      <section id="leetcode-stats" className="py-24 px-4 w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
        <h2 className="text-3xl font-semibold mb-6 text-center">LeetCode Stats</h2>
        <div className="flex justify-center">
          <LeetCodeStats /> {/* LeetCode graph component */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-white py-24 px-4 w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>
        <Project />
      </section>

      {/* GitHub Profile Section */}
      <GitHubProfile /> {/* Add GitHubProfile component here */}

      {/* Footer Section */}
      <section id="contact" className="text-white py-24 px-4 w-full bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg sm:text-xl">Feel free to reach out via email: abhinabhandique20@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
