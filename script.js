fetch("https://restcountries.eu/rest/v2/all")
.then(res => res.json())
.then(data =>{
    displayCountries(data);
})

const displayCountries = countries =>{
    const countiesDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'countryDiv'
        const countryInfo = `
        <h3 class='countryName'>${country.name}</h3>
        <button onclick="countryDetails('${country.name}')">Details</button>
        `
        countryDiv.innerHTML = countryInfo;
        countiesDiv.appendChild(countryDiv);
    })
}

const countryDetails = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
    .then(res => res.json())
    .then(data =>{
        renderDetails(data[0])
    });
}

const renderDetails = country =>{
    const countryDetailsDiv = document.getElementById('countryDetailsDiv');
    const detailInfo = `
    <h1>${country.name}</h1>
    <p>Capital : ${country.capital}.</p>
    <p>Population : ${country.population}.</p>
    <p>Region : ${country.region}.</p>
    <img src='${country.flag}'>
    `;
    countryDetailsDiv.innerHTML = detailInfo;
}