import React, { useEffect, useState } from 'react';

const LinkedInFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/linkedin-feed')
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement du flux LinkedIn :', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des publications LinkedIn...</p>;
  if (!posts.length) return <p>Aucune publication trouvée.</p>;

  return (
    <div className="linkedin-feed">
      {posts.map((post, index) => (
        <div key={index} className="linkedin-post">
          <a href={post.link} target="_blank" rel="noopener noreferrer">
            <h3>{post.title}</h3>
          </a>
          <p>{post.contentSnippet}</p>
          <small>{new Date(post.pubDate).toLocaleString()}</small>
        </div>
      ))}
      <style jsx>{`
        .linkedin-feed {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .linkedin-post {
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 1rem;
          transition: box-shadow 0.2s;
        }
        .linkedin-post:hover {
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }
        a {
          text-decoration: none;
          color: #0a66c2; /* couleur LinkedIn */
        }
        h3 {
          margin: 0 0 0.5rem 0;
        }
        p {
          margin: 0.5rem 0;
        }
        small {
          color: #666;
        }
      `}</style>
    </div>
  );
};

export default LinkedInFeed;
