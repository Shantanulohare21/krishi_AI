export interface DistrictData {
  id: string;
  region: 'Konkan' | 'Western Maharashtra' | 'Vidarbha' | 'Marathwada' | 'Khandesh';
  soilType: string;
  primaryCrops: string[];
}

export const MAHARASHTRA_DISTRICTS: Record<string, DistrictData> = {
  "Ahmednagar": { id: "ahmednagar", region: "Western Maharashtra", soilType: "Black Soil", primaryCrops: ["Sugarcane", "Bajra", "Wheat"] },
  "Akola": { id: "akola", region: "Vidarbha", soilType: "Black Cotton Soil", primaryCrops: ["Cotton", "Soybean", "Tur"] },
  "Amravati": { id: "amravati", region: "Vidarbha", soilType: "Black Soil", primaryCrops: ["Cotton", "Orange", "Soybean"] },
  "Aurangabad": { id: "aurangabad", region: "Marathwada", soilType: "Black Soil", primaryCrops: ["Cotton", "Bajra", "Sugarcane"] },
  "Beed": { id: "beed", region: "Marathwada", soilType: "Black/Red soil", primaryCrops: ["Cotton", "Bajra", "Soybean"] },
  "Bhandara": { id: "bhandara", region: "Vidarbha", soilType: "Laterite Soil", primaryCrops: ["Paddy", "Tur", "Wheat"] },
  "Buldhana": { id: "buldhana", region: "Vidarbha", soilType: "Black Soil", primaryCrops: ["Cotton", "Soybean", "Corn"] },
  "Chandrapur": { id: "chandrapur", region: "Vidarbha", soilType: "Red/Black Soil", primaryCrops: ["Paddy", "Cotton", "Soybean"] },
  "Dhule": { id: "dhule", region: "Khandesh", soilType: "Black Soil", primaryCrops: ["Cotton", "Corn", "Groundnut"] },
  "Gadchiroli": { id: "gadchiroli", region: "Vidarbha", soilType: "Red Laterite", primaryCrops: ["Paddy", "Linseed", "Tur"] },
  "Gondia": { id: "gondia", region: "Vidarbha", soilType: "Laterite Soil", primaryCrops: ["Paddy", "Tur", "Linseed"] },
  "Hingoli": { id: "hingoli", region: "Marathwada", soilType: "Black Soil", primaryCrops: ["Soybean", "Cotton", "Tur"] },
  "Jalgaon": { id: "jalgaon", region: "Khandesh", soilType: "Deep Black Soil", primaryCrops: ["Banana", "Cotton", "Corn"] },
  "Jalna": { id: "jalna", region: "Marathwada", soilType: "Black Soil", primaryCrops: ["Sweet Lime", "Cotton", "Bajra"] },
  "Kolhapur": { id: "kolhapur", region: "Western Maharashtra", soilType: "Laterite/Red Soil", primaryCrops: ["Sugarcane", "Paddy", "Tobacco"] },
  "Latur": { id: "latur", region: "Marathwada", soilType: "Medium Black Soil", primaryCrops: ["Soybean", "Pigeon Pea", "Sugarcane"] },
  "Mumbai City": { id: "mumbai_city", region: "Konkan", soilType: "Coastal Alluvial", primaryCrops: ["N/A"] },
  "Mumbai Suburban": { id: "mumbai_suburban", region: "Konkan", soilType: "Coastal Alluvial", primaryCrops: ["N/A"] },
  "Nagpur": { id: "nagpur", region: "Vidarbha", soilType: "Black Soil", primaryCrops: ["Orange", "Cotton", "Soybean"] },
  "Nanded": { id: "nanded", region: "Marathwada", soilType: "Black Soil", primaryCrops: ["Cotton", "Soybean", "Tur"] },
  "Nandurbar": { id: "nandurbar", region: "Khandesh", soilType: "Black/Hill Soil", primaryCrops: ["Chilli", "Cotton", "Corn"] },
  "Nashik": { id: "nashik", region: "Western Maharashtra", soilType: "Black Soil", primaryCrops: ["Grapes", "Onion", "Sugarcane"] },
  "Osmanabad": { id: "osmanabad", region: "Marathwada", soilType: "Medium Black Soil", primaryCrops: ["Soybean", "Tur", "Bajra"] },
  "Palghar": { id: "palghar", region: "Konkan", soilType: "Red Soil", primaryCrops: ["Paddy", "Chikoo", "Flowers"] },
  "Parbhani": { id: "parbhani", region: "Marathwada", soilType: "Black Soil", primaryCrops: ["Cotton", "Soybean", "Pigeon Pea"] },
  "Pune": { id: "pune", region: "Western Maharashtra", soilType: "Black/Red soil", primaryCrops: ["Sugarcane", "Tomato", "Wheat"] },
  "Raigad": { id: "raigad", region: "Konkan", soilType: "Laterite Soil", primaryCrops: ["Paddy", "Coconut", "Mango"] },
  "Ratnagiri": { id: "ratnagiri", region: "Konkan", soilType: "Laterite Soil", primaryCrops: ["Alphonso Mango", "Cashew", "Coconut"] },
  "Sangli": { id: "sangli", region: "Western Maharashtra", soilType: "Black Soil", primaryCrops: ["Grapes", "Sugarcane", "Turmeric"] },
  "Satara": { id: "satara", region: "Western Maharashtra", soilType: "Laterite/Black Soil", primaryCrops: ["Ginger", "Sugarcane", "Wheat"] },
  "Sindhudurg": { id: "sindhudurg", region: "Konkan", soilType: "Laterite Soil", primaryCrops: ["Alphonso Mango", "Cashew", "Nutmeg"] },
  "Solapur": { id: "solapur", region: "Western Maharashtra", soilType: "Deep Black Soil", primaryCrops: ["Pomegranate", "Sugarcane", "Bajra"] },
  "Thane": { id: "thane", region: "Konkan", soilType: "Red Soil", primaryCrops: ["Paddy", "Flowers", "Coconut"] },
  "Wardha": { id: "wardha", region: "Vidarbha", soilType: "Black Soil", primaryCrops: ["Cotton", "Soybean", "Tur"] },
  "Washim": { id: "washim", region: "Vidarbha", soilType: "Black Soil", primaryCrops: ["Soybean", "Cotton", "Corn"] },
  "Yavatmal": { id: "yavatmal", region: "Vidarbha", soilType: "Deep Black Soil", primaryCrops: ["Cotton", "Soybean", "Tur"] }
};
