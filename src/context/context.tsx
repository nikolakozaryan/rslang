import { Dispatch, SetStateAction, createContext } from 'react';

const ApplicationAccessContext = createContext<{
  isSignedIn: boolean;
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
} | null>(null);

export default ApplicationAccessContext;
