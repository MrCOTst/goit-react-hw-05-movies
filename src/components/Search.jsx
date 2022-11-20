import { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { SearchForm, SearchButton, SearchInput } from './Search.styled';


export default function Search({ onSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = event => {
    setQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      NotificationManager.info('Print something');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
   
      <>
      <SearchForm onSubmit={handleSubmit}>
        <SearchButton type="submit">
          <BiSearch
            style={{
              width: 36,
              height: 36,
            }}
          />
        </SearchButton>

        <SearchInput
          value={query}
          onChange={handleChange}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
      </SearchForm>
      <NotificationContainer />
      </>
   
  );
}
