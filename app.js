const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity-of-stocks");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-button");
const outputArea = document.querySelector("#output-text");



submitHandler = () => {

        if(Number(initialPrice.value)>=0 && Number(quantityOfStocks.value)>0 && Number(currentPrice.value)>=0){
            const initial = Number(initialPrice.value);
            const quantity = Number(quantityOfStocks.value);
            const current = Number(currentPrice.value);
        
            calculateProfitLoss(initial, quantity, current);
        }
        else{
            showOutput('Please enter valid input.');
        }
        
};

calculateProfitLoss = (initial, quantity, current) => {
    
        let net;
        let change;
        let changePercent;
    
        if(initial > current){
            change = (initial-current)*quantity;
            changePercent = ((initial-current)/initial)*100;
            net = 'loss';

            showOutput('Hey, The ' + net + ' is ' + change + ' and the loss percent is ' + changePercent + ' %.');
        }
        else if(initial < current){
            change = (current-initial)*quantity;
            changePercent = ((current-initial)/initial)*100;
            net = 'profit';
            showOutput('Hey, The ' + net + ' is ' + change + ' and the profit percent is ' + changePercent + ' %.');
        }
        else{
            net = 'no change';
            change = 0;
            changePercent = 0;
            showOutput('Hey, You incurred ' + net + '.');
        }
    };

function showOutput(message){
    outputArea.innerText = message;
}

    checkButton.addEventListener("click", () => {
        if(Number(initialPrice.value) === 0 || Number(quantityOfStocks.value) === 0 || Number(currentPrice.value) === 0){
            showOutput('Please do not leave any field blank');
        }
        // else if(Number(initialPrice.value) < 0 || Number(quantityOfStocks.value) < 0 || Number(currentPrice.value) < 0){

        // }
        else{
            submitHandler();
        }
    });
// calculateProfitLoss = (initial, quantity, current) => {
    
//     let net;
//     let change;
//     let changePercent;
//     console.log(initial, quantity, current);

//     if(initial > current){
//         change = (initial-current)*quantity;
//         changePercent = (change/initial)*100;
//         net = 'loss';
//     }
//     else if(initial < current){
//         change = (current-initial)*quantity;
//         changePercent = (change/initial)*100;
//         net = 'profit';
//     }
//     else{
//         net = 'no change';
//         change = 0;
//         changePercent = 0;
//     }

//     return [net, change, changePercent];
// };

// submitHandler = (initialPrice, quantityOfStocks, currentPrice) => {
//     const initial = Number(initialPrice.value);
//     const quantity = Number(quantityOfStocks.value);
//     const current = Number(currentPrice.value);

//     calculateProfitLoss(initial, quantity, current);
// };

// checkButton.addEventListener('click', () => {
//     const [net, change, changePercent] = submitHandler(initialPrice, quantityOfStocks, currentPrice);

//     outputArea.innerText = "Hey! You incurred " + net + ". It is " + change + " and the percent is " + changePercent + "%"
// });