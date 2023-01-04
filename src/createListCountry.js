import { clearCard } from './clearListAndCard';

export default function createListCountry(data) {
  const countryList = document.querySelector('.country-list');
  console.log(data);
  const countrysList = data
    .map(
      ({ name, flags }) => `  <div class="list-card">
        <li class="list-flag">
        <img src="${flags.png}" alt="${name.official} flag" class="flag-mini" width="40" height="auto">
        </li>
        <li class="list-country">${name.official}</li>
      </div>`
    )
    .join('');

  countryList.innerHTML = countrysList;
  clearCard();
}
