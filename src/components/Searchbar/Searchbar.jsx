import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm.jsx';
import s from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {

  return (
    <header className={s.Searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
  
}

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
