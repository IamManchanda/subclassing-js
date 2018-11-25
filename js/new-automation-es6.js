/**
 * SubClassing: Modern Way (ES6 and beyond, with `new`, `class`, `extends` and `super`)
 */

const UserCreator = class {
  constructor(userName, userScore) {
    this.userType = 'Free';
    this.userName = userName;
    this.userScore = userScore;
  };
  incrementScore() {
    this.userScore += 1;
  };
};

const PaidUserCreator = class extends UserCreator {
  constructor(paidUserName, paidUserScore, paidUserBalance) {
    super(paidUserName, paidUserScore);
    this.userType = 'Paid';
    this.userBalance = paidUserBalance;
  };
  incrementBalance() {
    this.userBalance += 1;
  };
};
