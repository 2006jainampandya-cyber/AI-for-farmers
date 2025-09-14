// Smart AI Farming Assistant - JavaScript
// Global variables and data
let currentLanguage = 'en';
let isOffline = false;

// Application data is now split. Translations stay here, dynamic data is fetched.
const appData = {
  "primary_crops": ["Cotton", "Wheat", "Rice", "Maize", "Soybean", "Sugarcane", "Tomato", "Potato", "Onion", "Millets"],
  "languages": {
    "hi": {
      "save": "सहेजें",
      "saved": "सहेजा गया",
      "welcome": "स्वागत है",
      "weather": "मौसम",
      "chat": "बातचीत",
      "diseases": "रोग",
      "schemes": "योजनाएं",
      "community": "समुदाय",
      "profile": "प्रोफाइल",
      "home": "घर",
      "quick_actions": "त्वरित कार्य",
      "todays_tasks": "आज के कार्य",
      "weather_forecast": "मौसम पूर्वानुमान",
      "crop_recommendations": "फसल सिफारिशें",
      "soil_type": "मिट्टी का प्रकार",
      "ai_assistant": "AI सहायक",
      "quick_questions": "त्वरित प्रश्न",
      "weather_advice": "फसलों के लिए मौसम सलाह",
      "pest_control": "प्राकृतिक कीट नियंत्रण",
      "fertilizer_tips": "उर्वरक सिफारिशें",
      "chat_welcome": "नमस्ते! मैं आपका AI कृषि सहायक हूं। आज मैं आपकी कैसे मदद कर सकता हूं?",
      "disease_detection": "रोग पहचान",
      "take_photo": "अपने पौधे की फोटो लें",
      "open_camera": "कैमरा खोलें",
      "analysis_result": "विश्लेषण परिणाम",
      "common_diseases": "सामान्य रोग",
      "government_schemes": "सरकारी योजनाएं",
      "ask_question": "प्रश्न पूछें",
      "post_question": "प्रश्न पोस्ट करें",
      "farm_details": "खेत का विवरण",
      "farm_location": "खेत का स्थान",
      "farm_size": "खेत का आकार (एकड़)",
      "primary_crop": "मुख्य फसल",
      "settings": "सेटिंग्स",
      "language": "भाषा",
      "notifications": "मौसम सूचनाएं",
      "offline_mode": "ऑफलाइन मोड",
      "loading": "लोड हो रहा है...",
      "choose_language": "अपनी भाषा चुनें",
      "partly_cloudy": "आंशिक रूप से बादल छाए रहेंगे",
      "cloudy": "बादल छाए रहेंगे",
      "humidity": "आर्द्रता:",
      "rain_chance": "बारिश की संभावना",
      "rain": "बारिश",
      "sunny": "धूप",
      "thunderstorms": "गरज के साथ आंधी",
      "heavy_rain": "भारी वर्षा",
      "light_rain": "हलकी बारिश",
      "clear": "साफ़",
      "task_water": "टमाटर के पौधों को पानी दें (सुबह)",
      "task_pests": "फसल में कीटों की जांच करें",
      "task_temp": "मिट्टी का तापमान जांचें",
      "select_soil": "मिट्टी का प्रकार चुनें",
      "chat_placeholder": "कृषि के बारे में मुझसे कुछ भी पूछें...",
      "search_schemes": "योजनाएं खोजें...",
      "ask_placeholder": "आप अन्य किसानों से क्या पूछना चाहेंगे?",
      "detected": "पहचाना गया:",
      "symptoms": "लक्षण:",
      "treatment": "उपचार:",
      "prevention": "रोकथाम:",
      "benefit": "लाभ:", "eligibility": "पात्रता:",
      "pm_kisan_name": "पीएम-किसान", "pm_kisan_desc": "किसानों को सीधी आय सहायता", "pm_kisan_eligibility": "सभी भूमिधारक किसान",
      "kcc_name": "किसान क्रेडिट कार्ड", "kcc_desc": "किसानों के लिए ऋण सुविधा", "kcc_eligibility": "भूमि रिकॉर्ड वाले किसान", "kcc_benefit": "कम ब्याज वाले ऋण",
      "shc_name": "मृदा स्वास्थ्य कार्ड", "shc_desc": "मुफ्त मिट्टी परीक्षण", "shc_eligibility": "सभी किसान", "shc_benefit": "अपनी मिट्टी के पोषक तत्वों को जानें",
      "pmfby_name": "प्रधानमंत्री फसल बीमा योजना", "pmfby_desc": "फसल बीमा योजना", "pmfby_eligibility": "सभी किसान", "pmfby_benefit": "फसल क्षति कवरेज",
      "ofs_name": "जैविक खेती योजना", "ofs_desc": "जैविक खेती के लिए सहायता", "ofs_eligibility": "इच्छुक किसान", "ofs_benefit": "जैविक इनपुट पर सब्सिडी",
      "leaf_blight_name": "पत्ती झुलसा", "leaf_blight_symptoms": "पत्तियों पर भूरे धब्बे", "leaf_blight_treatment": "कॉपर कवकनाशी स्प्रे", "leaf_blight_prevention": "उचित दूरी, अच्छी जल निकासी",
      "powdery_mildew_name": "चूर्णिल आसिता", "powdery_mildew_symptoms": "पत्तियों पर सफेद पाउडर", "powdery_mildew_treatment": "सल्फर स्प्रे", "powdery_mildew_prevention": "ऊपर से पानी देने से बचें",
      "root_rot_name": "जड़ सड़न", "root_rot_symptoms": "पीले, मुरझाए हुए पौधे", "root_rot_treatment": "संक्रमित पौधों को हटा दें, जल निकासी में सुधार करें", "root_rot_prevention": "अच्छी जल निकासी वाली मिट्टी",
      "aphid_infestation_name": "एफिड का प्रकोप", "aphid_infestation_symptoms": "पत्तियों पर छोटे कीड़े", "aphid_infestation_treatment": "नीम के तेल का स्प्रे", "aphid_infestation_prevention": "लाभकारी कीड़े, साथी रोपण",
      "cotton": "कपास", "wheat": "गेहूँ", "rice": "चावल", "maize": "मक्का", "soybean": "सोयाबीन", "sugarcane": "गन्ना", "tomato": "टमाटर", "potato": "आलू", "onion": "प्याज", "millets": "बाजरा",
      "clay_soil": "चिकनी मिट्टी", "sandy_soil": "रेतीली मिट्टी", "loamy_soil": "दोमट मिट्टी", "silt_soil": "गाद मिट्टी", "black_soil": "काली मिट्टी", "red_soil": "लाल मिट्टी", "laterite_soil": "लेटराइट मिट्टी", "mountain_soil": "पर्वतीय मिट्टी", "desert_soil": "मरुस्थलीय मिट्टी", "alluvial_soil": "जलोढ़ मिट्टी",
      "season": "मौसम:", "duration": "अवधि:", "kharif": "खरीफ", "rabi": "रबी", "annual": "वार्षिक", "kharif_rabi": "खरीफ/रबी", "days": "दिन", "months": "महीने",
      "response_weather": "वर्तमान मौसम के आधार पर, दोपहर में पानी देने से बचें। आने वाली आंधी आपकी फसलों के लिए अच्छी है। नाजुक पौधों को ढकने पर विचार करें।",
      "response_pest": "प्राकृतिक कीट नियंत्रण के लिए, शाम को नीम के तेल का स्प्रे आजमाएं, गेंदे के साथ सहयोगी रोपण करें, और लेडीबग जैसे लाभकारी कीड़ों को प्रोत्साहित करें।",
      "response_fertilizer": "मानसून के मौसम में जैविक खाद का प्रयोग करें। इस मौसम के लिए, भारी बारिश के खिलाफ पौधों को मजबूत करने के लिए पोटेशियम युक्त उर्वरकों का प्रयोग करें।",
      "generic_responses": [
        "यह एक अच्छा प्रश्न है! मैं आपके मिट्टी की नमी के स्तर की निगरानी करने की सलाह दूंगा।",
        "बेहतर फसल उपज के लिए, आगामी बारिश के पूर्वानुमान पर विचार करें।",
        "मेरा सुझाव है कि आप ऐप में रोग की रोकथाम के सुझावों की जांच करें।",
        "वर्तमान मौसम को देखते हुए, उचित जल निकासी और कीट निगरानी पर ध्यान केंद्रित करें।",
        "मौसम का पैटर्न बताता है कि यह उर्वरक प्रयोग के लिए एक अच्छा समय है।"
      ]
    },
    "gu": {
      "save": "સાચવો",
      "saved": "સાચવ્યું",
      "welcome": "સ્વાગત છે",
      "weather": "હવામાન",
      "chat": "વાતચીત",
      "diseases": "બિમારીઓ",
      "schemes": "યોજનાઓ",
      "community": "સમુદાય",
      "profile": "પ્રોફાઇલ",
      "home": "ઘર",
      "quick_actions": "ઝડપી ક્રિયાઓ",
      "todays_tasks": "આજના કામો",
      "weather_forecast": "હવામાન અનુમાન",
      "crop_recommendations": "પાક ભલામણો",
      "soil_type": "માટીનો પ્રકાર",
      "ai_assistant": "AI સહાયક",
      "quick_questions": "ઝડપી પ્રશ્નો",
      "weather_advice": "પાક માટે હવામાન સલાહ",
      "pest_control": "પ્રાકૃતિક જંતુ નિયંત્રણ",
      "fertilizer_tips": "ખાતર ભલામણો",
      "chat_welcome": "નમસ્તે! હું તમારો AI કૃષિ સહાયક છું. આજે હું તમારી કેવી મદદ કરી શકું?",
      "disease_detection": "રોગ શોધ",
      "take_photo": "તમારા છોડનો ફોટો લો",
      "open_camera": "કેમેરા ખોલો",
      "analysis_result": "વિશ્લેષણ પરિણામ",
      "common_diseases": "સામાન્ય રોગો",
      "government_schemes": "સરકારી યોજનાઓ",
      "ask_question": "પ્રશ્ન પૂછો",
      "post_question": "પ્રશ્ન પોસ્ટ કરો",
      "farm_details": "ખેતરની વિગતો",
      "farm_location": "ખેતરનું સ્થાન",
      "farm_size": "ખેતરનું કદ (એકર)",
      "primary_crop": "મુખ્ય પાક",
      "settings": "સેટિંગ્સ",
      "language": "ભાષા",
      "notifications": "હવામાન સૂચનાઓ",
      "offline_mode": "ઑફલાઇન મોડ",
      "loading": "લોડ થઈ રહ્યું છે...",
      "choose_language": "તમારી ભાષા પસંદ કરો",
      "partly_cloudy": "આંશિક વાદળછાયું",
      "cloudy": "વાદળછાયું",
      "humidity": "ભેજ:",
      "rain_chance": "વરસાદની સંભાવના",
      "rain": "વરસાદ",
      "sunny": "તડકો",
      "thunderstorms": "ગાજવીજ સાથે તોફાન",
      "heavy_rain": "ભારે વરસાદ",
      "light_rain": "હળવો વરસાદ",
      "clear": "સાફ",
      "task_water": "ટામેટાના છોડને પાણી આપો (સવારે)",
      "task_pests": "પાકમાં જંતુઓ તપાસો",
      "task_temp": "માટીનું તાપમાન મોનિટર કરો",
      "select_soil": "માટીનો પ્રકાર પસંદ કરો",
      "chat_placeholder": "ખેતી વિશે મને કંઈપણ પૂછો...",
      "search_schemes": "યોજનાઓ શોધો...",
      "ask_placeholder": "તમે અન્ય ખેડૂતોને શું પૂછવા માંગો છો?",
      "detected": "શોધાયેલ:",
      "symptoms": "લક્ષણો:",
      "treatment": "ઉપચાર:",
      "prevention": "નિવારણ:",
      "benefit": "લાભ:", "eligibility": "પાત્રતા:",
      "pm_kisan_name": "પીએમ-કિસાન", "pm_kisan_desc": "ખેડૂતોને સીધી આવક સહાય", "pm_kisan_eligibility": "તમામ જમીનધારક ખેડૂતો",
      "kcc_name": "કિસાન ક્રેડિટ કાર્ડ", "kcc_desc": "ખેડૂતો માટે ક્રેડિટ સુવિધા", "kcc_eligibility": "જમીનના રેકોર્ડ ધરાવતા ખેડૂતો", "kcc_benefit": "ઓછા વ્યાજની લોન",
      "shc_name": "સોઇલ હેલ્થ કાર્ડ", "shc_desc": "મફત જમીન પરીક્ષણ", "shc_eligibility": "તમામ ખેડૂતો", "shc_benefit": "તમારી જમીનના પોષક તત્વો જાણો",
      "pmfby_name": "પ્રધાનમંત્રી ફસલ બીમા યોજના", "pmfby_desc": "પાક વીમા યોજના", "pmfby_eligibility": "તમામ ખેડૂતો", "pmfby_benefit": "પાક નુકસાન કવરેજ",
      "ofs_name": "ઓર્ગેનિક ફાર્મિંગ યોજના", "ofs_desc": "ઓર્ગેનિક ખેતી માટે આધાર", "ofs_eligibility": "રસ ધરાવતા ખેડૂતો", "ofs_benefit": "ઓર્ગેનિક ઇનપુટ્સ પર સબસિડી",
      "leaf_blight_name": "પાનનો સુકારો", "leaf_blight_symptoms": "પાંદડા પર ભૂરા ડાઘ", "leaf_blight_treatment": "કોપર ફૂગનાશક સ્પ્રે", "leaf_blight_prevention": "યોગ્ય અંતર, સારો પાણીનો નિકાલ",
      "powdery_mildew_name": "પાવડરી માઇલ્ડ્યુ", "powdery_mildew_symptoms": "પાંદડા પર સફેદ પાવડર", "powdery_mildew_treatment": "સલ્ફર સ્પ્રે", "powdery_mildew_prevention": "ઉપરથી પાણી આપવાનું ટાળો",
      "root_rot_name": "મૂળનો સડો", "root_rot_symptoms": "પીળા, કરમાતા છોડ", "root_rot_treatment": "ચેપગ્રસ્ત છોડને દૂર કરો, પાણીનો નિકાલ સુધારો", "root_rot_prevention": "સારી નિતારવાળી જમીન",
      "aphid_infestation_name": "એફિડનો ઉપદ્રવ", "aphid_infestation_symptoms": "પાંદડા પર નાના જંતુઓ", "aphid_infestation_treatment": "લીમડાના તેલનો સ્પ્રે", "aphid_infestation_prevention": "ફાયદાકારક જંતુઓ, સાથી વાવેતર",
      "cotton": "કપાસ", "wheat": "ઘઉં", "rice": "ચોખા", "maize": "મકાઈ", "soybean": "સોયાબીન", "sugarcane": "શેરડી", "tomato": "ટામેટા", "potato": "બટાકા", "onion": "ડુંગળી", "millets": "બાજરી",
      "clay_soil": "માટીયાળ જમીન", "sandy_soil": "રેતાળ જમીન", "loamy_soil": "કાંપાળી જમીન", "silt_soil": "કાંપવાળી જમીન", "black_soil": "કાળી જમીન", "red_soil": "લાલ જમીન", "laterite_soil": "પડખાઉ જમીન", "mountain_soil": "પર્વતીય જમીન", "desert_soil": "રણની જમીન", "alluvial_soil": "કાંપની જમીન",
      "season": "ઋતુ:", "duration": "અવધિ:", "kharif": "ખરીફ", "rabi": "રબી", "annual": "વાર્ષિક", "kharif_rabi": "ખરીફ/રબી", "days": "દિવસ", "months": "મહિના",
      "response_weather": "વર્તમાન હવામાનને આધારે, બપોરના સમયે પાણી આપવાનું ટાળો. આગામી ગાજવીજ તમારા પાક માટે સારી છે. નાજુક છોડને ઢાંકવાનું વિચારો.",
      "response_pest": "કુદરતી જંતુ નિયંત્રણ માટે, સાંજે લીમડાના તેલનો સ્પ્રે અજમાવો, ગલગોટા સાથે સહયોગી વાવેતર કરો અને લેડીબગ્સ જેવા ફાયદાકારક જંતુઓને પ્રોત્સાહિત કરો.",
      "response_fertilizer": "ચોમાસાની ઋતુમાં ઓર્ગેનિક ખાતરનો ઉપયોગ કરો. આ હવામાન માટે, ભારે વરસાદ સામે છોડને મજબૂત કરવા પોટેશિયમયુક્ત ખાતરોનો ઉપયોગ કરો.",
       "generic_responses": [
        "એક સારો પ્રશ્ન છે! હું તમારી જમીનના ભેજનું સ્તર તપાસવાની ભલામણ કરીશ.",
        "વધુ સારી પાક ઉપજ માટે, આગામી વરસાદની આગાહી ધ્યાનમાં લો.",
        "હું સૂચન કરું છું કે તમે એપ્લિકેશનમાં રોગ નિવારણ ટિપ્સ તપાસો.",
        "વર્તમાન ઋતુને જોતાં, યોગ્ય ડ્રેનેજ અને જંતુ નિરીક્ષણ પર ધ્યાન કેન્દ્રિત કરો.",
        "હવામાનની પેટર્ન સૂચવે છે કે આ ખાતર નાખવા માટે સારો સમય છે."
      ]
    },
    "en": {
      "save": "Save",
      "saved": "Saved",
      "welcome": "Welcome",
      "weather": "Weather",
      "chat": "Chat",
      "diseases": "Diseases",
      "schemes": "Schemes",
      "community": "Community",
      "profile": "Profile",
      "home": "Home",
      "quick_actions": "Quick Actions",
      "todays_tasks": "Today's Tasks",
      "weather_forecast": "Weather Forecast",
      "crop_recommendations": "Crop Recommendations",
      "soil_type": "Soil Type",
      "ai_assistant": "AI Assistant",
      "quick_questions": "Quick Questions",
      "weather_advice": "Weather advice for crops",
      "pest_control": "Natural pest control",
      "fertilizer_tips": "Fertilizer recommendations",
      "chat_welcome": "Hello! I'm your AI farming assistant. How can I help you today?",
      "disease_detection": "Disease Detection",
      "take_photo": "Take a photo of your plant",
      "open_camera": "Open Camera",
      "analysis_result": "Analysis Result",
      "common_diseases": "Common Diseases",
      "government_schemes": "Government Schemes",
      "ask_question": "Ask a Question",
      "post_question": "Post Question",
      "farm_details": "Farm Details",
      "farm_location": "Farm Location",
      "farm_size": "Farm Size (acres)",
      "primary_crop": "Primary Crop",
      "settings": "Settings",
      "language": "Language",
      "notifications": "Weather Notifications",
      "offline_mode": "Offline Mode",
      "loading": "Loading...",
      "choose_language": "Choose your language / अपनी भाषा चुनें / તમારી ભાષા પસંદ કરો",
      "partly_cloudy": "Partly Cloudy",
      "cloudy": "Cloudy",
      "humidity": "Humidity:",
      "rain_chance": "Rain Chance",
      "rain": "Rain",
      "sunny": "Sunny",
      "thunderstorms": "Thunderstorms",
      "heavy_rain": "Heavy Rain",
      "light_rain": "Light Rain",
      "clear": "Clear",
      "task_water": "Water tomato plants (Morning)",
      "task_pests": "Check crop for pests",
      "task_temp": "Monitor soil temperature",
      "select_soil": "Select Soil Type",
      "chat_placeholder": "Ask me anything about farming...",
      "search_schemes": "Search schemes...",
      "ask_placeholder": "What would you like to ask other farmers?",
      "detected": "Detected:",
      "symptoms": "Symptoms:",
      "treatment": "Treatment:",
      "prevention": "Prevention:",
      "benefit": "Benefit:", "eligibility": "Eligibility:",
      "pm_kisan_name": "PM-KISAN", "pm_kisan_desc": "Direct income support to farmers", "pm_kisan_eligibility": "All landholding farmers",
      "kcc_name": "Kisan Credit Card", "kcc_desc": "Credit facility for farmers", "kcc_eligibility": "Farmers with land records", "kcc_benefit": "Low interest loans",
      "shc_name": "Soil Health Card", "shc_desc": "Free soil testing", "shc_eligibility": "All farmers", "shc_benefit": "Know your soil nutrients",
      "pmfby_name": "Pradhan Mantri Fasal Bima Yojana", "pmfby_desc": "Crop insurance scheme", "pmfby_eligibility": "All farmers", "pmfby_benefit": "Crop loss coverage",
      "ofs_name": "Organic Farming Scheme", "ofs_desc": "Support for organic farming", "ofs_eligibility": "Interested farmers", "ofs_benefit": "Subsidies on organic inputs",
      "leaf_blight_name": "Leaf Blight", "leaf_blight_symptoms": "Brown spots on leaves", "leaf_blight_treatment": "Copper fungicide spray", "leaf_blight_prevention": "Proper spacing, good drainage",
      "powdery_mildew_name": "Powdery Mildew", "powdery_mildew_symptoms": "White powder on leaves", "powdery_mildew_treatment": "Sulfur spray", "powdery_mildew_prevention": "Avoid overhead watering",
      "root_rot_name": "Root Rot", "root_rot_symptoms": "Yellowing, wilting plants", "root_rot_treatment": "Remove infected plants, improve drainage", "root_rot_prevention": "Well-draining soil",
      "aphid_infestation_name": "Aphid Infestation", "aphid_infestation_symptoms": "Small insects on leaves", "aphid_infestation_treatment": "Neem oil spray", "aphid_infestation_prevention": "Beneficial insects, companion planting",
      "cotton": "Cotton", "wheat": "Wheat", "rice": "Rice", "maize": "Maize", "soybean": "Soybean", "sugarcane": "Sugarcane", "tomato": "Tomato", "potato": "Potato", "onion": "Onion", "millets": "Millets",
      "clay_soil": "Clay Soil", "sandy_soil": "Sandy Soil", "loamy_soil": "Loamy Soil", "silt_soil": "Silt Soil", "black_soil": "Black Soil", "red_soil": "Red Soil", "laterite_soil": "Laterite Soil", "mountain_soil": "Mountain Soil", "desert_soil": "Desert Soil", "alluvial_soil": "Alluvial Soil",
      "season": "Season:", "duration": "Duration:", "kharif": "Kharif", "rabi": "Rabi", "annual": "Annual", "kharif_rabi": "Kharif/Rabi", "days": "days", "months": "months",
      "response_weather": "Based on current weather, avoid watering during midday. The upcoming thunderstorms are good for your crops. Consider covering delicate plants.",
      "response_pest": "For natural pest control, try neem oil spray in the evening, companion planting with marigolds, and encouraging beneficial insects like ladybugs.",
      "response_fertilizer": "Use organic compost in monsoon season. For this weather, apply potassium-rich fertilizers to strengthen plants against heavy rain.",
      "generic_responses": [
        "That's a great question! Based on current weather conditions, I'd recommend monitoring your soil moisture levels.",
        "For better crop yield, consider the upcoming rain forecast. Your timing for planting looks good.",
        "I suggest checking the disease prevention tips in the app. Early detection is key for healthy crops.",
        "Given the current season, focus on proper drainage and pest monitoring. The community forum has more specific advice.",
        "Weather patterns suggest this is a good time for fertilizer application. Check the soil health recommendations."
      ]
    }
  }
};

// Weather condition icons mapping
const weatherIcons = {
  "Partly Cloudy": "⛅",
  "Cloudy": "☁️",
  "Overcast": "☁️",
  "Mist": "🌫️",
  "Fog": "🌫️",
  "Smoke": "🌫️",
  "Haze": "🌫️",        // <--- Fix: Add this line
  "Patchy rain possible": "🌦️",
  "Light rain": "🌦️",
  "Moderate rain": "🌧️",
  "Heavy rain": "🌧️",
  "Thundery outbreaks possible": "⛈️",
  "Sunny": "☀️",
  "Clear": "☀️"
};



// Fetch soil types and populate dropdown
async function loadSoilTypes() {
  try {
    const res = await fetch("/api/soil_types");
    const soils = await res.json();
    const soilSelect = document.getElementById("soilType");
    soilSelect.innerHTML = ""; // Clear existing options
    soils.forEach(soil => {
      const option = document.createElement("option");
      option.value = soil.name; // Must exactly match backend soil names
      option.textContent = soil.name;
      soilSelect.appendChild(option);
    });

    // Optional: auto-select first soil for convenience
    if (soils.length > 0) {
      soilSelect.value = soils[0].name;
      updateCropRecommendations();
    }
  } catch (err) {
    console.error("Failed to load soil types", err);
  }
}


async function updateCropRecommendations() {
    const soilType = document.getElementById('soilType').value;
    const cropRecommendationsDiv = document.getElementById('cropRecommendations');
    if (!cropRecommendationsDiv) return;

    cropRecommendationsDiv.innerHTML = ''; // Clear previous

    if (!soilType) {
        cropRecommendationsDiv.innerHTML = '<p>Please select soil type.</p>';
        return;
    }

    try {
        // Encode soilType exactly as taken from dropdown (assumed exact backend match)
        const response = await fetch(`/api/crop_recommendations?soil_type=${encodeURIComponent(soilType)}`);

        if (!response.ok) {
            throw new Error('Failed to fetch crop recommendations');
        }

        const data = await response.json();
        const translations = appData.languages[currentLanguage];

        if (data.length === 0) {
            cropRecommendationsDiv.innerHTML = `<p>${translations['no_crop'] || 'No recommendations found.'}</p>`;
            return;
        }

        data.forEach(cropInfo => {
            const item = document.createElement('div');
            item.className = 'crop-item';

            // Translate crop and season; fallback to original
            const translatedCropName = translations[cropInfo.crop.toLowerCase()] || cropInfo.crop;
            const seasonKey = cropInfo.season.toLowerCase().replace('/', '_');
            const translatedSeason = translations[seasonKey] || cropInfo.season;

            // Duration translation (days/months)
            let translatedDuration = cropInfo.duration || '';
            translatedDuration = translatedDuration.replace('days', translations['days'] || 'days');
            translatedDuration = translatedDuration.replace('months', translations['months'] || 'months');

            item.innerHTML = `
                <div class="crop-name">${translatedCropName}</div>
                <div class="crop-details">
                    ${translations.season} ${translatedSeason} | ${translations.duration} ${translatedDuration} | Water: ${cropInfo.water}
                </div>
            `;
            cropRecommendationsDiv.appendChild(item);
        });
    } catch (error) {
        console.error("Failed to fetch crop recommendations:", error);
        cropRecommendationsDiv.innerHTML = '<p>Error loading recommendations.</p>';
    }
}


// Call loadSoilTypes when weather screen opens
/*function showScreen(screenId) {
    // hide all screens
    document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
    // show selected screen
    document.getElementById(screenId).classList.remove('hidden');

    // Special: load soil types when entering weather screen
    // if (screenId === "weather") {
    //     loadSoilTypes();
    // }
}*/

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', initializeApp);

function initializeApp() {
  console.log('Initializing app...');
  setupEventHandlers();
  
  currentLanguage = localStorage.getItem('farmingAppLanguage') || 'en';
  document.getElementById('languageSelect').value = currentLanguage;
  
  showScreen('dashboard');
  
  loadLocation();
  setupOfflineDetection();
  setupServiceWorker();
  
  updateSystemLanguage();
}

function setupEventHandlers() {
  console.log('Setting up event handlers...');
  document.getElementById('saveLocationBtn').addEventListener('click', saveLocation);
}

// --- Language Management ---
function selectLanguage(lang) {
  changeLanguage(lang);
  showScreen('dashboard');
}

function changeLanguage(lang) {
  console.log('Changing language to:', lang);
  currentLanguage = lang;
  localStorage.setItem('farmingAppLanguage', lang);
  updateSystemLanguage();
}

function updateSystemLanguage() {
  updateLanguage(); 
  loadAppData(); 
  
  const activeScreen = document.querySelector('.screen:not(.hidden)');
  if (activeScreen) {
    loadScreenData(activeScreen.id);
  }
}

function updateLanguage() {
  console.log('Updating language to:', currentLanguage);
  const translations = appData.languages[currentLanguage];
  if (!translations) return;
  
  document.querySelectorAll('[data-key]').forEach(element => {
    const key = element.getAttribute('data-key');
    if (translations[key]) {
      const target = element.placeholder ? 'placeholder' : 'textContent';
      element[target] = translations[key];
    }
  });
}

// --- Screen & Data Loading ---
function showScreen(screenId) {
  console.log('Showing screen:', screenId);
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(screenId).classList.remove('hidden');
  updateNavigation(screenId);
  loadScreenData(screenId);
}

function updateNavigation(activeScreen) {
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(`'${activeScreen}'`));
  });
}

async function loadAppData() {
  console.log('Loading core app data...');
  await loadWeatherData();
  // Static data loads can remain as they are quick
  loadPrimaryCrops();
}

function loadScreenData(screenId) {
  console.log(`Loading data for screen: ${screenId}`);
  // Specific data loads triggered by screen visibility
  switch(screenId) {
    case 'weather':
      loadSoilTypes();
      //updateCropRecommendations();
      break;
    case 'diseases':
      loadDiseasesList();
      break;
    case 'schemes':
      loadSchemesList();
      break;
    case 'chat':
       initializeChat();
       break;
    case 'profile':
      loadLocation();
      break;
  }
}

// --- API Fetching Functions ---
async function loadWeatherData() {
    console.log('Loading weather data from API...');
    const location = localStorage.getItem('userLocation') || 'Ahmedabad';
    showLoading();

    try {
        const response = await fetch(`/api/weather?location=${encodeURIComponent(location)}`);
        const weatherData = await response.json();

        if (!response.ok) {
            throw new Error(weatherData.error || 'Failed to fetch weather data');
        }
        
        updateWeatherUI(weatherData);

    } catch (error) {
        console.error("Weather fetch failed:", error);
        alert(`Could not fetch weather for "${location}". Please check the location name or your API key. Error: ${error.message}`);
        updateWeatherUI(null); // Clear UI on error
    } finally {
        hideLoading();
    }
}

async function updateCropRecommendations() {
    const soilType = document.getElementById('soilType').value;
    const cropRecommendationsDiv = document.getElementById('cropRecommendations');
    if (!cropRecommendationsDiv) return;
    
    cropRecommendationsDiv.innerHTML = '';
    if (!soilType) return;

    try {
        const response = await fetch(`/api/crop_recommendations?soil_type=${encodeURIComponent(soilType)}`);
        const data = await response.json();
        
        const translations = appData.languages[currentLanguage];
        data.forEach(cropInfo => {
            const item = document.createElement('div');
            item.className = 'crop-item';
            
            const translatedCropName = translations[cropInfo.crop.toLowerCase()] || cropInfo.crop;
            const translatedSeason = translations[cropInfo.season.toLowerCase().replace('/', '_')] || cropInfo.season;
            const translatedDuration = cropInfo.duration.replace('days', translations.days).replace('months', translations.months);

            item.innerHTML = `
                <div class="crop-name">${translatedCropName}</div>
                <div class="crop-details">
                    ${translations.season} ${translatedSeason} | ${translations.duration} ${translatedDuration}
                </div>
            `;
            cropRecommendationsDiv.appendChild(item);
        });
    } catch(error) {
        console.error("Failed to fetch crop recommendations:", error);
    }
}

async function loadDiseasesList() {
    const diseaseList = document.getElementById('diseaseList');
    if (!diseaseList) return;
    
    try {
        const response = await fetch('/api/diseases');
        const diseaseKeys = await response.json();
        
        diseaseList.innerHTML = '';
        const translations = appData.languages[currentLanguage];
        
        diseaseKeys.forEach(key => {
            const item = document.createElement('div');
            item.className = 'disease-item';
            item.innerHTML = `
                <div class="disease-name">${translations[key + '_name']}</div>
                <div class="disease-symptoms"><strong>${translations.symptoms}</strong> ${translations[key + '_symptoms']}</div>
                <div class="disease-treatment"><strong>${translations.treatment}</strong> ${translations[key + '_treatment']}</div>
                <div class="disease-prevention"><strong>${translations.prevention}</strong> ${translations[key + '_prevention']}</div>
            `;
            diseaseList.appendChild(item);
        });
    } catch (error) {
        console.error("Failed to fetch diseases:", error);
    }
}

async function loadSchemesList() {
    const schemesList = document.getElementById('schemesList');
    if (!schemesList) return;

    try {
        const response = await fetch('/api/schemes');
        const schemes = await response.json();
        
        schemesList.innerHTML = '';
        const translations = appData.languages[currentLanguage];
        
        schemes.forEach(scheme => {
            const item = document.createElement('div');
            item.className = 'scheme-item';
            
            const benefitText = scheme.benefit_key ? (translations[scheme.benefit_key] || '') : (scheme.benefit_val || '');

            item.innerHTML = `
                <div class="scheme-name">${translations[scheme.key + '_name']}</div>
                <div class="scheme-description">${translations[scheme.key + '_desc']}</div>
                <div class="scheme-benefit">${translations.benefit} ${benefitText}</div>
                <div class="scheme-eligibility"><strong>${translations.eligibility}</strong> ${translations[scheme.key + '_eligibility']}</div>
            `;
            schemesList.appendChild(item);
        });
    } catch (error) {
        console.error("Failed to fetch schemes:", error);
    }
}

// --- UI Update Functions ---
function updateWeatherUI(weatherData) {
    const translations = appData.languages[currentLanguage];
    
    // Fallback data for error cases
    const current = weatherData ? weatherData.current : { temperature: 'N/A', humidity: 'N/A', rainfall_probability: 'N/A', weather_condition: 'Error' };
    const forecast = weatherData ? weatherData.forecast : [];

    // Update Dashboard Card
    const weatherCard = document.querySelector('.weather-card');
    if (weatherCard) {
        weatherCard.querySelector('.weather-icon').textContent = weatherIcons[current.weather_condition] || '❓';
        weatherCard.querySelector('.temperature').textContent = `${current.temperature}°C`;
        const conditionKey = current.weather_condition.toLowerCase().replace(/ /g, '_');
        weatherCard.querySelector('.condition').textContent = translations[conditionKey] || current.weather_condition;
        weatherCard.querySelector('.humidity').textContent = `${translations.humidity} ${current.humidity}%`;
        weatherCard.querySelector('.rain-percentage').textContent = `${current.rainfall_probability}%`;
    }
    
    // Update Weather Screen Forecast
    const forecastList = document.getElementById('forecastList');
    if (forecastList) {
        forecastList.innerHTML = '';
        forecast.forEach(day => {
            const item = document.createElement('div');
            item.className = 'forecast-item';
            const conditionKey = day.condition.toLowerCase().replace(/ /g, '_');
            item.innerHTML = `
                <div class="forecast-day">${translations[day.day.toLowerCase()] || day.day}</div>
                <div class="forecast-temps">
                    <span class="forecast-high">${day.high}°</span>
                    <span class="forecast-low">${day.low}°</span>
                </div>
                <div class="forecast-rain">${day.rain}% ${translations.rain}</div>
                <div class="forecast-condition">${weatherIcons[day.condition] || '❓'} ${translations[conditionKey] || day.condition}</div>
            `;
            forecastList.appendChild(item);
        });
    }
}

// --- Location Management ---
async function saveLocation() {
    const locationInput = document.getElementById('locationInput');
    const saveBtn = document.getElementById('saveLocationBtn');
    const locationValue = locationInput.value.trim();

    if (locationValue) {
        localStorage.setItem('userLocation', locationValue);
        document.getElementById('dashboardLocation').textContent = locationValue;
        
        const originalText = getTranslation('save');
        saveBtn.textContent = getTranslation('saved') + '! 👍';
        
        await loadWeatherData(); // Fetch new weather immediately

        setTimeout(() => {
            saveBtn.textContent = originalText;
        }, 2000);
    } else {
        alert('Please enter a location.');
    }
}

function loadLocation() {
    const savedLocation = localStorage.getItem('userLocation') || 'Ahmedabad, Gujarat';
    document.getElementById('locationInput').value = savedLocation;
    document.getElementById('dashboardLocation').textContent = savedLocation;
}

// --- Static Data Loaders (No API calls) ---
function loadPrimaryCrops() {
    const cropSelect = document.getElementById('primaryCropSelect');
    if (!cropSelect) return;
    
    const translations = appData.languages[currentLanguage];
    const selectedValue = cropSelect.value;
    cropSelect.innerHTML = '';
    
    appData.primary_crops.forEach(crop => {
        const option = document.createElement('option');
        const key = crop.toLowerCase();
        option.value = crop;
        option.textContent = translations[key] || crop;
        cropSelect.appendChild(option);
    });
    cropSelect.value = selectedValue;
}

// --- Chat & Other Functions (Unchanged from previous version) ---
function initializeChat() { /* ... */ }
function askQuickQuestion(type) { /* ... */ }
function sendMessage() { /* ... */ }
function addChatMessage(sender, message) { /* ... */ }
function generateAIResponse(message) { /* ... */ }
function openCamera() { /* ... */ }
function analyzeImage() { /* ... */ }
function filterSchemes() { /* ... */ }
function startVoiceInput() { /* ... */ }
function showLoading() { /* ... */ }
function hideLoading() { /* ... */ }
function getTranslation(key) { /* ... */ }
function setupOfflineDetection() { /* ... */ }
function showOfflineIndicator() { /* ... */ }
function hideOfflineIndicator() { /* ... */ }
function setupServiceWorker() { /* ... */ }

// --- Event Listeners ---
document.addEventListener('submit', e => e.preventDefault());
document.addEventListener('keypress', e => {
  if (e.target.id === 'chatInput' && e.key === 'Enter') {
    sendMessage();
  }
});
document.addEventListener('touchstart', () => {}, { passive: true });

// --- Global function exports for HTML ---
window.showScreen = showScreen;
window.changeLanguage = changeLanguage;
window.updateCropRecommendations = updateCropRecommendations;
window.openCamera = openCamera;
window.analyzeImage = analyzeImage;
window.filterSchemes = filterSchemes;
window.askQuickQuestion = askQuickQuestion;
window.sendMessage = sendMessage;
window.startVoiceInput = startVoiceInput;

// (The full definitions for the collapsed functions above are identical to the previous version)

// --- Full Function Definitions (for clarity) ---
function getTranslation(key) {
  const translations = appData.languages[currentLanguage];
  return translations[key] || "Translation not found";
}

function initializeChat() {
    const chatMessages = document.getElementById('chatMessages');
    if (!chatMessages) return;
    chatMessages.innerHTML = '';
    addChatMessage('bot', getTranslation('chat_welcome'));
}

function askQuickQuestion(type) {
  const translations = appData.languages[currentLanguage];
  const responseKey = 'response_' + type.split('_')[0]; 
  const response = translations[responseKey] || "Sorry, I don't have a specific answer for that right now.";
  addChatMessage('user', getTranslation(type));
  setTimeout(() => addChatMessage('bot', response), 1000);
}

function sendMessage() {
  const chatInput = document.getElementById('chatInput');
  if (!chatInput || !chatInput.value.trim()) return;
  addChatMessage('user', chatInput.value);
  const response = generateAIResponse(chatInput.value);
  chatInput.value = '';
  setTimeout(() => addChatMessage('bot', response), 1500);
}

function addChatMessage(sender, message) {
  const chatMessages = document.getElementById('chatMessages');
  const messageDiv = document.createElement('div');
  messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageDiv.innerHTML = `<span class="message-icon">${sender === 'user' ? '👤' : '🤖'}</span><div class="message-content">${message}</div>`;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateAIResponse() {
  const responses = appData.languages[currentLanguage].generic_responses;
  return responses[Math.floor(Math.random() * responses.length)];
}

function openCamera() { document.getElementById('imageInput').click(); }

function analyzeImage(event) {
  if (!event.target.files[0]) return;
  showLoading();
  setTimeout(() => {
    hideLoading();
    const randomDiseaseKey = appData.diseases[Math.floor(Math.random() * appData.diseases.length)];
    const translations = appData.languages[currentLanguage];
    const analysisResult = document.getElementById('analysisResult');
    const diseaseInfo = document.getElementById('diseaseInfo');
    if (analysisResult && diseaseInfo) {
      const name = translations[randomDiseaseKey + '_name'] || randomDiseaseKey;
      diseaseInfo.innerHTML = `<div class="disease-item">...</div>`; // Simplified for brevity
      analysisResult.classList.remove('hidden');
    }
  }, 2000);
}

function filterSchemes() {
  const searchTerm = document.getElementById('schemeSearch').value.toLowerCase();
  document.querySelectorAll('.scheme-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(searchTerm) ? 'block' : 'none';
  });
}

function startVoiceInput() {
    const voiceBtn = document.querySelector('.voice-btn');
    if(voiceBtn) {
        voiceBtn.style.background = '#FF9800';
        voiceBtn.textContent = '🔴';
        setTimeout(() => {
            voiceBtn.style.background = '';
            voiceBtn.textContent = '🎤';
            document.getElementById('chatInput').value = "How to protect crops from heavy rain?";
        }, 2000);
    }
}

function showLoading() { document.getElementById('loading').classList.remove('hidden'); }
function hideLoading() { document.getElementById('loading').classList.add('hidden'); }

function setupOfflineDetection() {
  window.addEventListener('online', () => { isOffline = false; hideOfflineIndicator(); });
  window.addEventListener('offline', () => { isOffline = true; showOfflineIndicator(); });
  if (!navigator.onLine) { isOffline = true; showOfflineIndicator(); }
}

function showOfflineIndicator() { document.getElementById('offlineIndicator').classList.remove('hidden'); }
function hideOfflineIndicator() { document.getElementById('offlineIndicator').classList.add('hidden'); }

function setupServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(reg => console.log('SW registered.')).catch(err => console.log('SW reg failed:', err));
  }
}

