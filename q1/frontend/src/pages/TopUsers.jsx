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
            <li key={user.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={user.image}
                alt={`${user.name}'s avatar`}
                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
              />
              <span>{user.name} - {user.number_of_posts} posts</span>
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