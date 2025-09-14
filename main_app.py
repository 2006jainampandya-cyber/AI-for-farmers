import os
from flask import Flask, jsonify, render_template, request
import requests
from data import app_data # We will move the static data to a separate file
from datetime import datetime, timedelta

# --- App Setup ---
app = Flask(__name__, static_folder='.', static_url_path='')

# --- IMPORTANT: ADD YOUR API KEY HERE ---
# Get a free key from https://openweathermap.org/appid
WEATHER_API_KEY = "Enter your apu key" 

# --- API Endpoints ---

@app.route('/api/weather')
def get_weather():
    """Fetches live weather data from OpenWeatherMap API."""
    location = request.args.get('location')
    if not location:
        return jsonify({"error": "Location parameter is required"}), 400
    
    # --- THIS IS THE FIX: The incorrect error check has been removed. ---

    try:
        # 1. Geocoding to get coordinates from location name (this part is correct)
        geo_url = f"http://api.openweathermap.org/geo/1.0/direct?q={location}&limit=1&appid={WEATHER_API_KEY}"
        geo_res = requests.get(geo_url)
        geo_res.raise_for_status()
        geo_data = geo_res.json()
        if not geo_data:
            return jsonify({"error": f"Location '{location}' not found"}), 404

        lat, lon = geo_data[0]['lat'], geo_data[0]['lon']

        # 2. Fetching current weather and 5-day forecast using free-tier endpoints
        # NOTE: We now make two separate API calls as 'onecall' is deprecated for free users.
        current_weather_url = f"https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units=metric"
        forecast_url = f"https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={WEATHER_API_KEY}&units=metric"

        current_res = requests.get(current_weather_url)
        forecast_res = requests.get(forecast_url)
        current_res.raise_for_status()
        forecast_res.raise_for_status()
        
        current_data = current_res.json()
        forecast_data = forecast_res.json()

        # 3. Processing the forecast data (which comes in 3-hour intervals)
        daily_forecasts = {}
        for entry in forecast_data['list']:
            date = entry['dt_txt'].split(' ')[0]
            if date not in daily_forecasts:
                daily_forecasts[date] = {
                    'temps': [],
                    'rains': [],
                    'conditions': []
                }
            daily_forecasts[date]['temps'].append(entry['main']['temp'])
            daily_forecasts[date]['rains'].append(entry.get('pop', 0)) # Probability of precipitation
            daily_forecasts[date]['conditions'].append(entry['weather'][0]['main'])

        # 4. Formatting the forecast for the next 3 days
        formatted_forecast = []
        today = datetime.utcnow().date()
        day_labels = ["Today", "Tomorrow"]

        for i in range(3):
            target_date = today + timedelta(days=i)
            date_str = target_date.strftime('%Y-%m-%d')
            
            if date_str in daily_forecasts:
                day_data = daily_forecasts[date_str]
                day_label = day_labels[i] if i < len(day_labels) else f"Day {i+1}"
                
                # Find the most common weather condition for the day
                most_common_condition = max(set(day_data['conditions']), key=day_data['conditions'].count)

                formatted_forecast.append({
                    "day": day_label,
                    "high": int(max(day_data['temps'])),
                    "low": int(min(day_data['temps'])),
                    "rain": int(max(day_data['rains']) * 100),
                    "condition": most_common_condition.replace("Clouds", "Cloudy")
                })

        # 5. Formatting the final data structure for the frontend
        formatted_data = {
            "current": {
                "temperature": int(current_data['main']['temp']),
                "humidity": current_data['main']['humidity'],
                "rainfall_probability": formatted_forecast[0]['rain'] if formatted_forecast else 0,
                "wind_speed": int(current_data['wind']['speed'] * 3.6), # m/s to km/h
                "weather_condition": current_data['weather'][0]['main'].replace("Clouds", "Cloudy")
            },
            "forecast": formatted_forecast
        }
        return jsonify(formatted_data)
        
    except requests.exceptions.RequestException as e:
        print(f"API Request Error: {e}")
        return jsonify({"error": "Failed to fetch weather data from external service."}), 503
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        return jsonify({"error": "An internal server error occurred."}), 500

@app.route('/api/schemes')
def get_schemes():
    """Serves the government schemes data."""
    return jsonify(app_data['government_schemes'])

@app.route('/api/soil_types')
def get_soil_types():
    """Serves the government schemes data."""
    return jsonify(app_data['soil_types'])

@app.route('/api/diseases')
def get_diseases():
    """Serves the diseases data."""
    return jsonify(app_data['diseases'])

@app.route('/api/crop_recommendations')
def get_crop_recommendations():
    # Optional soil filte
    filtered=[]

    soil_filter = request.args.get('soil_type', '').lower().replace(' soil', '').strip()
    print(soil_filter)
    for crop in app_data["crop_recommendations"]:
        # split soils like 'Loamy/Clay' and normalize them to lowercase
        crop_soils = [s.strip().lower().replace(' soil', '') for s in crop["soil"].split("/")]
        print(crop_soils)
        if soil_filter in crop_soils:
            filtered.append(crop)
    return jsonify(filtered)

# --- Frontend Serving ---
@app.route('/')
def index():
    """Serves the main HTML file."""
    return render_template('index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
