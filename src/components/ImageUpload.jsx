// src/components/ImageUploadModal.js
import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext"; 

const ImageUploadModal = ({ onClose, onUploadSuccess }) => {
  const { user } = useContext(AuthContext); // Get the user from context
  const [imageFile, setImageFile] = useState(null);
  const [caption, setCaption] = useState("");

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!imageFile) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("caption", caption);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`, 
          },
        }
      );
      onUploadSuccess(response.data); 
      onClose(); 
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Failed to upload image. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
        
        <input type="file" accept="image/*" onChange={handleFileChange} className="mb-4" />
        
        <textarea
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          placeholder="Add a caption..."
          className="w-full p-2 border border-gray-300 rounded-lg mb-4"
          rows="3"
        />

        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-lg">Cancel</button>
          <button onClick={handleUpload} className="px-4 py-2 bg-[#d09b6e] text-white rounded-lg">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploadModal;
