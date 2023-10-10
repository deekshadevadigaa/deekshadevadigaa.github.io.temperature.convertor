function convertToCelsius() {
    const celsiusInput = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsiusInput * 9/5) + 32;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${celsiusInput}°C is equal to ${fahrenheit.toFixed(2)}°F`;

    // Add the pop class to trigger the animation
    resultElement.classList.add("pop");

    // Check the Celsius input value and change the body class accordingly
    if (celsiusInput < 30) {
        document.body.className = "low-temperature";
        // Reset text color to its original value
        document.getElementById("result").style.color = "";
        document.querySelector("h1").style.color = "";
    } else {
        document.body.className = "high-temperature";
        // Change text color to white
        document.getElementById("result").style.color = "white";
        document.querySelector("h1").style.color = "white";
    }
}

function convertToFahrenheit() {
    const fahrenheitInput = parseFloat(document.getElementById("celsius").value);
    const celsius = (fahrenheitInput - 32) * 5/9;
    const resultElement = document.getElementById("result");
    resultElement.textContent = `${fahrenheitInput}°F is equal to ${celsius.toFixed(2)}°C`;

    // Add the pop class to trigger the animation
    resultElement.classList.add("pop");

    // Check the Fahrenheit input value and change the body class accordingly
    if ((fahrenheitInput - 32) * 5/9 < 30) {
        document.body.className = "low-temperature";
        // Reset text color to its original value
        document.getElementById("result").style.color = "";
        document.querySelector("h1").style.color = "";
    } else {
        document.body.className = "high-temperature";
        // Change text color to white
        document.getElementById("result").style.color = "white";
        document.querySelector("h1").style.color = "white";
    }
}

// Add event listeners to the buttons
document.getElementById("convertToFahrenheit").addEventListener("click", convertToFahrenheit);
document.getElementById("convertToCelsius").addEventListener("click", convertToCelsius);
