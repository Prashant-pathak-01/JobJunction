import React from 'react';
import { SignIn } from '@clerk/clerk-react';
export default function SignInPage() {
  return (
    <div className="flex p-28 bg-secondaryColorB justify-center">
      <SignIn />
    </div>
  );
}
