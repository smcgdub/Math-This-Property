

// Add new monthly expense 
// var num = 1;
// document.getElementById('add').addEventListener('click', addMonthlyExpenseInput);

// function addMonthlyExpenseInput(){
//   // let newMonthlyExpenseLabel = '<label for="additional_cost_'+num+'">Additional Monthly Cost</label>'

//   var newMonthlyExpense = ''

//   document.getElementById('demo').innerHTML += addMonthlyExpenseInput;
//   num++;
// }

var num = 1;

document.getElementById('add').addEventListener("click",addInput);

function addInput(){

var newInput = '<input id="additional_cost_added" type="number" class="form-control" placeholder="0.00" min="0.01" step="0.01" value="0.00" <span class="input-group-text"><img src="https://img.icons8.com/external-becris-lineal-color-becris/40/000000/external-money-cryptocurrency-blockchain-becris-lineal-color-becris.png"/></span><br><br>';

document.getElementById('demo').innerHTML += newInput;  
   num++;
}

{/* <span class="input-group-text"><img src="https://img.icons8.com/external-becris-lineal-color-becris/40/000000/external-money-cryptocurrency-blockchain-becris-lineal-color-becris.png" /></span> */}