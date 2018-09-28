const account = {
  balance: 500,

  getBalance() {
    return this.balance;
  },

  deposit(amount) {
    if (this.balance >= 5000) {
      return this.balance;
    } 
    return this.balance = this.balance + amount;
  },

  withdraw(amount) {
    if (this.balance <= 0) {
      return this.balance;
    }
    return this.balance = this.balance - amount;
  },
};

module.exports = account;
