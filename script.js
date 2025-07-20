import allCountryData from "./allCountriesData.js";
const countriesContainer = document.querySelector(".countries-container");
const regionSearch = document.querySelector("#region-search");
const searchCountry = document.querySelector('.searchCountry')

allCountryData.forEach((countrydata) => {
  createCountryCard(countrydata);
});

function createCountryCard(countrydata) {
  const CountryCard = document.createElement("div");
  CountryCard.classList.add("country-card");
  CountryCard.innerHTML = `
    <img src=${countrydata.flags.svg} alt= ${countrydata.name?.common ?? countrydata.name } flag>
        <div class="country-data">
            <h3>${countrydata.name?.common ?? countrydata.name}</h3>
            <p><b>Population:</b>${countrydata.population.toLocaleString("en-IN")}</p>
            <p><b>Region:</b> ${countrydata.region}</p>
            <p><b>Capital:</b> ${countrydata.capital}</p>
        </div> `;
  countriesContainer.append(CountryCard);
}

regionSearch.addEventListener("change", () => {
  fetchCountry(regionSearch.value);
});

async function fetchCountry(region) {
  countriesContainer.innerHTML = "";
  const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
  const countrydata = await response.json();
  countrydata.forEach((countrydata) => {
    createCountryCard(countrydata);
  });
}

searchCountry.addEventListener('input',(e)=>{
  countriesContainer.innerHTML = "";
  let search = allCountryData.filter((Country)=>Country.name.toLowerCase().slice(0,searchCountry.value.length).includes(e.target.value))
  search.forEach((countrydata) => {
  createCountryCard(countrydata);
});
})
