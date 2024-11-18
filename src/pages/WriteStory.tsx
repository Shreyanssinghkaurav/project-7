import React, { useState } from 'react';
import { PenTool, Image as ImageIcon, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function WriteStory() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showDrafts, setShowDrafts] = useState(false);
  const navigate = useNavigate();

  // Mock drafts data - in a real app, this would come from a database
  const drafts = [
    { id: 1, title: 'My Unfinished Story', updatedAt: '2024-03-15' },
    { id: 2, title: 'Adventure Draft', updatedAt: '2024-03-14' }
  ];

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save to a database
    const newStory = {
      id: Date.now(),
      title,
      content,
      author: 'Current User',
      likes: 0,
      comments: 0,
      image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba'
    };
    
    // Add to stories in localStorage for demo
    const stories = JSON.parse(localStorage.getItem('stories') || '[]');
    localStorage.setItem('stories', JSON.stringify([newStory, ...stories]));
    
    // Redirect to stories page
    navigate('/stories');
  };

  const handleSaveDraft = () => {
    if (!title && !content) return;
    
    const draft = {
      id: Date.now(),
      title: title || 'Untitled Draft',
      content,
      updatedAt: new Date().toISOString()
    };
    
    const drafts = JSON.parse(localStorage.getItem('drafts') || '[]');
    localStorage.setItem('drafts', JSON.stringify([draft, ...drafts]));
    
    alert('Draft saved successfully!');
  };

  const loadDraft = (draft: any) => {
    setTitle(draft.title);
    setContent(draft.content || '');
    setShowDrafts(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-2">
          <PenTool className="h-6 w-6 text-amber-900" />
          <h1 className="text-3xl font-bold text-amber-900">Write Your Story</h1>
        </div>
        <button
          onClick={() => setShowDrafts(!showDrafts)}
          className="flex items-center space-x-2 px-4 py-2 bg-amber-100 text-amber-900 rounded-md hover:bg-amber-200"
        >
          <FileText className="h-5 w-5" />
          <span>My Drafts</span>
        </button>
      </div>

      {showDrafts ? (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-bold text-amber-900 mb-4">Your Drafts</h2>
          <div className="space-y-4">
            {drafts.map(draft => (
              <div
                key={draft.id}
                className="flex items-center justify-between p-4 border rounded-md hover:bg-amber-50 cursor-pointer"
                onClick={() => loadDraft(draft)}
              >
                <div>
                  <h3 className="font-semibold">{draft.title}</h3>
                  <p className="text-sm text-gray-500">Last updated: {draft.updatedAt}</p>
                </div>
                <button className="text-amber-900 hover:text-amber-700">Load Draft</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-8">
          <form onSubmit={handlePublish} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                placeholder="Enter your story title..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cover Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer bg-white rounded-md font-medium text-amber-900 hover:text-amber-700">
                      <span>Upload a file</span>
                      <input type="file" className="sr-only" accept="image/*" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Story Content
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={12}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                placeholder="Start writing your story..."
                required
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleSaveDraft}
                className="px-4 py-2 border border-amber-900 text-amber-900 rounded-md hover:bg-amber-50"
              >
                Save Draft
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-amber-900 text-white rounded-md hover:bg-amber-800"
              >
                Publish Story
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default WriteStory;