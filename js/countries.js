fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data=>displayCountries(data));

const displayCountries=(countries)=>{

    const countriesDiv=document.getElementById('countries');
    countries.forEach(country =>{
        const div=document.createElement('div');
        div.classList.add('country');
        div.innerHTML=`
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
            <button onClick="loadCountryDetails('${country.name}')">Details</button>
        `
        countriesDiv.appendChild(div);
    })
}
const loadCountryDetails = (name)=>{
    const url=`https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
        .then(res=>res.json())
        .then(data=>displayDetails(data[0]));
}

const displayDetails=data=>{
    const div = document.getElementById('country-details');
    div.innerHTML=`
                 <h4>Name: ${data.name}</h4>
                <p>Population: ${data.population}</p>
                <p>Region: ${data.region}</p>
                <h4>Flag: </h4>
                <img width="200px" src="${data.flag}" >
    `
}