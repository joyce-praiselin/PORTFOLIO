document.getElementById("runStringExample").addEventListener("click", () => {
    const greeting = "Hello, World!";
    const sliced = greeting.slice(0, 5);
    const replaced = greeting.replace("World", "JavaScript");
    document.getElementById("stringOutput").innerHTML = `
      Original: ${greeting} <br>
      Sliced: ${sliced} <br>
      Replaced: ${replaced}
    `;
  });
  