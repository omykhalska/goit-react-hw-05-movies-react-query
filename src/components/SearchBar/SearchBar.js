import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

import { Form, Input, SearchBtn } from './SearchBar.styled';

export function SearchBar({ onFormSubmit }) {
  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        type="text"
        name="query"
        autoComplete="off"
        placeholder="Поиск фильмов"
      />
      <SearchBtn type="submit" aria-label="search">
        <FaSearch />
      </SearchBtn>
    </Form>
  );
}

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
