class PersonAccount {
  constructor(firstName, lastName, incomes, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.incomes = incomes;
    this.expenses = expenses;
  }

  totalIncome() {
    let sum = 0;
    this.incomes.forEach((elements) => {
      sum += elements.income;
    });
    return sum;
  }

  totalExpense() {
    let sum = 0;
    this.expenses.forEach((elements) => {
      sum += elements.expense;
    });
    return sum;
  }

  addIncome() {
    let incomeAmount = parseInt(prompt(`Enter the income amount: `));
    let incomeDesc = String(prompt(`Enter income description`));

    this.incomes.push(new Income(incomeAmount, incomeDesc));

    console.log(`New Income ${incomeAmount}, desc ${incomeDesc} added`);
  }

  addExpense() {
    let expenseAmount = parseInt(prompt(`Enter the expense amount: `));
    let expenseDesc = String(prompt(`Enter expense description`));

    this.expenses.push(new Expense(expenseAmount, expenseDesc));

    console.log(`New Expense ${expenseAmount}, desc ${expenseDesc} added`);
  }

  accountBalance() {
    return this.totalIncome() - this.totalExpense();
  }

  displayInfo() {
    console.log(`Account Information:`);
    console.log(`Name: ${this.firstName} + ${this.lastName}`);
    console.log(`Total Income: ${this.totalIncome()}`);
    console.log(`Total Expense: ${this.totalExpense()}`);
    console.log(`Account Balance: ${this.accountBalance()}`);
  }
}

class Income {
  constructor(income, desc) {
    this.income = income;
    this.desc = desc;
  }
}

class Expense {
  constructor(expense, desc) {
    this.expense = expense;
    this.desc = desc;
  }
}

// array of objects of Income class
let incomes = [
  new Income(50000, `Shop`),
  new Income(45000, `Rent`),
  new Income(20000, `Tuition`),
];

// array of objects of Expense class
let expenses = [
  new Expense(20000, `Fees`),
  new Expense(25000, `Bills`),
  new Expense(30000, `Groceries`),
];

//instantiating instance of class PersonAccount
//passing array of objects of Income and Expense class
function driverQ1() {
  let account1 = new PersonAccount(`Ali`, `Ahmed`, incomes, expenses);
  console.log(account1.displayInfo());
}
