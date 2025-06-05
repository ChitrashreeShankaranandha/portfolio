document.getElementById('calculateBtn').addEventListener('click', () => {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipInput = parseFloat(document.getElementById('tip').value);
    const result = document.getElementById('result');
  
    if (isNaN(bill) || bill <= 0) {
        result.textContent = 'Please enter a valid bill amount.';
        return;
      }

    if (isNaN(tipInput) || tipInput < 0) {
        result.textContent = 'Please enter a valid tip percentage.';
        return;
      }
    
  
    const tipPercent = tipInput / 100;
    const tipAmount = bill * tipPercent;
    const total = bill + tipAmount;
  
    result.innerHTML = `
      💰 Tip: $${tipAmount.toFixed(2)} <br>
      🧾 Total: $${total.toFixed(2)}
    `;
  });
  