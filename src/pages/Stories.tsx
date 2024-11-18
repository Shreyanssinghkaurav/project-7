import React, { useEffect, useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const SAMPLE_STORIES = [
  {
    id: 1,
    title: "The Wanderer's Tale",
    excerpt: "In the misty mountains of the north, where ancient pines whisper secrets to the wind...",
    author: "Elena Rivers",
    likes: 234,
    comments: 45,
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba"
  },
  {
    id: 2,
    title: "Midnight in Morocco",
    excerpt: "The spice market came alive as the sun set, casting long shadows across the ancient medina...",
    author: "James Mitchell",
    likes: 189,
    comments: 32,
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e"
  }
];

function Stories() {
  const [stories, setStories] = useState(SAMPLE_STORIES);

  useEffect(() => {
    // Load stories from localStorage
    const savedStories = JSON.parse(localStorage.getItem('stories') || '[]');
    if (savedStories.length > 0) {
      setStories([...savedStories, ...SAMPLE_STORIES]);
    }
  }, []);

  const handleLike = (storyId: number) => {
    setStories(stories.map(story => 
      story.id === storyId 
        ? { ...story, likes: story.likes + 1 }
        : story
    ));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Featured Stories</h1>
      
      <div className="space-y-8">
        {stories.map(story => (
          <article key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img
                  className="h-48 w-full object-cover md:w-48"
                  src={story.image}
                  alt={story.title}
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-amber-700 font-semibold">
                  By {story.author}
                </div>
                <h2 className="block mt-1 text-xl font-semibold text-gray-900">
                  {story.title}
                </h2>
                <p className="mt-2 text-gray-600">
                  {story.excerpt || story.content?.substring(0, 150) + '...'}
                </p>
                <div className="mt-4 flex items-center space-x-6 text-gray-500">
                  <button 
                    onClick={() => handleLike(story.id)}
                    className="flex items-center space-x-1 hover:text-amber-700"
                  >
                    <Heart className="h-5 w-5" />
                    <span>{story.likes}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-amber-700">
                    <MessageCircle className="h-5 w-5" />
                    <span>{story.comments}</span>
                  </button>
                  <button className="flex items-center space-x-1 hover:text-amber-700">
                    <Share2 className="h-5 w-5" />
                    <span>Share</span>
                  </button>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Stories;