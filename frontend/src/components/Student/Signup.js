import React from 'react';
import { SignUp  } from '@clerk/clerk-react';

export default function SignInPage() {
  return (
    <div className="flex p-28 bg-secondaryColorB justify-center">
      <SignUp />
    </div>
  );
}
