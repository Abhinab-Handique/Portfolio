import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Project from './components/Project';

function App() {
  const [text, setText] = useState('');
  const fullText =
    'I am Abhinab Handique, a final-year B.Tech student in Electronics and Instrumentation at the National Institute of Technology, Silchar, with a CGPA of 8.59. I have a strong foundation in software development and a passion for creating innovative solutions...';

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50); // Adjust typing speed here

    return () => clearInterval(interval);
  }, []);

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

      {/* About Section */}
      <section id="about" className="text-white py-24 px-4 w-full bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="text-lg sm:text-xl max-w-4xl mx-auto">
          I am passionate about technology and have experience in full-stack development, especially with React, Node.js, and MongoDB. I love solving complex problems and creating impactful solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="text-white py-24 px-4 w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
        <h2 className="text-3xl font-semibold mb-6 text-center">My Projects</h2>
        <Project />
      </section>

      {/* Footer Section */}
      <section id="contact" className="text-white py-24 px-4 w-full bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-lg sm:text-xl">Feel free to reach out via email: abhinabhandique20@gmail.com</p>
      </section>
    </div>
  );
}

export default App;
