import React, { createContext } from 'react';

const ApplicationAccessContext = createContext<{
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export default ApplicationAccessContext;
