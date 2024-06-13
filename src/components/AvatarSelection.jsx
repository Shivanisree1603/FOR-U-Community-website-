import React, { useState } from 'react';

const avatars = [
  'https://i.pravatar.cc/150?img=20',
  'https://i.pravatar.cc/150?img=2',
  'https://i.pravatar.cc/150?img=5',
  'https://i.pravatar.cc/150?img=4',
  // Add paths to more avatar images as needed
];

const AvatarSelection = ({ selectedAvatar, onSelectAvatar }) => {
  return (
    <div className="flex space-x-4">
      {avatars.map((avatar, index) => (
        <img
          key={index}
          src={avatar}
          alt={`Avatar ${index + 1}`}
          className={`w-16 h-16 cursor-pointer rounded-full ${selectedAvatar === avatar ? 'border-4 border-black' : 'border'}`}
          onClick={() => onSelectAvatar(avatar)}
        />
      ))}
    </div>
  );
};

export default AvatarSelection;
