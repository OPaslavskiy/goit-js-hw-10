import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';
import createCountryCard from './createCountryCard';

let userrRequest;

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputForCountry = document.querySelector('#search-box');

inputForCountry.addEventListener(
  'input',
  debounce(usersSearch, DEBOUNCE_DELAY)
);

export default function usersSearch() {
  userrRequest = inputForCountry.value;
  fetchCountries(userrRequest)
    .then(data => {
      if (data.length > 10) {
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (data.length === 1) {
        createCountryCard(data);
      } else if (data.length > 1 && data.length <= 10) {
        createListCountry(data);
      }
    })
    .catch(() => {});
}

// function createListCountry(data) {}
