let lat = 0.0;
let long = 0.0;
let apiKey = "e9f510d9184b40d4954172953251711";
let baseURL = "http://api.weatherapi.com/v1"
let extension = "/current.json"
let completeURL = "";

/*

fillThermometer generates the inner html code required to fill a div that represents a thermostat.

*/

function fillThermometer(farenheit) {

    const thermometer = document.getElementsByClassName("thermometer")[0];
    thermometer.style.height = (400 - (farenheit * 4)) + "px";
}

/*

printLocation generates the inner html code required to display the temperature and location.

*/

function printLocation(farenheit, city, region, country) {
    const location_div = document.getElementsByClassName("readOut")[0];
    location_div.innerHTML = farenheit + " degrees Farenheit" + "<br><br>" + "\
                                City: " + city + "<br>" + "Region: " + region + "<br>" + "\
                                Country: " + country;
}

/*

getPosition calls getCurrentPoisition with getTemp as a callback function.

*/

function getPosition() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getTemp);
    }
    else {
        alert("No coordinates found.");
    }

}

/*

getTemp generates the coordinates and then makes a call to the weather api using the coordinates. 
The response is then verified and returned as a json object. The data is parsed and processed upon 
which it is displayed using the fillThermometer and printLocation functions that were previously discussed.

*/

function getTemp(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    completeURL = baseURL + extension + "?" + "key=" + apiKey + "&" + "q=" + lat + "," + long + "&aqi=no";

    fetch(completeURL)
        .then(response => {

            if (!response.ok) {
                throw new Error("Fetch error")
            }

            return response.json();
        })
        .then(data => {
            
            const current = data.current;
            var farenheit = current.temp_f;
            var celsius = current.temp_c;
            
            const location = data.location;
            var city = location.name;
            var region = location.region;
            var country = location.country;

            fillThermometer(farenheit);
            printLocation(farenheit, city, region, country)

        })
        .catch(error => {
            console.log("Fetch error: ", error);
        })

    

}