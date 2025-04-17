document.getElementById('investmentForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const initialAmount = parseFloat(document.getElementById('initialAmount').value);
  const monthlyContribution = parseFloat(document.getElementById('monthlyContribution').value);
  const years = parseFloat(document.getElementById('years').value);
  const rateOfReturn = parseFloat(document.getElementById('rateOfReturn').value) / 100;
  const compoundFrequency = parseInt(document.getElementById('compoundFrequency').value);

  // Calculate the future value
  const totalMonths = years * 12;
  const monthsPerYear = compoundFrequency;
  let futureValue = initialAmount;

  // Calculate compound interest and monthly contributions
  for (let month = 1; month <= totalMonths; month++) {
    futureValue += monthlyContribution;
    if (month % monthsPerYear === 0) {
      futureValue *= (1 + rateOfReturn / monthsPerYear);
    }
  }

  const totalContributions = initialAmount + (monthlyContribution * totalMonths);
  const totalReturn = futureValue - totalContributions;

  // Display results
  document.getElementById('totalContributions').textContent = totalContributions.toFixed(2);
  document.getElementById('totalReturn').textContent = totalReturn.toFixed(2);
  document.getElementById('finalValue').textContent = futureValue.toFixed(2);

  document.getElementById('results').classList.remove('hidden');
});
