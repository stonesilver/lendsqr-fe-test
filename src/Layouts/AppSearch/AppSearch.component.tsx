import * as React from 'react';
import { ReactComponent as SearchIcon } from 'assets/svg/search.svg';
import './AppSearch.styles.scss';

const AppSearch = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    searchInput && alert(JSON.stringify(searchInput));
  };

  return (
    <form onSubmit={handleSubmit} className='app-search'>
      <input
        type='search'
        value={searchInput}
        onChange={handleChange}
        placeholder='Search for anything'
        className='app-search-input'
      />
      <button type='submit' className='app-search-submit-btn'>
        <SearchIcon />
      </button>
    </form>
  );
};

export default AppSearch;
