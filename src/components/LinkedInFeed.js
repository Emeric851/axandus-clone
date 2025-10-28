"use client";

import { useEffect, useState } from "react";

export default function LinkedInFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://rss.app/feeds/v1.1/l8suyXaruUHhhNsm.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.items || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur lors du chargement du flux LinkedIn :", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Chargement des publications LinkedIn...</p>;
  if (!posts.length) return <p className="text-center text-gray-600">Aucune publication disponible pour le moment.</p>;

  return (
    <section id="linkedin" className="py-24 bg-gray-50">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center uppercase text-[#cc0000]">
          Actualités LinkedIn
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{post.description}</p>
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#cc0000] font-semibold hover:underline"
              >
                Lire sur LinkedIn
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
