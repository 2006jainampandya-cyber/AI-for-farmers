# data.py
# This file holds the static data for the application, acting as a mock database.

app_data = {
  "soil_types": [
    {"name": "Clay Soil", "ph": "6.0-7.0", "best_crops": ["Rice", "Wheat", "Sugarcane"]},
    {"name": "Sandy Soil", "ph": "6.0-7.5", "best_crops": ["Groundnut", "Watermelon", "Carrot"]},
    {"name": "Loamy Soil", "ph": "6.0-7.0", "best_crops": ["Tomato", "Cotton", "Maize"]},
    {"name": "Silt Soil", "ph": "6.5-7.5", "best_crops": ["Barley", "Oats", "Cabbage"]},
    {"name": "Black Soil", "ph": "7.0-8.5", "best_crops": ["Cotton", "Soybean", "Jowar"]},
    {"name": "Red Soil", "ph": "5.5-6.5", "best_crops": ["Groundnut", "Millets", "Pulses"]},
    {"name": "Laterite Soil", "ph": "5.0-6.0", "best_crops": ["Coconut", "Cashew", "Tea"]},
    {"name": "Mountain Soil", "ph": "5.0-7.0", "best_crops": ["Apple", "Potato", "Cabbage"]},
    {"name": "Desert Soil", "ph": "7.0-8.0", "best_crops": ["Bajra", "Jowar", "Dates"]},
    {"name": "Alluvial Soil", "ph": "6.0-8.0", "best_crops": ["Rice", "Wheat", "Sugarcane"]}
    
    
  ],
  "crop_recommendations": [
    {"crop": "Rice", "season": "Kharif", "soil": "Clay/Alluvial", "water": "High", "duration": "120-150 days"},
    {"crop": "Wheat", "season": "Rabi", "soil": "Loamy/Clay", "water": "Moderate", "duration": "100-120 days"},
    {"crop": "Cotton", "season": "Kharif", "soil": "Black/Loamy", "water": "Moderate", "duration": "180-200 days"},
    {"crop": "Sugarcane", "season": "Annual", "soil": "Clay/Alluvial", "water": "High", "duration": "10-12 months"},
    {"crop": "Maize", "season": "Kharif/Rabi", "soil": "Loamy", "water": "Moderate", "duration": "90-120 days"},
    {"crop": "Groundnut", "season": "Kharif", "soil": "Sandy/Red", "water": "Low-Moderate", "duration": "90-120 days"},
        {"crop": "Rice", "season": "Kharif", "soil": "Clay Soil", "water": "High", "duration": "120-150 days"},
        {"crop": "Wheat", "season": "Rabi", "soil": "Loamy/Clay", "water": "Moderate", "duration": "100-120 days"},
        {"crop": "Cotton", "season": "Kharif", "soil": "Black/Loamy", "water": "Moderate", "duration": "180-200 days"},
        {"crop": "Sugarcane", "season": "Annual", "soil": "Clay/Alluvial", "water": "High", "duration": "10-12 months"},
        {"crop": "Maize", "season": "Kharif/Rabi", "soil": "Loamy", "water": "Moderate", "duration": "90-120 days"},
        {"crop": "Groundnut", "season": "Kharif", "soil": "Sandy/Red", "water": "Low-Moderate", "duration": "90-120 days"},
        {"crop": "Tomato", "season": "Rabi", "soil": "Loamy", "water": "Moderate", "duration": "90-120 days"},
        {"crop": "Soybean", "season": "Kharif", "soil": "Black/Loamy", "water": "Moderate", "duration": "90-110 days"},
        {"crop": "Watermelon", "season": "Summer", "soil": "Sandy", "water": "Moderate", "duration": "80-100 days"},
        {"crop": "Carrot", "season": "Rabi", "soil": "Sandy/Loamy", "water": "Moderate", "duration": "70-80 days"},
        {"crop": "Barley", "season": "Rabi", "soil": "Silt", "water": "Low", "duration": "120-140 days"},
        {"crop": "Oats", "season": "Rabi", "soil": "Silt", "water": "Moderate", "duration": "90-120 days"},
        {"crop": "Cabbage", "season": "Rabi", "soil": "Silt/Mountain", "water": "Moderate", "duration": "90-120 days"},
        {"crop": "Jowar", "season": "Kharif", "soil": "Black/Desert", "water": "Low", "duration": "90-120 days"},
        {"crop": "Millets", "season": "Kharif", "soil": "Red", "water": "Low", "duration": "60-90 days"},
        {"crop": "Pulses", "season": "Rabi", "soil": "Red", "water": "Low", "duration": "90-120 days"},
        {"crop": "Coconut", "season": "Annual", "soil": "Laterite", "water": "High", "duration": "Year-round"},
        {"crop": "Cashew", "season": "Annual", "soil": "Laterite", "water": "Moderate", "duration": "Year-round"},
        {"crop": "Tea", "season": "Annual", "soil": "Laterite", "water": "High", "duration": "Year-round"},
        {"crop": "Apple", "season": "Annual", "soil": "Mountain", "water": "Moderate", "duration": "Year-round"},
        {"crop": "Potato", "season": "Rabi", "soil": "Mountain", "water": "Moderate", "duration": "90-120 days"},
        {"crop": "Bajra", "season": "Kharif", "soil": "Desert", "water": "Low", "duration": "75-90 days"},
        {"crop": "Dates", "season": "Annual", "soil": "Desert", "water": "Moderate", "duration": "Year-round"}
  ],
  "diseases": [
    "leaf_blight",
    "powdery_mildew",
    "root_rot",
    "aphid_infestation"
  ],
  "government_schemes": [
    { "key": "pm_kisan", "benefit_val": "₹6000/year" },
    { "key": "kcc", "benefit_key": "kcc_benefit" },
    { "key": "shc", "benefit_key": "shc_benefit" },
    { "key": "pmfby", "benefit_key": "pmfby_benefit" },
    { "key": "ofs", "benefit_key": "ofs_benefit" }
  ],
}
