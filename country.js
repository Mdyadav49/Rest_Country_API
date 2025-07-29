const countryname = new URLSearchParams(location.search).get("countryname");

const countryNameh1 = document.querySelector(".country-name");
const nativeName = document.querySelector(".native-name");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".sub-region");
const capital = document.querySelector(".capital");
const tld = document.querySelector(".top-level-domain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");
const borderCountries = document.querySelector(".border-countries");

fetch(`https://restcountries.com/v3.1/name/${countryname}`)
.then((res)=>res.json())
.then(([data])=>{
    console.log(data)
    countryNameh1.innerText = data.name.common;
    population.innerText = data.population.toLocaleString('en-IN')
    region.innerText = data.region   
    subRegion.innerText = data.subregion   
    capital.innerText = data.capital
    tld.innerText = data.tld
    currencies.innerText = Object.values(data.currencies)[0].name

    if(data.name.nativeName){ 
        nativeName.innerText = Object.values(data.name.nativeName)[0].common 
    }else{
        nativeName.innerText = data.name.common 
    }
})
