// Declare variables of different data types
let name = "Expense Tracker"; // string
let version = 1.0; // number
let isActive = true; // boolean

// Define functions to perform simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        document.getElementById("errorMessage").classList.remove("hidden");
        return null;
    }
}

function multiply(a, b) {
    return a * b;
}

// Function to handle button clicks
function handleOperation(operation) {
    const inputField = document.getElementById("inputField");
    const resultElement = document.getElementById("result");
    const errorMessage = document.getElementById("errorMessage");
    const value = parseFloat(inputField.value);

    errorMessage.classList.add("hidden");

    if (!isNaN(value)) {
        let result;
        switch (operation) {
            case 'add':
                result = add(value, 10); // Example: adding 10
                break;
            case 'subtract':
                result = subtract(value, 5); // Example: subtracting 5
                break;
            case 'multiply':
                result = multiply(value, 2); // Example: multiplying by 2
                break;
            case 'divide':
                result = divide(value, 2); // Example: dividing by 2
                break;
        }
        resultElement.textContent = "Result: " + result;
        updateChart(result);
    } else {
        resultElement.textContent = "Please enter a valid number.";
    }
}

// Add event listeners to buttons
document.getElementById("addButton").addEventListener("click", () => handleOperation('add'));
document.getElementById("subtractButton").addEventListener("click", () => handleOperation('subtract'));
document.getElementById("multiplyButton").addEventListener("click", () => handleOperation('multiply'));
document.getElementById("divideButton").addEventListener("click", () => handleOperation('divide'));

// Initialize Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Result'],
        datasets: [{
            label: 'Operation Result',
            data: [0],
            backgroundColor: ['rgba(75, 192, 192, 0.2)'],
            borderColor: ['rgba(75, 192, 192, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Function to update the chart
function updateChart(value) {
    myChart.data.datasets[0].data[0] = value;
    myChart.update();
}
