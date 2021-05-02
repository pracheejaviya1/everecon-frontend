import React from 'react';

const defaultState = {};
const UserContext = React.createContext(defaultState);

const UserContextProvider = ({ children }) => {
  const [myprofile, setProfile] = React.useState('');
  return (
    <UserContext.Provider value={[myprofile, setProfile]}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

export { UserContextProvider };
