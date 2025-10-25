import React, { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const Profile = () => {
  const { user } = useContext(AuthContext); // current user from context
  const [name, setName] = useState(user?.displayName || "");
  const [photo, setPhoto] = useState(user?.photoURL || "");

  const handleUpdateProfile = (e) => {
    e.preventDefault();

    // Firebase built-in update function
    updateProfile(user, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        toast.success("✅ Profile Updated Successfully!");
      })
      .catch((error) => {
        toast.error("❌ " + error.message);
      });
  };

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-white to-sky-200 p-6 rounded-2xl shadow-lg mt-10 border">
      <h2 className="text-2xl font-bold text-center mb-4">Update Profile</h2>

      {/* Profile Preview */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={photo || "https://i.ibb.co/4pDNDk1/avatar.png"}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-200 object-cover"
        />
        <p className="mt-2 text-gray-700 font-semibold">
          {user?.email || "No Email"}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleUpdateProfile} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-600 mb-1"> Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-600 mb-1">Photo URL</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-900 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default Profile;
