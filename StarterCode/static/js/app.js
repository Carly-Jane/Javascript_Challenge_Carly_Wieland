// from data.js
var tableData = data;
console.log(tableData);

// YOUR CODE HERE!
//Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the alien sighting data from data.js
console.log(data);

// 03-Evr_D3_Table
// Loop through data and console.log each alien sighting report object
data.forEach(function (alienSighting) {
  console.log(alienSighting);
  // Use d3 to append one table row `tr` for each alien sighting report object
  var row = tbody.append("tr");
  // use Object.entries to console.log each alien sighting report value
  Object.entries(alienSighting).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value in the alien sighting report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// html id changed to id="submit" section
// 09-Par_Form_Filter
// Select the submit button
var submit = d3.select("#submit");
// Use D3 `.on` to attach a click handler
submit.on("click", function () {
  // Prevent page from refreshing
  d3.event.preventDefault();
  d3.select(".summary").html("");

  // Select the input element and get the raw HTML node
  // Get the value property of the input element #datetime
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");

  // Use the form input to filter the data by blood type
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  // loop - see above 03-Evr_D3_Table
  filteredData.forEach((datetime) => {
    var row = tbody.append("tr");
    Object.entries(datetime).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});