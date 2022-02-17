// Buttons
const calculateBtn = document.getElementById('calculate_btn');
const resetBtnCosts = document.getElementById('reset_btn_costs');
const resetBtnCostsAnnual = document.getElementById('reset_annual_btn_costs');
const resetBtn = document.getElementById('reset_btn');

calculateBtn.addEventListener('click', function(){
  // Variables

  // Output numbers with currency
  let dollarUSLocale = Intl.NumberFormat('en-US');
  // let testAmount = 1000000;
  
  // Purchase Price
  let uiPurchasePrice = parseFloat(document.getElementById('purchase_price').value);

  // Gross Monthly Rent
  let uiGrossMonthlyRent = parseFloat(document.getElementById('gross_monthly_rent_input').value);
  console.log("Purchase Price " + uiPurchasePrice)
  console.log("Monthly Rent " + uiGrossMonthlyRent)
  // console.log("Test amount displayed as: " + dollarUSLocale.format(testAmount));

  // Additional Monthly Cost Inputs
  let uiAdditionalCost1 = parseFloat(document.getElementById('additional_cost_1').value);
  let uiAdditionalCost2 = parseFloat(document.getElementById('additional_cost_2').value);
  let uiAdditionalCost3 = parseFloat(document.getElementById('additional_cost_3').value);
  let uiAdditionalCost4 = parseFloat(document.getElementById('additional_cost_4').value);
  
  // Total Monthly Costs Breakdown - Original Code Start - Click To Expand ------------------------------------
  // let uiTotalMonthlyCosts = document.getElementById('total_monthly_costs_display').value = 
  // parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4)
  // Total Monthly Costs Breakdown - Original Code End -------------------------------------

  // Total Monthly Costs Breakdown - New Code Start ------------------------------------------------------------------
  let uiTotalMonthlyCosts = parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4);
  let uiTotalMonthlyCostsDisplay = document.getElementById('total_monthly_costs_display').value = 
  dollarUSLocale.format(uiTotalMonthlyCosts);
  // Total Monthly Costs Breakdown - New Code End ------------------------------------------------------------------

  // console.log("Monthly cost 1 :" + uiAdditionalCost1)
  // console.log("Monthly cost 2 :" + uiAdditionalCost2)
  // console.log("Monthly cost 3 :" + uiAdditionalCost3)
  // console.log("Monthly cost 4 :" + uiAdditionalCost4)
  // console.log("Total Monthly Costs " + uiTotalMonthlyCosts)
  // console.log("Total Monthly Costs " + parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4) * 12)

  // Additional Annual Cost Inputs
  let uiAnnualCost1 = parseFloat(document.getElementById('annual_cost_1').value);
  let uiAnnualCost2 = parseFloat(document.getElementById('annual_cost_2').value);
  let uiAnnualCost3 = parseFloat(document.getElementById('annual_cost_3').value);
  let uiAnnualCost4 = parseFloat(document.getElementById('annual_cost_4').value);

  // Total Annual Costs Breakdown - Original Code Start ---------------------------------
  // let uiTotalAnnualCosts = document.getElementById('total_annual_costs_display').value = 
  // parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4)
  // Total Annual Costs Breakdown - Original Code End -----------------------------------
  
  // Total Annual Costs Breakdown - New Code Start -----------------------------------------
  let uiTotalAnnualCosts = parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4);
  let uiTotalAnnualCostsDisplay = document.getElementById('total_annual_costs_display').value = 
  dollarUSLocale.format(uiTotalAnnualCosts);
  // Total Annual Costs Breakdown - New Code End -----------------------------------------

  // console.log("Annual Cost 1 :" + uiAnnualCost1)
  // console.log("Annual Cost 2 :" + uiAnnualCost2)
  // console.log("Annual Cost 3 :" + uiAnnualCost3)
  // console.log("Annual Cost 4 :" + uiAnnualCost4)
  // console.log("Total Monthly Costs " + uiTotalAnnualCosts)
  // console.log("Total Annual Costs " + parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4))

  // Gross Annual Rent Equation - Original Code - Click to expand
  // let uiGrossAnnualRent = document.getElementById('gross_annual_rent_display').value =
  // parseFloat((uiGrossMonthlyRent) * 12).toFixed(2);
  // console.log("Gross annual rent " + uiGrossAnnualRent)
  // console.log("Gross annual rent " + uiGrossAnnualRent)
  // console.log("Gross annual rent displayed as: " + dollarUSLocale.format(uiGrossAnnualRent));

  // Gross Annual Rent Equation - New Code Start ------------------------------------------------
  let uiGrossAnnualRent = parseFloat(uiGrossMonthlyRent * 12).toFixed(2);
  let uiGrossAnnualRentDisplay = document.getElementById('gross_annual_rent_display').value =
  dollarUSLocale.format(uiGrossAnnualRent);
  // Gross Annual Rent Equation - New Code End --------------------------------------------------

  // Total Annual Deductions
  let uiTotalAnnualDeductions = parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4).toFixed(2);
  console.log("Total annual deductions :" + uiTotalAnnualDeductions)

  // Total Monthly Deductions 
  let uiTotalMonthlyDeductions = parseFloat((uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4) * 12).toFixed(2);
  console.log("Total monthly deductions :" + uiTotalMonthlyDeductions)

  // Total Deductions Start ---------------------------------------------------
  // Total Deductions - Original Code
  // let totalDeductions = document.getElementById('total_annual_deductions').value = 
  // parseFloat(uiTotalMonthlyDeductions) + parseFloat(uiTotalAnnualDeductions);
  // console.log("Total deductions :" + dollarUSLocale.format(totalDeductions))

  // Total Deductions - New Code Start -------------------------------------------------------------
  let totalDeductions = parseFloat(uiTotalMonthlyDeductions) + parseFloat(uiTotalAnnualDeductions);
  // document.getElementById('total_annual_deductions').value = 
  let totalDeductionsDisplay = document.getElementById('total_annual_deductions').value = 
  dollarUSLocale.format(totalDeductions);
  console.log("Total deductions :" + dollarUSLocale.format(totalDeductions));
  // The code above works and can be used on all of the output fields but you need to change the input field in the html from type="number" to type="text"
  // Total Deductions End --------------------------------------------------------------------------

  // Net Annual Rent Equation Original Code
  // let uiNetAnnualRent = document.getElementById('net_annual_rent_display'). value =
  // parseFloat(uiGrossAnnualRent - totalDeductions).toFixed(2);
  // console.log("Net annual rent :" + uiNetAnnualRent)

  // Net Annual Rent Equation New Code Start ----------------------------------------
  let uiNetAnnualRent = parseFloat(uiGrossAnnualRent - totalDeductions).toFixed(2);
  let uiNetAnnualRentDisplay = document.getElementById('net_annual_rent_display').value =
  dollarUSLocale.format(uiNetAnnualRent); 
  // document.getElementById('net_annual_rent_display'). value =
  // parseFloat(uiGrossAnnualRent - totalDeductions).toFixed(2);
  // console.log("Net annual rent :" + uiNetAnnualRent)
  // Net Annual Rent Equation New Code End ------------------------------------------


  // Gross ROI Equation
  let uiGrossRoi = document.getElementById('gross_roi').value = 
  parseFloat((uiGrossAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
  console.log("Gross ROI :" + uiGrossRoi)

  // Net ROI
  let uiNetRoi = document.getElementById('net_roi').value =
  parseFloat((uiNetAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
  console.log("Net roi :" + uiNetRoi)
})

// Reset Monthly Costs Button
resetBtnCosts.addEventListener('click', function(){
  document.getElementById('additional_cost_1').value = 0.00.toFixed(2);
  document.getElementById('additional_cost_2').value = 0.00.toFixed(2);
  document.getElementById('additional_cost_3').value = 0.00.toFixed(2);
  document.getElementById('additional_cost_4').value = 0.00.toFixed(2);
  document.getElementById('total_monthly_costs_display').value = 0.00.toFixed(2);
});

// Reset Annual Costs Button
resetBtnCostsAnnual.addEventListener('click', function(){
  document.getElementById('annual_cost_1').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_2').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_3').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_4').value = 0.00.toFixed(2);
  document.getElementById('total_annual_costs_display').value = 0.00.toFixed(2);
});

// Reset Whole Calculator Button
// resetBtn.addEventListener('click', function(){
//   document.getElementById('purchase_price').value = '';
//   document.getElementById('gross_monthly_rent_input').value = '';
//   document.getElementById('additional_cost_1').value = 0.00;
//   document.getElementById('additional_cost_2').value = 0.00;
//   document.getElementById('additional_cost_3').value = 0.00;
//   document.getElementById('additional_cost_4').value = 0.00;
//   document.getElementById('annual_cost_1').value = 0.00;
//   document.getElementById('annual_cost_2').value = 0.00;
//   document.getElementById('annual_cost_3').value = 0.00;
//   document.getElementById('annual_cost_4').value = 0.00;
//   document.getElementById('gross_annual_rent_display').value = '';
//   document.getElementById('total_annual_deductions').value = '';
//   document.getElementById('net_annual_rent_display').value = '';
//   document.getElementById('gross_roi').value = '';
//   document.getElementById('net_roi').value = '';
// });



// // Currency code
// var currencyInput = document.querySelectorAll('input[type="currency"]')
// var currency = 'EUR' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml

//  // format initial value
// onBlur({target:currencyInput})

// // bind event listeners
// currencyInput.addEventListener('focus', onFocus)
// currencyInput.addEventListener('blur', onBlur)


// function localStringToNumber( s ){
//   return Number(String(s).replace(/[^0-9.-]+/g,""))
// }

// function onFocus(e){
//   var value = e.target.value;
//   e.target.value = value ? localStringToNumber(value) : ''
// }

// function onBlur(e){
//   var value = e.target.value

//   var options = {
//       maximumFractionDigits : 2,
//       currency              : currency,
//       style                 : "currency",
//       currencyDisplay       : "symbol"
//   }
  
//   e.target.value = (value || value === 0) 
//     ? localStringToNumber(value).toLocaleString(undefined, options)
//     : ''
// }

// $("input[data-type='currency']").on({
//   keyup: function() {
//     formatCurrency($(this));
//   },
//   blur: function() { 
//     formatCurrency($(this), "blur");
//   }
// });


// function formatNumber(n) {
// // format number 1000000 to 1,234,567
// return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
// }


// function formatCurrency(input, blur) {
// // appends $ to value, validates decimal side
// // and puts cursor back in right position.

// // get input value
// var input_val = input.val();

// // don't validate empty input
// if (input_val === "") { return; }

// // original length
// var original_len = input_val.length;

// // initial caret position 
// var caret_pos = input.prop("selectionStart");
  
// // check for decimal
// if (input_val.indexOf(".") >= 0) {

//   // get position of first decimal
//   // this prevents multiple decimals from
//   // being entered
//   var decimal_pos = input_val.indexOf(".");

//   // split number by decimal point
//   var left_side = input_val.substring(0, decimal_pos);
//   var right_side = input_val.substring(decimal_pos);

//   // add commas to left side of number
//   left_side = formatNumber(left_side);

//   // validate right side
//   right_side = formatNumber(right_side);
  
//   // On blur make sure 2 numbers after decimal
//   if (blur === "blur") {
//     right_side += "00";
//   }
  
//   // Limit decimal to only 2 digits
//   right_side = right_side.substring(0, 2);

//   // join number by .
//   input_val = "$" + left_side + "." + right_side;

// } else {
//   // no decimal entered
//   // add commas to number
//   // remove all non-digits
//   input_val = formatNumber(input_val);
//   input_val = "$" + input_val;
  
//   // final formatting
//   if (blur === "blur") {
//     input_val += ".00";
//   }
// }

// // send updated string to input
// input.val(input_val);

// // put caret back in the right position
// var updated_len = input_val.length;
// caret_pos = updated_len - original_len + caret_pos;
// input[0].setSelectionRange(caret_pos, caret_pos);
// }


