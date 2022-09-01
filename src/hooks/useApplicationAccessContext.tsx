import React, { useContext } from 'react';
import ApplicationAccessContext from '../context/context';

const useApplicationAccessContext = () => {
  const appContext = useContext(ApplicationAccessContext);
  if (!appContext) {
    throw new Error();
  }
  return appContext;
};

export default useApplicationAccessContext;
