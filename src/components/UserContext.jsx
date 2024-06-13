import React, { createContext, useState, useEffect } from 'react';

// Create a UserContext with default value as null
export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from an API or authentication service
    // This is just a placeholder, replace it with your actual fetch logic
    const fetchUserData = async () => {
      const userData = { username: 'Star8596' }; // Replace with your actual user data fetch logic
      setUser(userData);
    };

    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
