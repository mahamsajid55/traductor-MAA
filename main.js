 // Spanish to English Dictionary
 const dictionary = {
    "ciudad": "city",
    "calle": "street",
    "parque": "park",
    "plaza": "square",
    "mercado": "market",
    "puente": "bridge",
    "edificio": "building",
    "hospital": "hospital",
    "escuela": "school",
    "biblioteca": "library",
    "aeropuerto": "airport",
    "estación": "station",
    "museo": "museum",
    "teatro": "theater",
    "hotel": "hotel"
};

// Reverse dictionary for English → Spanish
const reverseDictionary = {};
for (let key in dictionary) {
    reverseDictionary[dictionary[key]] = key;
}

// Populate datalists
function populateDatalists() {
    let spanishDatalist = document.getElementById("spanishWords");
    let englishDatalist = document.getElementById("englishWords");

    Object.keys(dictionary).forEach(word => {
        let option = document.createElement("option");
        option.value = word;
        spanishDatalist.appendChild(option);
    });

    Object.values(dictionary).forEach(word => {
        let option = document.createElement("option");
        option.value = word;
        englishDatalist.appendChild(option);
    });
}

populateDatalists(); // Call function to populate the datalists

// Spanish → English Translation
document.getElementById("spanishInput").addEventListener("input", () => {
    let inputText = document.getElementById("spanishInput").value.toLowerCase().trim();
    document.getElementById("englishOutput").value = dictionary[inputText] || "No encontrado";
});

// English → Spanish Translation
document.getElementById("englishInput").addEventListener("input", () => {
    let inputText = document.getElementById("englishInput").value.toLowerCase().trim();
    document.getElementById("spanishOutput").value = reverseDictionary[inputText] || "Not found";
});

