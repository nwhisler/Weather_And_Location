# Weather_Location

## Overview

Weather_Location is a lightweight web application that retrieves real-time weather data based on a user-provided location or the user’s current geographic coordinates. The app integrates with a public weather API to fetch current conditions and dynamically renders the results in the browser.

The project demonstrates API integration, geolocation handling, asynchronous JavaScript (fetch), and dynamic DOM updates using HTML, CSS, and JavaScript.

---

## Features
* Option to use browser geolocation for current location weather
* Displays key weather metrics such as:
  * Temperature
* Error handling for invalid locations or failed API responses
* Clean, responsive UI

---

## How It Works

### 1. User Input

The user:
* Clicks a button to use the browser’s `navigator.geolocation` API.

### 2. API Request

The app constructs a request URL using:

* The location (city name or latitude/longitude)
* A weather API key

It then sends a request using `fetch()` and parses the JSON response.

### 3. Data Processing

The returned JSON is processed to extract relevant fields such as:

* `main.temp`

### 4. DOM Rendering

The app dynamically updates the page with the retrieved weather data without refreshing the browser.

---

## Setup Instructions

### 1. Obtain an API Key

Register with your weather data provider (e.g., OpenWeatherMap) and obtain an API key.

### 2. Insert API Key

In `script.js`, replace the placeholder value in the API request URL with your API key:

```javascript
const apiKey = "YOUR_API_KEY_HERE";
```
* A free tier api key is provided for a trial run of the program


### 3. Run the App

Using a browser of your choice.

---

## Dependencies

* Modern web browser (Chrome, Edge, Firefox, etc.)
* Internet connection
* Valid weather API key

No backend or external frameworks are required.

---
