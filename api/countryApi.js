fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => loadData(data));
  // dataLoad
const loadData = countries => {
  const div = document.getElementById("countries");
  // for (let i = 0; i < countries.length; i++) {
  //   const country = countries[i];
    // console.log(country.capital);
    countries.forEach(country => {
      const countryDiv = document.createElement("div");
    countryDiv.className = 'country'
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>${country.capital}</p>
    <button onclick='displayContry("${country.name}")'>details</button>
    `
    div.appendChild(countryDiv);
    });
    
  }
const displayContry = name =>{
  const url = `https://restcountries.eu/rest/v2/name/${name} `
  fetch(url)
  .then(res => res.json())
  .then(data => countryDetails(data[0]))
}


// country details
const countryDetails = country =>{
  console.log(country);
  const countryDetail = document.getElementById('countryDetail');
  const {name, capital, population,flag} = country
  countryDetail.innerHTML = `
  <img src='${flag}'></img>
  <h1>${name}</h1>
  <p>${capital}</p>
  <p>${population}</p>
  `
}











// console.log(data[0].name)
// function loadData(){
//     const datainfo = document.getElementById('countryInformation')
//     for (let i = 0; i < data.length; i++) {
//         const element = data[i];
//         console.log(element);
//     }
//
// countryDiv.className = 'country'
    // const h3 = document.createElement('h3')

    // h3.innerText = country.name
    // countryDiv.appendChild(h3)

    // const p = document.createElement('p')
    // p.innerText = country.capital ;
    // countryDiv.appendChild(p)