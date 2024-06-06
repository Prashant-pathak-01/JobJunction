import React, { useEffect } from 'react';
import Header from './Header';
import Body from './Body';
import { useUser } from '@clerk/clerk-react';
import { addUser } from '../../APIs/user';

function HomePage() {
  const { user, isSignedIn } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      if (isSignedIn && user) {
        try {
          const userData = {
            Email: user.primaryEmailAddress.emailAddress ,
            Name: user.fullName || "",
            Photo: user.imageUrl
          };
          const res = await addUser(userData);
          console.log(res);
        } catch (error) {
          console.error('Error adding user:', error);
        }
      }
    };

    fetchData();
  }, [user, isSignedIn]);

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default HomePage;
