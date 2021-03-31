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
  let deaths = data[0]["deaths"];
  const deathsFormatted = new Intl.NumberFormat().format(deaths);
  console.log(deathsFormatted);
  document.getElementById("deaths").innerHTML = deathsFormatted;
  let confirmedCases = data[0]["confirmed_cases"];
  const confirmedCasesFormatted = new Intl.NumberFormat().format(
    confirmedCases
  );
  console.log(confirmedCases);
  document.getElementById(
    "confirmed-cases"
  ).innerHTML = confirmedCasesFormatted;
  let newCases = data[0]["new_confirmed_cases"];
  console.log(newCases);
  const newCasesFormatted = new Intl.NumberFormat().format(newCases);
  document.getElementById("new-cases").innerHTML =
    "+" + newCasesFormatted + " new cases ";
  let newDeaths = data[0]["new_deaths"];
  const newDeathsFormatted = new Intl.NumberFormat().format(newDeaths);
  console.log(newDeaths);
  document.getElementById("new-deaths").innerHTML =
    "+" + newDeathsFormatted + " new deaths";
});

const vaccineUrl =
  "https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/cdph-vaccination-state-totals.csv";

fetchData(vaccineUrl).then((text) => {
  const data = d3.csvParse(text);
  console.log(data);
  let dosesAdministered = data[0]["doses_administered"];
  const dosesAdministeredFormatted = new Intl.NumberFormat().format(
    dosesAdministered
  );
  console.log(dosesAdministered);
  document.getElementById(
    "doses-administered"
  ).innerHTML = dosesAdministeredFormatted;
  let newDosesAdministered = [0]["new_doses_administered"];
  console.log(newDosesAdministered);
});

let date = moment().format("MMMM Do YYYY, h:mm:ss a");
document.getElementById("date").innerHTML = date;
console.log(date);
