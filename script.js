const form = document.querySelector("#submit");
const result = document.querySelector("#answer");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const annualIncome = Number(e.target[0].value);
  const monthlyDebts = Number(e.target[1].value);
  const downPayment = Number(e.target[2].value);
  const interestRate = 50;
  const answer = calculateMortgagePayment(
    annualIncome,
    monthlyDebts,
    downPayment,
    interestRate
  );
  result.innerText = `$${answer}`;
});
function calculateMortgagePayment(
  annualIncome,
  monthlyDebts,
  downPayment,
  interestRate
) {
  const monthlyIncome = annualIncome / 12;
  const principal = (monthlyIncome * 2.5 - monthlyDebts - downPayment) * 0.8;
  if (principal < 0) {
    return downPayment;
  }
  const monthlyInterestRate = interestRate / 100 / 12;
  const totalPayments = 30 * 12; // assuming a 30-year mortgage
  const mortgagePayment =
    (principal *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments))) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  return mortgagePayment.toFixed(2);
}
