import { clearCard } from './clearListAndCard';

export default function createListCountry(data) {
  const countryList = document.querySelector('.country-list');
  console.log(data);
  const countrysList = data
    .map(
      ({ name, flags }) => `  <div list-card>
        <li class="list-flag">
        <img src="${flags.png}" alt="${name.official} flag" width="30">
        </li>
        <li class="list-country">${name.official}</li>
      </div>`
    )
    .join('');

  console.log(countrysList);

  countryList.innerHTML = countrysList;
  clearCard();
}
