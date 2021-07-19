const URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(name) {
    console.log(name)
    return fetch(`${URL}/name/${name}?fields=name;capital;population;flag;languages`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(response.status);
                // throw new Error(response.status);
            }
            return response.json();
        });
}

export default { fetchCountries };