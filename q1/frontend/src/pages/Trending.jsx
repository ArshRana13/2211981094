import { useEffect, useState } from 'react';

function Trending() {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/trending_posts')
      .then((response) => response.json())
      .then((data) => {
        setTrendingPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Trending Posts</h1>
      {trendingPosts.length > 0 ? (
        <ul>
          {trendingPosts.map((post) => (
            <li key={post.postId}>
              {post.userName} - {post.number_of_comments} comments
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Trending;