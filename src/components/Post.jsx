import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = ({ addPost }) => {
  const [selectedTab, setSelectedTab] = useState('text');
  const [community, setCommunity] = useState('r/developersIndia');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();
  const username = 'anonymous_user'; // This should be replaced with the actual username

  const handlePost = async () => {
    try {
      const response = await axios.post('http://localhost:8001/posts', { username, community, title, body });
      console.log('Post created:', response.data.post);
      setTitle('');
      setBody('');
      //addPost(response.data.post); // Add the new post to the main content
      navigate('/dashboard'); // Navigate back to the main content page
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-20 bg-white rounded-md">
      <h2 className="text-2xl font-bold mb-5">Create Post</h2>

      <div className="mb-4">
        <label htmlFor="community" className="block text-sm font-medium text-gray-700">Select a community</label>
        <select
          id="community"
          value={community}
          onChange={(e) => setCommunity(e.target.value)}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="r/developersIndia">r/developersIndia</option>
          <option value="r/programming">r/programming</option>
          <option value="r/reactjs">r/reactjs</option>
        </select>
      </div>

      <div className="mb-4">
        <div className="flex space-x-4">
          <button
            type="button"
            className={`px-4 py-2 ${selectedTab === 'text' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'} rounded-md`}
            onClick={() => setSelectedTab('text')}
          >
            Text
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${selectedTab === 'images' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'} rounded-md`}
            onClick={() => setSelectedTab('images')}
          >
            Images & Video
          </button>
          <button
            type="button"
            className={`px-4 py-2 ${selectedTab === 'link' ? 'bg-yellow-400 text-black' : 'bg-gray-200 text-gray-700'} rounded-md`}
            onClick={() => setSelectedTab('link')}
          >
            Link
          </button>
        </div>
      </div>

      {selectedTab === 'text' && (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 bg-gray-100 block w-full h-12 shadow-sm sm:text-sm border-gray-300 rounded-md"
              maxLength={300}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">Body</label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="5"
              className="mt-1 bg-gray-100 h-80 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
            ></textarea>
          </div>
        </>
      )}

      {selectedTab === 'images' && (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 h-12 bg-gray-100 block w-full shadow-sm sm:text-sm border rounded-md"
              maxLength={300}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Upload Images or Video</label>
            <input
              type="file"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-yellow-100 file:text-black-700 hover:file:bg-yellow-200"
              accept="image/*,video/*"
              multiple
            />
          </div>
        </>
      )}

      {selectedTab === 'link' && (
        <>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 h-12 block bg-gray-100 w-full shadow-sm sm:text-sm border rounded-md"
              maxLength={300}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="url" className="block text-sm font-medium text-gray-700">URL</label>
            <input
              type="url"
              id="url"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block h-12 bg-gray-100 w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </>
      )}

      <div className="flex justify-end">
        <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-md mr-2">Save draft</button>
        <button onClick={handlePost} className="bg-black text-white px-8 py-3 rounded-md">Post</button>
      </div>
    </div>
  );
};

export default CreatePost;
