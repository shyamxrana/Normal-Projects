const form = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((exp, index) => {
    total += exp.amount;

    const div = document.createElement("div");
    div.classList.add("expense-item");
    div.innerHTML = `
          <span>${exp.category} - ${exp.description}</span>
          <span>₹${exp.amount} <button onclick="deleteExpense(${index})">❌</button></span>
        `;
    expenseList.appendChild(div);
  });

  totalDisplay.textContent = "Total: ₹" + total;
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (description && amount) {
    expenses.push({ category, description, amount });
    form.reset();
    renderExpenses();
  }
});

function deleteExpense(index) {
  expenses.splice(index, 1);
  renderExpenses();
}

renderExpenses();
