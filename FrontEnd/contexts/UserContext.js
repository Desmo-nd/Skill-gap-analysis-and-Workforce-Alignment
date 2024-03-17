import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ id: null, hasShop: false });

  useEffect(() => {
    const fetchUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('id');
        if (userId) {
          setUserData((prevUserData) => ({ ...prevUserData, id: userId }));
        }
      } catch (error) {
        console.error('Error fetching userId from AsyncStorage:', error);
      }
    };

    fetchUserId();
  }, []);

  const updateUserShopStatus = async (hasShop) => {
    const newUserData = { ...userData, hasShop };
    setUserData(newUserData);

    try {
      await AsyncStorage.setItem('userData', JSON.stringify(newUserData));
    } catch (error) {
      console.error('Error saving user data to AsyncStorage:', error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, updateUserShopStatus }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
