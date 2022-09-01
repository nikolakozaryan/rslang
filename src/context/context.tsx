import React, { createContext } from 'react';

const ApplicationAccessContext = createContext<{
  isSignedIn: boolean;
  setIsSignedIn: React.Dispatch<React.SetStateAction<boolean>>;
  applicationAccess: 'registration' | 'authorization' | '';
  setApplicationAccess: React.Dispatch<React.SetStateAction<'registration' | 'authorization' | ''>>;
} | null>(null);

export default ApplicationAccessContext;
