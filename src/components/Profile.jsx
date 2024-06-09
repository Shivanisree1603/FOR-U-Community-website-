import React, { useState } from 'react';
import AvatarSelection from './AvatarSelection';

const Profile = () => {
  const [selectedAvatar, setSelectedAvatar] = useState('images\avatar1.png');
  const [firstName, setFirstName] = useState('Michael');
  const [lastName, setLastName] = useState('Jasparo');
  const [email, setEmail] = useState('michaeljasparo@gmail.com');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Handle save logic here (e.g., make an API call to save the updated profile)
  };

  return (
    <div className="flex bg-yellow-400  ">
      <div className="w-1/5 p-4 bg-white">
        <nav className="space-y-4">
          <a href="#" className="block py-2 px-4 bg-black  text-white rounded">My Profile</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Security</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Teams</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Team Member</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Notifications</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Billing</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Data Export</a>
          <a href="#" className="block py-2 px-4 text-gray-700">Delete Account</a>
        </nav>
      </div>
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex items-center space-x-6 mb-4">
            <img src={selectedAvatar} alt="Profile Avatar" className="w-24 h-24 rounded-full" />
            <div>
              <h2 className="text-2xl font-semibold">Micheal Jascasic</h2>
              <p>Law Office of Micheal Jascasic</p>
              <p>4140 Parker Rd. Allentown</p>
            </div>
          </div>
          <AvatarSelection selectedAvatar={selectedAvatar} onSelectAvatar={setSelectedAvatar} />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Personal Information</h2>
            {!isEditing && (
              <button onClick={() => setIsEditing(true)} className="text-black">Edit</button>
            )}
          </div>
          {isEditing ? (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border rounded"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button onClick={() => setIsEditing(false)} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                <button onClick={handleSave} className="px-4 py-2 bg-black text-white rounded">Save</button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">First Name</p>
                <p>{firstName}</p>
              </div>
              <div>
                <p className="font-semibold">Last Name</p>
                <p>{lastName}</p>
              </div>
              <div>
                <p className="font-semibold">Email Address</p>
                <p>{email}</p>
              </div>
            </div>
          )}
        </div>
       
      </div>
    </div>
  );
};

export default Profile;
