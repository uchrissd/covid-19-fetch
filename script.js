/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

const deaths = "";

const csvUrl =
  "https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/latimes-state-totals.csv";

fetchData(csvUrl).then((text) => {
  const data = d3.csvParse(text);
  console.log(data);

  let date = data[0]["date"];
  console.log(date);
  let deaths = data[0]["deaths"];
  console.log(deaths);
  document.getElementById("deaths").innerHTML = deaths;
  document.getElementById("confirmed-cases").innerHTML = deaths;
  let confirmedCases = data[0]["confirmed_cases"];
  console.log(confirmedCases);
  document.getElementById("confirmed-cases").innerHTML = confirmedCases;
  let newCases = "+" + data[0]["new_confirmed_cases"] + " new cases ";
  console.log(newCases);
  document.getElementById("new-cases").innerHTML = newCases;
  let newDeaths = "+" + data[0]["new_deaths"] + " new deaths";
  console.log(newDeaths);
  document.getElementById("new-deaths").innerHTML = newDeaths;
});

const vaccineUrl =
  "https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/cdph-vaccination-state-totals.csv";

fetchData(vaccineUrl).then((text) => {
  const data = d3.csvParse(text);
  console.log(data);
  let dosesAdministered = data[0]["doses_administered"];
  console.log(dosesAdministered);
  document.getElementById("doses-administered").innerHTML = dosesAdministered;
  let newDosesAdministered = [0]["new_doses_administered"];
  console.log(newDosesAdministered);
});
