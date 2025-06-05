document.getElementById('calculateBtn').addEventListener('click', () => {
    const bill = parseFloat(document.getElementById('bill').value);
    const tipPercent = parseFloat(document.getElementById('tip').value);
    const result = document.getElementById('result');
  
    if (isNaN(bill) || bill <= 0) {
      result.textContent = 'Please enter a valid bill amount.';
      return;
    }
  
    const tipAmount = bill * tipPercent;
    const total = bill + tipAmount;
  
    result.innerHTML = `
      💰 Tip: $${tipAmount.toFixed(2)} <br>
      🧾 Total: $${total.toFixed(2)}
    `;
  });
  