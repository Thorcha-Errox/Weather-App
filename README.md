# Weather Forecast App 🌦️

A modern, dynamic weather dashboard built with **React** and **Vite**. This application provides real-time weather insights using the **OpenWeather API**, featuring a custom-designed UI with dynamic icon mapping and detailed atmospheric data.

## Live Features 

* **Smart Search:** Search weather by city name using an interactive search bar (supports both `click` and `Enter` key triggers).
* **Dynamic Icon Mapping:** Maps over 15+ OpenWeather condition codes to custom high-quality local assets for both day and night cycles.
* **Detailed Metrics:** * **Real-feel Temperature:** Displays "Feels Like" data in Celsius.
    * **Wind & Humidity:** Real-time wind speed (km/h) and humidity percentage.
    * **Solar Events:** Accurate, local-formatted Sunrise and Sunset times.
* **Input Handling:** Optimized search using React `useRef` to minimize unnecessary re-renders.
* **Error Management:** Built-in alerts for empty searches or invalid city names.

## 🛠️ Tech Stack

* **Frontend:** React.js (Hooks: `useState`, `useEffect`, `useRef`)
* **Build Tool:** Vite (Fast Refresh & Optimized Bundling)
* **Styling:** Modular CSS
* **Data Source:** OpenWeatherMap API

## 📂 Project Structure

```text
WEATHER-APP/
├── public/
├── src/
│   ├── assets/       # Weather condition icons & UI elements
│   ├── components/
│   │   ├── Weather.jsx  # Main Logic & API Handling
│   │   └── Weather.css  # Scoped styling
│   ├── App.jsx
│   └── main.jsx
├── .env              # Private API Keys (Excluded from Git)
└── vite.config.js
```
## Installation & Setup
Clone the Repo:
```Bash
git clone [https://github.com/Thorcha-Errox/Weather-App.git](https://github.com/Thorcha-Errox/Weather-App.git)
cd Weather-App
```
Install Dependencies:
```Bash
npm install
```
Configure Environment Variables:
Create a `.env` file in the root directory and add your OpenWeather API key:

```Code snippet
VITE_APP_ID=your_openweather_api_key_here
```

Run Development Server:
```Bash
npm run dev
```

⭐️ If you found this project helpful or interesting, please consider giving it a star!


