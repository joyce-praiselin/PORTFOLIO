document.getElementById("runArrayExample").addEventListener("click", function () {
  let fruits = ["Apple", "Banana", "Cherry"];
  let output = "Initial Array: " + JSON.stringify(fruits) + "<br>";

  fruits.push("Mango");
  output += "After push: " + JSON.stringify(fruits) + "<br>";


  fruits.pop();
  output += "After pop: " + JSON.stringify(fruits) + "<br>";

  
  output += "Element at index 1: " + fruits.at(1) + "<br>";

  
  let combined = fruits.join(", ");
  output += "Combined String: " + combined + "<br>";


  let asString = fruits.toString();
  output += "Array as String: " + asString + "<br>";

  
  output += "Length of Array: " + fruits.length + "<br>";

  
  document.getElementById("arrayOutput").innerHTML = output;
});


  