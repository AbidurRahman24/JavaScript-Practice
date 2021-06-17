// fetch('https://randomuser.me/api/?results=5000')
// .then(res => res.json())
// .then(data => console.log(data))
fetch('https://randomuser.me/api/')
  .then((res) => res.json())
  .then(data => { 
        console.log(data.results[0]);
        const {name, phone, location, picture} = data.results[0]
        const {medium} = picture
        const {country, postcode} = location
        const {first, last} = name
        document.getElementById('name').innerText =   
        `
        My name is: ${first} ${last}.
        Phone: ${phone}
        Address: ${country} postcode: ${postcode}
        picture: ${medium}

        `
        
  });