import { useEffect, useState } from 'react';

function Feed() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/feed')
      .then((response) => response.json())
      .then((data) => {
        setFeed(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Feed</h1>
      {feed.length > 0 ? (
        <ul>
          {feed.map((post) => (
            <li key={post.postId}>
              {post.userName} - {post.number_of_comments} comments - Date: {post.date_of_creation.year}-{post.date_of_creation.month}-{post.date_of_creation.date} {post.date_of_creation.time}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Feed;