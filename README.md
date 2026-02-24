# Weather Forecast App 🌦️

A robust and user-friendly Weather Forecast application built in **Python**, utilizing the **OpenWeather API** to deliver accurate, real-time weather data and forecasts. 

## 🚀 Features

- **Current Weather Conditions:** Get up-to-date information on temperature, humidity, wind speed, and weather descriptions.
- **Location-Based Forecasting:** Search for weather data seamlessly by city name.
- **Simple & Intuitive:** Designed for ease of use with a straightforward interface.
- **Reliable Data:** Powered by the highly accurate OpenWeather API.

## 🛠️ Built With

* **Python:** Core programming language used to build the application logic.
* **OpenWeather API:** Fetches real-time weather data and forecasts.
* **Requests:** For handling HTTP requests in Python.

## ⚙️ Prerequisites

Before running the application, ensure you have the following installed:
- [Python 3.x](https://www.python.org/downloads/)
- `pip` (Python package installer)
- An active API key from [OpenWeather](https://openweathermap.org/api)

## 📥 Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Thorcha-Errox/Weather-App.git](https://github.com/Thorcha-Errox/Weather-App.git)
   cd Weather-App
   ```
2. **Install required dependencies:**
If you have a `requirements.txt` file in your repository, run:
```Bash
pip install -r requirements.txt
```
*If you haven't created one yet, you will likely need to install `requests` and `python-dotenv` (if using a `.env` file):*
```Bash
pip install requests python-dotenv
```
3.**Set up the API Key:**
  -- Create a `.env` file in the root directory.
  -- Add your OpenWeather API key to the `.env` file:

```Code snippet
API_KEY=your_openweather_api_key_here
```
## 💻 Usage
To run the application, execute your main Python script (replace `main.py` or `app.py` with the actual name of your main Python file):

```Bash
python app.py 
```
Once running, simply follow the on-screen prompts or UI instructions to enter a city name and retrieve the weather data.


⭐️ If you found this project helpful or interesting, please consider giving it a star!
