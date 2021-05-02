import React from 'react';

const defaultState = {};
const SearchContext = React.createContext(defaultState);

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = React.useState('');
  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;

export { SearchContextProvider };
