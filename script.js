document.getElementById('convert-btn').addEventListener('click', function() {
    // Get the input value and selected unit
    let temperature = parseFloat(document.getElementById('temperature').value);
    let unit = document.querySelector('input[name="unit"]:checked').value;
    let output = document.getElementById('output');
  
    // Check if the input is a valid number
    if (isNaN(temperature)) {
      output.textContent = "Please enter a valid number!";
      return;
    }
  
    // Perform the conversion based on the selected unit
    if (unit === 'Celsius') {
      output.textContent = `${temperature} °C = ${(temperature * 9/5 + 32).toFixed(2)} °F = ${(temperature + 273.15).toFixed(2)} K`;
    } else if (unit === 'Fahrenheit') {
      output.textContent = `${temperature} °F = ${((temperature - 32) * 5/9).toFixed(2)} °C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
    } else if (unit === 'Kelvin') {
      output.textContent = `${temperature} K = ${(temperature - 273.15).toFixed(2)} °C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)} °F`;
    }
  });
  