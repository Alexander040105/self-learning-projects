let pollutants_Aqi = document.getElementById("aqi");
let pollutants_Concentration = document.getElementById("concentration");
let pollutantsData = document.getElementById("pollutants_data");

// checks if there is a text inside the li tags
let aqiHasText = Array.from(pollutants_Aqi.getElementsByTagName("li")).some(li => li.innerText.trim() !== "");
let concentrationHasText = Array.from(pollutants_Concentration.getElementsByTagName("li")).some(li => li.innerText.trim() !== "");

// if there's no text then the pollutants data will be hidden
if (!aqiHasText && !concentrationHasText) {
    pollutantsData.style.display = "none";
    console.log("It's working");
} else {
    pollutantsData.style.display = "flex";
    console.log("It's not");
}