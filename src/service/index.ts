
const API_URL = 'https://geocoder.api.here.com/search/6.2/geocode.json'
const APP_ID = process.env.HERE_APP_ID
const APP_CODE = process.env.HERE_API_KEY

export const getData = async () => {
    try {
        const response = await fetch(`https://geocoder.api.here.com/search/6.2/geocode.json
        ?languages=en-US
        &maxresults=4
        &searchtext=Sunnyvale
        &app_id={YOUR_APP_ID}
        &app_code={YOUR_APP_CODE}
        `)
        const data = await response.json()
        return [data, null]
    } catch (error) {
        console.log(error)
        return [null, error]
    }
}