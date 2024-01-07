//JavaScript code for application
function predict() {
    var stockSymbolInput = document.getElementById('stockSymbol');
    var currentStockValueInput = document.getElementById('currentStockValue');
    var resultDiv = document.getElementById('result');

    // Basic input validation
    if (stockSymbolInput.checkValidity() && currentStockValueInput.checkValidity()) {
        var stockSymbol = stockSymbolInput.value;
        var currentStockValue = parseFloat(currentStockValueInput.value);

        // Simple prediction: Assume a 10% annual growth
        var futureStockValue = currentStockValue * 1.1;

        resultDiv.innerText = `Estimated Stock Value for ${stockSymbol} after 1 year: $${futureStockValue.toFixed(2)}`;
    } else {
        resultDiv.innerText = ''; // Clear previous result
        alert('Please enter valid stock symbol and current stock value.');
    }

}


function displayHistory() {
    var historyContainer = document.getElementById('historyContainer');

    var predictions = [
        { symbol: 'AAPL', value: 150, date: '2023-01-01' },
        { symbol: 'AAPL', value: 160, date: '2023-02-01' },
        { symbol: 'AAPL', value: 170, date: '2023-03-01' },
    ];

    var historyHTML = '<h2>Prediction History</h2><ul>';
    predictions.forEach(prediction => {
        historyHTML += `<li>${prediction.symbol} - $${prediction.value} on ${prediction.date}</li>`;
    });
    historyHTML += '</ul>';

    historyContainer.innerHTML = historyHTML;
}


displayHistory();
