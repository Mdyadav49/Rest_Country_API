const countryname = new URLSearchParams(location.search).get("countryname");
const countryImage = document.querySelector(".country-image");
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
const title = document.querySelector('.title')
const darkLightIcon = document.querySelector('#dark_light_icon')
const darkLightParent = document.querySelector('.dark_light_parent')
const iconMessage = document.querySelector('#iconmessage')

if (localStorage.getItem("Dark-theme") === "true") {
  document.body.classList.add("dark");
  iconMessage.innerText = "Light";
  darkLightIcon.classList.replace("fa-moon", "fa-sun");
} else {
  iconMessage.innerText = "Dark";
  darkLightIcon.classList.replace("fa-sun", "fa-moon");
}

darkLightParent.addEventListener('click',(e)=>{
    document.body.classList.toggle('dark')
    if(document.body.classList.contains('dark')){
    localStorage.setItem('Dark-theme', 'true')    
      iconMessage.innerText = "Light"
      darkLightIcon.classList.replace( 'fa-moon' , 'fa-sun')
    }else{
      localStorage.setItem('Dark-theme', 'false')
      iconMessage.innerText = "Dark"
      darkLightIcon.classList.replace('fa-sun' , 'fa-moon')
}
})



function fetchCountry(countryname){
fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
.then((res)=>res.json())
.then(([data])=>{
    countryImage.src = data.flags.svg
    countryNameh1.innerText = data.name.common;
    population.innerText = data.population.toLocaleString('en-IN')
    region.innerText = data.region   
    subRegion.innerText = data.subregion   
    capital.innerText = data.capital
    tld.innerText = data.tld
    languages.innerText = Object.values(data.languages)?.join(", ") 
    currencies.innerText = Object.values(data.currencies)[0].name
    borderCountries.innerHTML = `<b>Border Countries: </b>&nbsp;`
    if(data.name.nativeName){ 
        nativeName.innerText = Object.values(data.name.nativeName)[0].common 
    }else{
        nativeName.innerText = data.name.common 
    }
    if(data.borders){
        data.borders.forEach(border => {
       fetch(`https://restcountries.com/v3.1/alpha/${border}`)
       .then((res)=>res.json())
       .then(([borderData])=>{
        const a = document.createElement('a')
        a.classList.add('borderbtn')
        a.innerText = borderData.name.common
        borderCountries.append(a)
       })
    });
    }else{
        const p =  document.createElement('p')
        p.innerText = `Island Nation`
        borderCountries.append(p)
    }
    } 
)
}
fetchCountry(countryname)


borderCountries.addEventListener('click',(e)=>{
    if(e.target.classList.contains("borderbtn")){
        e.preventDefault()
        history.pushState(`${e.target.innerText}`, "", `?countryname=${e.target.innerText}`);
        fetchCountry(e.target.innerText)
    }
})

window.addEventListener("popstate", () => {
    console.log("hii")
  const country = new URLSearchParams(location.search).get("countryname");
  if (country) {    
    fetchCountry(country);
  }
});

