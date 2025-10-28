'use client';

import { useEffect } from 'react';

export default function LinkedInFeed() {
  useEffect(() => {
    // Vérifie si le script n'est pas déjà présent
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <div
        className="elfsight-app-3ebb7b04-363d-4dab-b998-c9b246088ad2"
        data-elfsight-app-lazy
        style={{ width: '100%', height: 'auto' }}
      ></div>
    </div>
  );
}
