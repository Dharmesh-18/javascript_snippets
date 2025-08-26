function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if(amount > balance) {
        console.log("Insufficient funds");
        return balance;
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  }
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(30);
console.log(account.getBalance()); // 130
account.withdraw(50);
console.log(account.getBalance()); // 80
