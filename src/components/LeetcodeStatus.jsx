import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

function LeetCodeStats() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/abhinab_2002') // Replace with your LeetCode username
      .then((response) => response.json())
      .then((data) => setStats(data))
      .catch((error) => console.error('Error fetching LeetCode stats:', error));
  }, []);

  if (!stats) {
    return <p>Loading...</p>;
  }

  return (
    <div>
    <PieChart
    series={[
      {
        data: [
          { id: 0, value: stats.easySolved, label: 'Easy' ,color: '#4caf50' },
          { id: 1, value: stats.mediumSolved, label: 'Medium',color:'#ff9800' },
          { id: 2, value: stats.hardSolved, label: 'Hard',color:'#f44336' },
        ],
      },
    ]}
    width={400}
    height={200}
  />
  </div>
  );
}

export default LeetCodeStats;