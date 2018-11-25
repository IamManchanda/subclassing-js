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
    const addScore = (n) => {
      this.userScore += n;
    };
    addScore(1);
  };
};

const PaidUserCreator = class extends UserCreator {
  constructor(paidUserName, paidUserScore, paidUserBalance) {
    super(paidUserName, paidUserScore);
    this.userType = 'Paid';
    this.userBalance = paidUserBalance;
  };
  incrementBalance() {
    const addBalance = (n) => {
      this.userBalance += n;
    };
    addBalance(1);
  };
};
