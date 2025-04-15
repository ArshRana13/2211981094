import { useEffect, useState } from 'react';

function TopUsers() {
  const [topUsers, setTopUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/top_users')
      .then((response) => response.json())
      .then((data) => {
        setTopUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Top 5 Users</h1>
      {topUsers.length > 0 ? (
        <ul>
          {topUsers.map((user) => (
            <li key={user.id}>
              {user.name} - {user.number_of_posts} posts
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TopUsers;