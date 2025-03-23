document.getElementById("runOperatorsExample").addEventListener("click", () => {
    let a = 10, b = 5;
  
    // Arithmetic
    let sum = a + b;
    let difference = a - b;
  
    // Comparison
    let isGreater = a > b;
    let isEqual = a === b;
  
    // Logical
    let andCondition = a > 0 && b > 0;
    let orCondition = a > 0 || b < 0;
  
    // Display output
    const output = `
      <strong>Arithmetic:</strong><br>
      Sum: ${sum} <br>
      Difference: ${difference} <br><br>
  
      <strong>Comparison:</strong><br>
      Is Greater: ${isGreater} <br>
      Is Equal: ${isEqual} <br><br>
  
      <strong>Logical:</strong><br>
      AND Condition: ${andCondition} <br>
      OR Condition: ${orCondition}
    `;
  
    document.getElementById("operatorsOutput").innerHTML = output;
  });
  