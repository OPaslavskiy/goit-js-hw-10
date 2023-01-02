import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';

const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const inputForCountry = document.querySelector('#search-box');

let userrRequest;

inputForCountry.addEventListener(
  'input',
  debounce(usersSearch, DEBOUNCE_DELAY)
);

function usersSearch() {
  userrRequest = inputForCountry.value;
  fetchCountries(userrRequest).then(data => {
    if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    } else console.log(data);
  });
}
