import Notiflix from 'notiflix';
import { clearCard } from './clearListAndCard';
import { clearList } from './clearListAndCard';

Notiflix.Notify.init({
  position: 'center-center',
  timeout: 2000,
});

export default function fetchCountries(name) {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
      clearCard();
      clearList();
    });
}
