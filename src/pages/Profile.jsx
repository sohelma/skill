// src/pages/Profile.jsx
import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    if (!name || !photoURL) {
      toast.error("Name and Image URL cannot be empty!");
      return;
    }

    try {
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block mb-1">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="w-full border p-2 rounded"
              placeholder="Enter image URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>

        <div className="mt-4 text-center">
          <p>
            <strong>Email:</strong> {user?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
