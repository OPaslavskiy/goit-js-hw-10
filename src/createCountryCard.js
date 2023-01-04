import { clearList } from './clearListAndCard';

export default function createCountryCard(data) {
  const el = data[0];
  const countryInfo = document.querySelector('.country-info');
  countryInfo.innerHTML = `<div class="conteiner-for-name"><img src="${
    el.flags.svg
  }" alt="${el.name.official} flag" class="flag" width="190" height=auto>
      <h2 class="country-name">${el.name.official}</h2>
      </div>
      <p class="info"><span class="heder-span">Capital: </span>${el.capital}</p>
      <p class="info"><span class="heder-span">Population: </span>${
        el.population
      }</p>
      <p class="info"><span class="heder-span">Languages: </span>${Object.values(
        el.languages
      ).join(', ')}</p>`;
  clearList();
}
