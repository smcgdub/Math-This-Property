// Buttons
const calculateBtn = document.getElementById('calculate_btn');
const resetBtnCosts = document.getElementById('reset_btn_costs');
const resetBtnCostsAnnual = document.getElementById('reset_annual_btn_costs');
const resetBtn = document.getElementById('reset_btn');

calculateBtn.addEventListener('click', function(){
  // Variables
  let uiPurchasePrice = parseFloat(document.getElementById('purchase_price').value);
  let uiGrossMonthlyRent = parseFloat(document.getElementById('gross_monthly_rent_input').value);
  
  // Additional Monthly Cost Inputs
  let uiAdditionalCost1 = parseFloat(document.getElementById('additional_cost_1').value);
  let uiAdditionalCost2 = parseFloat(document.getElementById('additional_cost_2').value);
  let uiAdditionalCost3 = parseFloat(document.getElementById('additional_cost_3').value);
  let uiAdditionalCost4 = parseFloat(document.getElementById('additional_cost_4').value);

  // Additional Annual Cost Inputs
  let uiAnnualCost1 = parseFloat(document.getElementById('annual_cost_1').value);
  let uiAnnualCost2 = parseFloat(document.getElementById('annual_cost_2').value);
  let uiAnnualCost3 = parseFloat(document.getElementById('annual_cost_3').value);
  let uiAnnualCost4 = parseFloat(document.getElementById('annual_cost_4').value);

  // Gross Annual Rent Equation
  let uiGrossAnnualRent = document.getElementById('gross_annual_rent_display').value =
  parseFloat((uiGrossMonthlyRent) * 12).toFixed(2);

  // Total Annual Deductions
  let uiTotalAnnualDeductions = parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4).toFixed(2);
  console.log(uiTotalAnnualDeductions)

  // Total Monthly Deductions 
  let uiTotalMonthlyDeductions = parseFloat((uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4) * 12).toFixed(2);
  console.log(uiTotalMonthlyDeductions)

  // Total Deductions
  let totalDeductions = document.getElementById('total_annual_deductions').value = 
  parseFloat(uiTotalAnnualDeductions + uiTotalMonthlyDeductions).toFixed(2)
  console.log(totalDeductions)

  // Net Annual Rent Equation
  let uiNetAnnualRent = document.getElementById('net_annual_rent_display'). value =
  parseFloat(uiGrossAnnualRent - uiTotalMonthlyDeductions).toFixed(2);

  // Gross ROI Equation
  let uiGrossRoi = document.getElementById('gross_roi').value = 
  parseFloat((uiGrossAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);

  // Net ROI
  let uiNetRoi = document.getElementById('net_roi').value =
  parseFloat((uiNetAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
})

// Reset Monthly Costs Button
resetBtnCosts.addEventListener('click', function(){
  document.getElementById('additional_cost_1').value = '';
  document.getElementById('additional_cost_2').value = '';
  document.getElementById('additional_cost_3').value = '';
  document.getElementById('additional_cost_4').value = '';
});

// Reset Annual Costs Button
resetBtnCostsAnnual.addEventListener('click', function(){
  document.getElementById('annual_cost_1').value = '';
  document.getElementById('annual_cost_2').value = '';
  document.getElementById('annual_cost_3').value = '';
  document.getElementById('annual_cost_4').value = '';
});

// Reset Whole Calculator Button
resetBtn.addEventListener('click', function(){
  document.getElementById('purchase_price').value = '';
  document.getElementById('gross_monthly_rent_input').value = '';
  document.getElementById('additional_cost_1').value = '';
  document.getElementById('additional_cost_2').value = '';
  document.getElementById('additional_cost_3').value = '';
  document.getElementById('additional_cost_4').value = '';
  document.getElementById('annual_cost_1').value = '';
  document.getElementById('annual_cost_2').value = '';
  document.getElementById('annual_cost_3').value = '';
  document.getElementById('annual_cost_4').value = '';
  document.getElementById('gross_annual_rent_display').value = '';
  document.getElementById('total_annual_deductions').value = '';
  document.getElementById('net_annual_rent_display').value = '';
  document.getElementById('gross_roi').value = '';
  document.getElementById('net_roi').value = '';
});
