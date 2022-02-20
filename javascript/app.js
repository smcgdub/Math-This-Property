// Buttons
const calculateBtn = document.getElementById('calculate_btn');
const resetBtnCosts = document.getElementById('reset_btn_costs');
const resetBtnCostsAnnual = document.getElementById('reset_annual_btn_costs');
const resetBtn = document.getElementById('reset_btn');
const calculateMonthlyBtn = document.getElementById('calculate_monthly_btn');
const calculateAnnualBtn = document.getElementById('calculate_annual_costs_btn');

calculateBtn.addEventListener('click', function(){
  // Variables

  // Output numbers with currency
  let dollarUSLocale = Intl.NumberFormat('en-US');
  
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
  
  // Total Monthly Costs Breakdown - Original Code Start - Click To Expand ------------------------------------
  // let uiTotalMonthlyCosts = document.getElementById('total_monthly_costs_display').value = 
  // parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4)
  // Total Monthly Costs Breakdown - Original Code End -------------------------------------

  // Total Monthly Costs Breakdown - New Code Start ------------------------------------------------------------------
  let uiTotalMonthlyCosts = parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4);
  let uiTotalMonthlyCostsDisplay = document.getElementById('total_monthly_costs_display').value = 
  dollarUSLocale.format(uiTotalMonthlyCosts);
  // Total Monthly Costs Breakdown - New Code End ------------------------------------------------------------------

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
  // Net Annual Rent Equation New Code End ------------------------------------------

  // // Gross ROI Equation - Original Code Start -----------------------------------------
  // let uiGrossRoi = document.getElementById('gross_roi').value = 
  // parseFloat((uiGrossAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
  // // parseFloat(((uiGrossAnnualRent / uiPurchasePrice)) * 100).toFixed(2);
  // console.log("Gross ROI :" + uiGrossRoi)
  // // Gross ROI Equation - Original Code End -----------------------------------------

  // Gross ROI Equation
  let uiGrossRoi = document.getElementById('gross_roi').value = ((uiGrossAnnualRent / uiPurchasePrice) * 100).toFixed(2);

  // // Net ROI Equation - Original Code Start ----------------------------------------
  // let uiNetRoi = document.getElementById('net_roi').value =
  // parseFloat((uiNetAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
  // console.log("Net roi :" + uiNetRoi)
  // // Net ROI Equation - Original Code End ----------------------------------------

  // Net ROI
  let uiNetRoi = document.getElementById('net_roi').value = ((uiNetAnnualRent / uiPurchasePrice) * 100).toFixed(2);
  console.log(typeof uiGrossRoi)
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

// Calculate Monthly Costs Button
calculateMonthlyBtn.addEventListener('click', function(){
  // Output numbers with currency
  let dollarUSLocale = Intl.NumberFormat('en-US');

    // Individual Inputs
  let uiAdditionalCost1 = parseFloat(document.getElementById('additional_cost_1').value);
  let uiAdditionalCost2 = parseFloat(document.getElementById('additional_cost_2').value);
  let uiAdditionalCost3 = parseFloat(document.getElementById('additional_cost_3').value);
  let uiAdditionalCost4 = parseFloat(document.getElementById('additional_cost_4').value);
  
  // Logic for total annual costs
  let uiTotalMonthlyCosts = parseFloat(uiAdditionalCost1 + uiAdditionalCost2 + uiAdditionalCost3 + uiAdditionalCost4);
  // Display of total costs
  let uiTotalMonthlyCostsDisplay = document.getElementById('total_monthly_costs_display').value = 
  dollarUSLocale.format(uiTotalMonthlyCosts);
});

// Calculate Annual Costs Button
calculateAnnualBtn.addEventListener('click', function(){
  // Output numbers with currency
  let dollarUSLocale = Intl.NumberFormat('en-US');

  // Individual Inputs
  let uiAnnualCost1 = parseFloat(document.getElementById('annual_cost_1').value);
  let uiAnnualCost2 = parseFloat(document.getElementById('annual_cost_2').value);
  let uiAnnualCost3 = parseFloat(document.getElementById('annual_cost_3').value);
  let uiAnnualCost4 = parseFloat(document.getElementById('annual_cost_4').value);
  // Logic for total annual costs
  let uiTotalAnnualCosts = parseFloat(uiAnnualCost1 + uiAnnualCost2 + uiAnnualCost3 + uiAnnualCost4);
  // Display of total costs
  let uiTotalAnnualCostsDisplay = document.getElementById('total_annual_costs_display').value = 
  dollarUSLocale.format(uiTotalAnnualCosts);
});