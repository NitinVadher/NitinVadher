class AccountClass {
  constructor(accountNumber, accountHolder, balance) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

    checkBalance() {
      console.log(this.balance)
    }
    deposit(amount) {
        console.log(this.balance = this.balance + amount)
    }
    withdraw(amount) {
        if (this.balance > amount)
        {
            console.log(this.balance = this.balance - amount)
        }
        else {
            console.log("Insufficient Balance");
            
        }
    }
}

var h = new AccountClass(123456789, "hiren", 50000)

console.log(h)
h.checkBalance();
h.deposit(30000)
h.withdraw(10000)

class ATM extends AccountClass {
  constructor(accountNumber, accountHolder, balance) {
    super(accountNumber, accountHolder, balance);
  }
  displayOptions() {
    console.log("Press 1 to checkBalance");
    console.log("Press 2 to Deposit Amount");
    console.log("Press 3 to Withdraw Amount");
  }
    performOperation(operation, amount) {
        if (operation == 1)
        {
            console.log(`current Ballance : ${this.balance}`);
        }
        
        if (operation == 2)
        {
            h.deposit(amount)
        }
        if (operation == 3)
        {
            h.withdraw(amount)
        }
  }
}


var hi = new ATM(125456789, "hiren", 70000);

console.log(hi);

hi.displayOptions()

hi.performOperation(3, 50000)