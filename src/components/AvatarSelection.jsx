import React, { useState } from 'react';

const avatars = [
  'images\avatar1.png',
  'images\Logo-y.png',
  'avatar3.png',
  'avatar4.png',
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
