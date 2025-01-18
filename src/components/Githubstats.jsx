import React, { useState, useEffect } from 'react';

function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [index, setIndex] = useState(0); // State to track the current repository index

  useEffect(() => {
    // Fetch user profile data from GitHub API
    fetch('https://api.github.com/users/Abhinab-Handique') // Replace with your GitHub username
      .then((response) => response.json())
      .then((data) => setProfile(data));

    // Fetch repositories data
    fetch('https://api.github.com/users/Abhinab-Handique/repos')
      .then((response) => response.json())
      .then((data) => setRepos(data));
  }, []);

  if (!profile) {
    return <p>Loading GitHub data...</p>;
  }

  // Function to handle showing the next repository
  const nextRepo = () => {
    setIndex((prevIndex) => (prevIndex + 1) % repos.length); // Loop back to the first repo when reaching the end
  };

  return (
    <section id="github-profile" className="text-white py-24 px-4 w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <h2 className="text-3xl font-semibold mb-6 text-center">GitHub Profile</h2>
      <div className="flex justify-center gap-10 items-center">
        <img
          src={profile.avatar_url}
          alt={profile.name}
          className="rounded-full w-40 h-40 border-4 border-white"
        />
        <div>
          <h3 className="text-2xl">{profile.name}</h3>
          <p>{profile.bio}</p>
          <p>
            <strong>Followers:</strong> {profile.followers} | <strong>Following:</strong> {profile.following}
          </p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-10 text-center">Repository</h3>
      <div className="mt-4 text-center">
        {/* Display the repository based on the current index */}
        {repos.length > 0 && (
          <div>
            <a
              href={repos[index].html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white hover:text-indigo-400"
            >
              {repos[index].name}
            </a>
            <p>{repos[index].description || 'Please Visit the repo to know about this repo'}</p>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
        {/* Button to go to the next repository */}
        <button
          onClick={nextRepo}
          className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-all"
        >
          Next Repo
        </button>
      </div>
    </section>
  );
}

export default GitHubProfile;
