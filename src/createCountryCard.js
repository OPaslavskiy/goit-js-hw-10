export default function createCountryCard(data) {
  const countryInfo = document.querySelector('.country-info');
  const el = data[0];

  countryInfo.innerHTML = `<div class="conteiner-for-name"><img src="${
    el.flags.svg
  }" alt="${el.name.official} flag" class="flag" width="40">
      <h2>${el.name.official}</h2>
      </div>
      <p class="capital"><span class="heder-span">Capital: </span>${
        el.capital
      }</p>
      <p class="population"><span class="heder-span">Population: </span>${
        el.population
      }</p>
      <p class="languages"><span class="heder-span">Languages: </span>${Object.values(
        el.languages
      ).join(', ')}</p>`;
}
