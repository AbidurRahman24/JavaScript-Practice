fetch("https://restcountries.eu/rest/v2/all")
  .then((res) => res.json())
  .then((data) => loadData(data));

const loadData = countries => {
  const div = document.getElementById("countries");
  // for (let i = 0; i < countries.length; i++) {
  //   const country = countries[i];
    // console.log(country.capital);
    const countryDiv = document.createElement("div");
    countryDiv.className = 'country'
    countryDiv.innerHTML = `
    <h1>${country.name}</h1>
    <p>${country.capital}</p>
    <button onclick="countryDetails('${country}')">details</button>
    `
    div.appendChild(countryDiv);
  }
};

const countryDetails = (name) =>{
  const url = `https://restcountries.eu/rest/v2/name/${name}`
  fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))

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