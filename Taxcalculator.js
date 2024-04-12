
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("taxForm");
    const modal = document.getElementById("modal");
   
  
    const showErroricon = (element) => {
      const erroricon = element.nextElementSibling;
      erroricon.style.display = "inline";
    };
  
    const hideErroricon = (element) => {
      const erroricon = element.nextElementSibling;
      erroricon.style.display = "none";
    };
  
    const validateForm = () => {
      var value= input.value;
      var isvalid=/^\d*$/.test(value);
      if (!isvalid){
        document.getElementById('erroricon').classList.add('active');
      }
      else{
        document.getElementById('erroricon').classList.rmove('active');
      }
      
      const age = document.getElementById("age").value;
      if (!age) {
        showErroricon(document.getElementById("age"));
        isvalid = false;
      }
      return isvalid;
    };
    
  
    const calculateTax = () => {
      const income = parseFloat(document.getElementById("income").value);
      const extraIncome = parseFloat(document.getElementById("extraIncome").value);
      const deductions = parseFloat(document.getElementById("deductions").value);
      const age = document.getElementById("age").value;
  
      let tax = 0;
  
      const taxableIncome = income + extraIncome - deductions - 8;
      if (taxableIncome > 0) {
        switch (age) {
          case "<40":
            tax = taxableIncome * 0.3;
            break;
          case "40-60":
            tax = taxableIncome * 0.4;
            break;
          case "≥60":
            tax = taxableIncome * 0.1;
            break;
          default:
            break;
        }
      }
  
      return tax > 0 ? tax.toFixed(2) + " Lakhs" : "No Tax";
    };
  
    document.getElementById("submitBtn").addEventListener("click", function () {
      if (validateForm()) {
        const taxResult = calculateTax();
        document.getElementById("taxResult").textContent = `Tax to pay: ${taxResult}`;
        modal.style.display = "block";
      }
    });
  
   
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    });

  