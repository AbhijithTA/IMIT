// src/components/FeedComponent.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import feed1 from "../assets/feed1.png";
import feed2 from "../assets/feed2.png";

const FeedComponent = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([
    // Sample data to illustrate posts
    {
      id: 1,
      username: 'Anitta K C',
      content: 'Lorem ipsum is simply dummy text of the printing and typesetting industry.',
      image: feed1, // Replace with actual image path
      likes: 23,
      comments: [
        { id: 1, username: 'Sruthesh', content: 'Nice Images...Good Work' },
        { id: 2, username: 'Anitta K C', content: 'Thanku...' }
      ]
    },
    {
      id: 2,
      username: 'Paul K P',
      content: 'Another dummy text content for this post.',
      image: feed2, // Replace with actual image path
      likes: 15,
      comments: []
    }
  ]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      {posts.map(post => (
        <div key={post.id} className="bg-white shadow-lg rounded-lg p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold">{post.username}</h3>
            <button className="text-sm text-gray-500">Report</button>
          </div>
          <p className="text-gray-600 mt-2">{post.content}</p>
          {post.image && (
            <img src={post.image} alt="Post" className="w-full h-64 object-cover rounded-lg mt-4" />
          )}
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-500">{post.likes} Likes</span>
            <span className="text-gray-500">{post.comments.length} Comments</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <button className="px-4 py-2 border border-red-500 rounded-full text-red-500">Like</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded-full">Comment</button>
          </div>
          {/* Comments Section */}
          {post.comments.length > 0 && (
            <div className="mt-4 space-y-2">
              {post.comments.map(comment => (
                <div key={comment.id} className="bg-gray-100 p-2 rounded-lg">
                  <p className="font-semibold">{comment.username}</p>
                  <p className="text-gray-600">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FeedComponent;
