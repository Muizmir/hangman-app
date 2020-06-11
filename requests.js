const getPuzzle = async (wordCount) =>  {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`)
        if (response.status === 200){
            const data = await response.json()
            return data.puzzle
        } else {
            throw new Error('Unable to fetch puzzle')
        }
}

const getCountry = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all')
        if (response.status === 200) {
            const data = await response.json()
            return data.find((country) => country.alpha2Code === countryCode)
        } else {
            throw new Error('Unable to fetch puzzle')
        }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=9868479c6f3455')
        if (response.status === 200) {
            const data = await response.json()
            return data
        } else {
            throw new Error('Unable to fetch location')
        }
}

const getCurrentCountry = async() =>{
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country.name
}


// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     })
// }

// const getCountryOld = (countryCode) => {
//     return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json()
//         } else {
//             throw new Error('Unable to fetch puzzle')
//         }
//     }).then((data) => {
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         return country
//     })
// }

// const getCountryOlder = (countryCode) => new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest()

//     countryRequest.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             resolve(country)
//         } else if (e.target.readyState === 4) {
//             reject('An error occured')
//         }
//     })

//     countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all')
//     countryRequest.send()
// })