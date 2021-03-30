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

  const date = data[0]["date"];
  console.log(date);
  const deaths = data[0]["deaths"];
  console.log(deaths);
  document.getElementById("deaths").innerHTML = deaths;
  const confirmedCases = data[0]["confirmed_cases"];
  console.log(confirmedCases);
  document.getElementById("confirmed-cases").innerHTML = confirmedCases;
  const newCases = data[0]["new_confirmed_cases"];
  console.log(newCases);
  document.getElementById("new-cases").innerHTML =
    "+" + newCases + " new cases";
  const newDeaths = data[0]["new_deaths"];
  console.log(newDeaths);
  let newElement = document.createElement("div");
  console.log(newElement);
});

console.log(deaths + "this is deaths again");
