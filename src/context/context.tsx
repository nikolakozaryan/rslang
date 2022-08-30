import React, { createContext } from 'react';

const ApplicationAccessContext = createContext<{
    applicationAccess: 'registration' | 'authorization' | '';
    setApplicationAccess: React.Dispatch<React.SetStateAction<'registration' | 'authorization' | ''>>;
} | null>(null);

export default ApplicationAccessContext;
