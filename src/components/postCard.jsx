import React, { useState } from 'react';
import api from '../config/api';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = async () => {
    try {
      await api.post(`/posts/${post._id}/like`);
      setLikes((prevLikes) => prevLikes + 1);
    } catch (error) {
      console.error('Failed to like the post', error);
    }
  };

  const handleComment = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/posts/${post._id}/comment`, { text: newComment });
      setComments([...comments, response.data]);
      setNewComment('');
    } catch (error) {
      console.error('Failed to comment', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <img src={post.user.avatar} alt="user avatar" className="w-10 h-10 rounded-full" />
        <div className="ml-3">
          <h3 className="font-semibold">{post.user.name}</h3>
          <p className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</p>
        </div>
      </div>
      
      <p className="mb-4">{post.text}</p>

      {post.image && (
        <img src={post.image} alt="post content" className="w-full h-64 object-cover rounded-lg mb-4" />
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <button onClick={handleLike} className="text-[#d09b6e] font-semibold">
            Like {likes > 0 && `(${likes})`}
          </button>
          <span>{comments.length} Comments</span>
        </div>
        <button className="text-gray-400">Report</button>
      </div>

      <form onSubmit={handleComment} className="flex items-center gap-2 mb-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full bg-gray-100 p-2 rounded-lg"
        />
        <button type="submit" className="bg-[#d09b6e] text-white px-4 py-2 rounded-lg">
          Comment
        </button>
      </form>

    
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment._id} className="flex items-center gap-2">
            <img src={comment.user.avatar} alt="user avatar" className="w-8 h-8 rounded-full" />
            <div>
              <p className="text-sm font-semibold">{comment.user.name}</p>
              <p className="text-sm text-gray-600">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCard;
