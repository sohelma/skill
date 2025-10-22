import React, { useState } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const Profile = () => {
  const user = auth.currentUser;
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      if (!user) {
        toast.error("No user found! Please login first.");
        return;
      }
      await updateProfile(user, { displayName: name, photoURL: photo });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Toaster position="top-center" />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
        <img
          src={photo || "https://via.placeholder.com/100"}
          alt="User Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4 border"
        />
        <form onSubmit={handleUpdate} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
