// Get References to DOM ELEMENTS
const converterForm = document.getElementById("converter-form");
const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const resultDiv = document.getElementById("result");


converterForm.addEventListener("submit", (event) => {
    event.preventDefault(); //to prevent reloading of page by button being pressed
    const amount = parseFloat(amountInput.value);

    // Get the selected currencies from the dropdown menus
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    // only proceed if the entered number is a valid number
    if (!isNaN(amount)) {
        fetchConversionRate(fromCurrency, toCurrency, amount); //still yet to be created
    } else {
        resultDiv.textContent = "Please Enter a valid amount"
    }
});


//Function to fetch the conversion rate and calculate the converted amount
function fetchConversionRate(fromCurrency, toCurrency, amount) {
    resultDiv.textContent = "Converting...";


    // Construct the API URL using the "from-currency"
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`;

    // Make a fetch request to get the exchange rates
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.rates[toCurrency];
            if (rate) {
                const convertedAmount = amount * rate;
                // resultDiv.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
                resultDiv.textContent = ` ${convertedAmount.toFixed(2)} ${toCurrency}`;
            } else {
                resultDiv.textContent = "Conversion rate not available.";
            }
        })

        .catch((error) => {
            // log any error to the console and inform the user
            console.error("Error fetching conversion rate:", error);
            resultDiv.textContent = "Error fetching conversion rate. Please try again later.";
        });


}



// Code to display the number on the screen 

// Targeting the display
let display = document.getElementById("amount")

// function to add character to the display
function appendCharacter(character) {
    amount.value += character;
}


// function to clear the display
function clearDisplay() {
    amount.value = "";
    resultDiv.textContent = ""
}


// function to delete the last character
function deleteLast() {
    amount.value = amount.value.slice(0, -1);
}