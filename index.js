import allCountryData from "./allCountriesData.js";
const countriesContainer = document.querySelector(".countries-container");
const searchIcon = document.querySelector('.searchIcon')
const searchCountry = document.querySelector('.searchCountry')
const regionSearch = document.querySelector("#region-search");
const darkLightIcon = document.querySelector('#dark_light_icon')
const iconMessage = document.querySelector('#iconmessage')
const darkLightParent = document.querySelector('.dark_light_parent')

  searchIcon.addEventListener('click',()=>{
    searchCountry.focus()
  })

  if (localStorage.getItem("Dark-theme") === "true") {
  document.body.classList.add("dark");
  iconMessage.innerText = "Light";
  searchIcon.src = `images/icons8-search (1).svg`
  darkLightIcon.classList.replace("fa-moon", "fa-sun");
} else {
  searchIcon.src = `images/searchIcon.svg`
  iconMessage.innerText = "Dark";
  darkLightIcon.classList.replace("fa-sun", "fa-moon");
}

  darkLightParent.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
    localStorage.setItem('Dark-theme', 'true')    
      iconMessage.innerText = "Light"
      searchIcon.src = `images/icons8-search (1).svg`
      darkLightIcon.classList.replace( 'fa-moon' , 'fa-sun')
    }else{
      localStorage.setItem('Dark-theme', 'false')
      iconMessage.innerText = "Dark"
      searchIcon.src = `images/searchIcon.svg`
      darkLightIcon.classList.replace('fa-sun' , 'fa-moon')
    }
  })

  allCountryData.forEach((countrydata) => {
    createCountryCard(countrydata);
  });

  function createCountryCard(countrydata) { 
    const CountryCard = document.createElement("a");
    CountryCard.classList.add("country-card");
    CountryCard.href = `country.html?countryname=${countrydata.name}` 
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
    let search = allCountryData.filter((Country)=>Country.name.toLowerCase().slice(0,searchCountry.value.length).includes(e.target.value.toLowerCase()))
    search.forEach((countrydata) => {
    createCountryCard(countrydata);
  });
  })
