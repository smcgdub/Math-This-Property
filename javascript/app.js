// Buttons
const calculateBtn = document.getElementById('calculate_btn');
const resetBtn = document.getElementById('reset_btn');

calculateBtn.addEventListener('click', function(){
  // Variables
  let uiPurchasePrice = parseFloat(document.getElementById('purchase_price').value);
  let uiGrossMonthlyRent = parseFloat(document.getElementById('gross_monthly_rent_input').value);
  
  // Monthly Rent Equation
  let uiGrossAnnualRent = document.getElementById('gross_annual_rent_display').value =
  parseFloat(uiGrossMonthlyRent) * 12;
  
  // Gross ROI Equation
  let uiGrossRoi = document.getElementById('gross_roi').value = 
  parseFloat((uiGrossAnnualRent) / parseFloat(uiPurchasePrice) * 100).toFixed(2);
})

// Reset Calculator Button
resetBtn.addEventListener('click', function(){
  document.getElementById('purchase_price').value = '';
  document.getElementById('gross_monthly_rent_input').value = '';
  document.getElementById('gross_annual_rent_display').value = '';
  document.getElementById('gross_roi').value = '';
});