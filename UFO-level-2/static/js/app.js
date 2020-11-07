// Level 1: Automatic Table and Date Search (Required)
// from data.js
var tableData = data;
// console.log(tableData);

// Get a reference to the table body
var tbody = d3.select("tbody");

// YOUR CODE HERE!
// Select the button

var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit", runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime");
  var inputElementCity = d3.select("#city");
  var inputElementState = d3.select("#state");
  var inputElementCountry = d3.select("#country");
  var inputElementShape = d3.select("#shape");

  // Get the value property of the input element
  var inputValueDate = inputElementDate.property("value");
  var inputValueCity = inputElementCity.property("value");
  var inputValueState = inputElementState.property("value");
  var inputValueCountry = inputElementCountry.property("value");
  var inputValueShape = inputElementShape.property("value");

  console.log(inputValueDate);
  console.log(tableData);

  var filteredData = tableData.filter(ufo => ufo.datetime === inputValueDate);
  var filteredDataCity = tableData.filter(ufo => ufo.city === inputValueCity);
  var filteredDataState = tableData.filter(ufo => ufo.state === inputValueState);
  var filteredDataCountry = tableData.filter(ufo => ufo.country === inputValueCountry);
  var filteredDataShape = tableData.filter(ufo => ufo.shape === inputValueShape);


  console.log(filteredData);

  // Show UFO Data on Web Page
  // Filter by Date
  filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Filter by City
  filteredDataCity.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Filter by State
  filteredDataState.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Filter by Country
  filteredDataCountry.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

  // Filter by Shape
  filteredDataShape.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

};





