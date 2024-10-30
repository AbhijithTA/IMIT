import  { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import PostCard from "./postCard";
import ImageUploadModal from "./ImageUpload";

const FeedComponent = () => {
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/posts`, {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, [user.token]);

 
  const handleUploadSuccess = (newPost) => {
    setPosts([newPost, ...posts]); 
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <button
        className="bg-[#d09b6e] text-white py-2 px-6 rounded-full mb-4"
        onClick={() => setIsModalOpen(true)}
      >
        Upload Images
      </button>

      {isModalOpen && (
        <ImageUploadModal
          onClose={() => setIsModalOpen(false)}
          onUploadSuccess={handleUploadSuccess} 
        />
      )}

      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default FeedComponent;
