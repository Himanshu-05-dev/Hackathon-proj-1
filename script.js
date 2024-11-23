document.getElementById('calculate').addEventListener('click', function () {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (!loanAmount || !interestRate || !loanTerm) {
        document.getElementById('result').textContent = "Please enter valid inputs!";
        return;
    }

    const monthlyRate = interestRate / 12;
    const numPayments = loanTerm * 12;
    const monthlyPayment = (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -numPayments));
    document.getElementById('result').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
});


// scripts.js
document.getElementById('calculate').addEventListener('click', function () {
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);

    if (isNaN(income) || isNaN(expenses)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    const balance = income - expenses;

    const balanceElement = document.getElementById('balance');
    if (balance >= 0) {
        balanceElement.textContent = `Balance: $${balance.toFixed(2)} (You are within budget!)`;
        balanceElement.style.color = 'green';
    } else {
        balanceElement.textContent = `Balance: $${balance.toFixed(2)} (You are over budget!)`;
        balanceElement.style.color = 'red';
    }
});