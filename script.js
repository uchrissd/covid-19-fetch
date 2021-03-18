/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

const fetchData = async (url) => {
  const response = await fetch(url);
  return await response.text();
};

const csvUrl =
  "https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/latimes-state-totals.csv";

fetchData(csvUrl).then((text) => {
  const data = d3.csvParse(text);
  console.log(data);

  const deaths = data.columns[2];
  const rows = data.length;
  console.log(rows);
  console.log(deaths);
});
