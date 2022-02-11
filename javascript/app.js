// Buttons
const calculateBtn = document.getElementById('calculate_btn');
const resetBtnCosts = document.getElementById('reset_btn_costs');
const resetBtnCostsAnnual = document.getElementById('reset_annual_btn_costs');
const resetBtn = document.getElementById('reset_btn');

calculateBtn.addEventListener('click', function(){
  // Variables
  // Purchase Price
  let uiPurchasePrice = parseFloat(document.getElementById('purchase_price').value);
  // Gross Monthly Rent
  let uiGrossMonthlyRent = parseFloat(document.getElementById('gross_monthly_rent_input').value);
  console.log("Purchase Price " + uiPurchasePrice)
  console.log("Monthly Rent " + uiGrossMonthlyRent)

  // Additional Monthly Cost Inputs
  let uiAdditionalCost1 = parseFloat(document.getElementById('additional_cost_1').value);
  let uiAdditionalCost2 = parseFloat(document.getElementById('additional_cost_2').value);
  let uiAdditionalCost3 = parseFloat(document.getElementById('additional_cost_3').value);
  let uiAdditionalCost4 = parseFloat(document.getElementById('additional_cost_4').value);
  console.log("Monthly cost 1 :" + uiAdditionalCost1)
  console.log("Monthly cost 2 :" + uiAdditionalCost2)
  console.log("Monthly cost 3 :" + uiAdditionalCost3)
  console.log("Monthly cost 4 :" + uiAdditionalCost4)
  console.log("Total Monthly Costs " + parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4) * 12)

  // Additional Annual Cost Inputs
  let uiAnnualCost1 = parseFloat(document.getElementById('annual_cost_1').value);
  let uiAnnualCost2 = parseFloat(document.getElementById('annual_cost_2').value);
  let uiAnnualCost3 = parseFloat(document.getElementById('annual_cost_3').value);
  let uiAnnualCost4 = parseFloat(document.getElementById('annual_cost_4').value);
  console.log("Annual Cost 1 :" + uiAnnualCost1)
  console.log("Annual Cost 2 :" + uiAnnualCost2)
  console.log("Annual Cost 3 :" + uiAnnualCost3)
  console.log("Annual Cost 4 :" + uiAnnualCost4)
  console.log("Total Annual Costs " + parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4))

  // Gross Annual Rent Equation
  let uiGrossAnnualRent = document.getElementById('gross_annual_rent_display').value =
  parseFloat((uiGrossMonthlyRent) * 12).toFixed(2);
  console.log("Gross annual rent " + uiGrossAnnualRent)

  // Total Annual Deductions
  let uiTotalAnnualDeductions = parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4).toFixed(2);
  console.log("Total annual deductions :" + uiTotalAnnualDeductions)

  // Total Monthly Deductions 
  let uiTotalMonthlyDeductions = parseFloat((uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4) * 12).toFixed(2);
  console.log("Total monthly deductions :" + uiTotalMonthlyDeductions)

  // Total Deductions
  let totalDeductions = document.getElementById('total_annual_deductions').value = 
  parseFloat((uiTotalMonthlyDeductions) + parseFloat(uiTotalAnnualDeductions)).toFixed(2);
  console.log("Total deductions :" + totalDeductions)

  // Net Annual Rent Equation
  let uiNetAnnualRent = document.getElementById('net_annual_rent_display'). value =
  parseFloat(uiGrossAnnualRent - totalDeductions).toFixed(2);
  console.log("Net annual rent :" + uiNetAnnualRent)

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
});

// Reset Annual Costs Button
resetBtnCostsAnnual.addEventListener('click', function(){
  document.getElementById('annual_cost_1').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_2').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_3').value = 0.00.toFixed(2);
  document.getElementById('annual_cost_4').value = 0.00.toFixed(2);
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
