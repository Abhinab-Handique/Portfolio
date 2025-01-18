// src/components/GitHubProfile.js
import React, { useState, useEffect } from 'react';

function GitHubProfile() {
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);

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

  return (
    <section id="github-profile" className="text-white py-24 px-4 w-full bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
      <h2 className="text-3xl font-semibold mb-6 text-center">GitHub Profile</h2>
      <div className="flex justify-center gap-10 items-center">
        <img src={profile.avatar_url} alt={profile.name} className="rounded-full w-40 h-40 border-4 border-white" />
        <div>
          <h3 className="text-2xl">{profile.name}</h3>
          <p>{profile.bio}</p>
          <p><strong>Followers:</strong> {profile.followers} | <strong>Following:</strong> {profile.following}</p>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-10 text-center">Repositories</h3>
      <ul className="mt-4">
        {repos.slice(0, 5).map((repo) => (
          <li key={repo.id} className="mb-4 text-center">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-indigo-400">
              {repo.name}
            </a>
            <p>{repo.description || 'No description provided.'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default GitHubProfile;
