const URL_BASE = 'https://restcountries.com/v3.1/name/'

const fetch_country = async (country) => {
    const response = await fetch(URL_BASE + country)
    if (response.status === 200) {
        const INFO = response.json()
        console.log(INFO)
    }
}

fetch_country("Portugal")