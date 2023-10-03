export const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal"
];

const gujaratsDistrict = [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Jamnagar",
    "Junagadh",
    "Anand",
    "Gandhinagar",
    "Patan",
    "Bharuch",
    "Mehsana",
    "Kutch",
    "Valsad",
    "Narmada",
    "Navsari",
    "Tapi",
    "Dahod",
    "Panchmahal",
    "Banaskantha",
    "Sabarkantha",
    "Surendranagar",
    "Amreli",
    "Botad",
    "Porbandar",
    "Dang",
    "Aravalli",
    "Devbhoomi Dwarka",
    "Morbi",
    "Mahisagar",
    "Chhota Udaipur",
    "Gir Somnath"
]

export const districtDataForAllStates = [
    {
        State: "Andhra Pradesh",
        districts: ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"]
    },
    {
        State: "Arunachal Pradesh",
        districts: ["Tawang", "West Kameng", "East Kameng", "Papum Pare", "Kurung Kumey", "Kra Daadi", "Lower Subansiri", "Upper Subansiri", "West Siang", "East Siang", "Siang", "Upper Siang", "Lower Siang", "Lower Dibang Valley", "Dibang Valley", "Anjaw", "Lohit", "Namsai", "Changlang", "Tirap", "Longding"]
    },
    {
        State: "Assam",
        districts: ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Kamrup Metropolitan", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"]
    },
    {
        State: "Gujarat",
        districts: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Anand", "Gandhinagar", "Patan", "Bharuch", "Mehsana", "Kutch", "Valsad", "Narmada", "Navsari", "Tapi", "Dahod", "Panchmahal", "Banaskantha", "Sabarkantha", "Surendranagar", "Amreli", "Botad", "Porbandar", "Dang", "Aravalli", "Devbhoomi Dwarka", "Morbi", "Mahisagar", "Chhota Udaipur", "Gir Somnath"]
    },
    {
        State: "Maharashtra",
        districts: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Kolhapur", "Solapur", "Aurangabad", "Amravati", "Nanded", "Jalgaon", "Akola", "Latur", "Dhule", "Satara", "Chandrapur", "Parbhani", "Raigad", "Beed", "Jalna", "Osmanabad", "Wardha", "Sangli", "Bhandara", "Yavatmal", "Gondia", "Hingoli", "Washim", "Gadchiroli", "Sindhudurg"]
    },
    {
        State: "Uttar Pradesh",
        districts: ["Lucknow", "Kanpur", "Agra", "Prayagraj (Allahabad)", "Varanasi", "Ghaziabad", "Meerut", "Jhansi", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Gorakhpur", "Faizabad (Ayodhya)", "Basti", "Mathura", "Firozabad", "Shahjahanpur", "Azamgarh", "Jaunpur", "Amroha (Jyotiba Phule Nagar)", "Mainpuri", "Rampur", "Hardoi", "Unnao", "Sitapur", "Lakhimpur Kheri", "Raebareli", "Barabanki", "Pratapgarh", "Budaun"]
    },
    {
        State: "Bihar",
        districts: ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga", "Nalanda", "Purnia", "Arrah", "Bihar Sharif", "Begusarai", "Katihar", "Sasaram", "Danapur", "Chapra", "Hajipur", "Saharsa", "Sasaram", "Motihari", "Bettiah", "Siwan", "Gopalganj", "Samastipur", "Buxar", "Munger", "Madhubani", "Buxar", "Kishanganj", "Saharsa", "Sheikhpura", "Jehanabad", "Jamui"]
    },
    {
        State: "Chhattisgarh",
        districts: ["Raipur", "Bilaspur", "Durg", "Bhilai", "Rajnandgaon", "Korba", "Raigarh", "Jagdalpur", "Ambikapur", "Dhamtari", "Mahasamund", "Kanker", "Kabirdham (Kawardha)", "Janjgir-Champa", "Koriya", "Surajpur", "Balrampur", "Sukma", "Narayanpur", "Bijapur", "Gariaband", "Balod", "Bemetara", "Mungeli", "Baloda Bazar", "Dantewada", "Kondagaon", "Sukma", "Bastar", "Narayanpur"]
    },
    {
        State: "Goa",
        districts: ["North Goa", "South Goa","Panjim","Candolim","Margao","Mormugao"]
    },
    {
        State: "Haryana",
        districts: ["Ambala", "Bhiwani", "Faridabad", "Fatehabad", "Gurgaon", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"]
    },
    {
        State: "Himachal Pradesh",
        districts: ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul and Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"]
    },
    {
        State: "Jharkhand",
        districts: ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"]
    },
    {
        State: "Kerala",
        districts: ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"]
    },
    {
        State: "Madhya Pradesh",
        districts: ["Bhopal", "Indore", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Rewa", "Ratlam", "Murwara (Katni)", "Singrauli", "Burhanpur", "Khandwa", "Bhind", "Chhindwara", "Guna", "Shivpuri", "Vidisha", "Damoh", "Mandsaur", "Khargone", "Neemuch", "Panna", "Raisen", "Harda", "Sagar", "Sehore", "Betul", "Shajapur", "Dhar"]
    },
    {
        State: "Manipur",
        districts: ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"]
    },
    {
        State: "Mizoram",
        districts: ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"]
    },
    {
        State: "Meghalaya",
        districts: ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri-Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"]
    },
    {
        State: "Nagaland",
        districts: ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"]
    },
    
    {
        State: "Odisha",
        districts: ["Baleshwar (Balasore)", "Bargarh (Baragarh)", "Baudh (Boudh)", "Bhadrak", "Cuttack", "Debagarh (Deogarh)", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajapur (Jajpur)", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar (Keonjhar)", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangapur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur (Sonepur)", "Sundargarh"]
    },
    {
        State: "Rajasthan",
        districts: ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Sri Ganganagar", "Tonk", "Udaipur"]
    },
    {
        State: "Punjab",
        districts: ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Ferozepur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sahibzada Ajit Singh Nagar (Mohali)", "Sangrur", "Shahid Bhagat Singh Nagar (Nawanshahr)", "Sri Muktsar Sahib", "Tarn Taran"]
    },
    {
        State: "Sikkim",
        districts: ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"]
    },
    {
        State: "Tamil Nadu",
        districts: ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kallakurichi", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Mayiladuthurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Ranipet", "Salem", "Sivaganga", "Tenkasi", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tirupathur", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"]
    },








    // Add more states and their districts here...
];



const resultantData = districtDataForAllStates.map((state)=>{
    const obj = {state:"",data:{}}
    obj.state = state.State
    state.districts.map((item)=>{
        let temp = {name:item,data:[{2015:Math.random()*100}, {2016:Math.random()*100},{2017:Math.random()*100},{2018:Math.random()*100},{2019:Math.random()*100},{2020:Math.random()*100},{2021:Math.random()*100},{2022:Math.random()*100},{2023:Math.random()*100}]};
        obj.district = temp;

    });

    return obj;
})

