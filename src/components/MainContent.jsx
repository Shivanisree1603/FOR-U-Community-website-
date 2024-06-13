import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainContent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8001/get_posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addPost = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <div className="ml-64 mr-64 p-4 overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
      <div className="mt-16"></div>
      {/* <div className="bg-white shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold">How to become rich and live a happy life with a job</h2>
        <p className="text-gray-700 mt-2">
          Hello everyone, I work as a web developer in a startup company. My salary is 10,000 rupees and there is no hope for an increment. I have one more year left on my contract. The company is exploiting me. I am feeling overwhelmed by society, family, office, and my personal life. After working for a year, I have realized that a job cannot give you a happy life. I have many dreams that I want to fulfill, but this job won't help me achieve them. Since childhood, I have been given false hope, like being told in school that if you don't study well, you'll fail in life. The same hope was given to my friends who were toppers in class, and today they are unemployed. I want to escape this rat race. Staying inside this job is making me miserable.
        </p>
      </div> */}

      {/* <div className="bg-white shadow-md p-4 mb-4">
        <h2 className="text-xl font-semibold">Sample Content</h2>
        <p className="text-gray-700 mt-2">
          IBM watsonx.governance helps businesses drive responsible, transparent machine learning and generative AI workflows on one integrated platform.
        </p>
      </div> */}

      {/* <div className="bg-white p-6 rounded-lg shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-2">IBM watsonx.governance helps businesses drive responsible...</h2>
        <p>IBM watsonx.governance helps businesses drive responsible, transparent machine learning and generative AI workflows on one integrated platform. Get the details on the critical component of watsonx that allows you to direct, manage and monitor your organization's AI activities.</p>
        <div className="flex items-center mt-4">
          <span className="text-gray-500 text-sm">Sponsored</span>
        </div>
      </div> */}

      <div>
        <h1></h1>
        {posts.map(post => (
          <div key={post._id} className="bg-white shadow-md p-4 mb-4 rounded-md">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-700 mt-2">{post.body}</p>
            <p className="text-gray-500 text-sm">Posted by {post.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
