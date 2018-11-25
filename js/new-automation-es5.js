/**
 * SubClassing: Traditional Way (ES5 and below, with `new` and `call` or `apply`)
 */

const UserCreator = function (userName, userScore) {
  this.userType = 'Free';
  this.userName = userName;
  this.userScore = userScore;
};

UserCreator.prototype.incrementScore = function () {
  const addScore = (n) => {
    this.userScore += n;
  };
  addScore(1);
};

const PaidUserCreator = function (paidUserName, paidUserScore, paidUserBalance) {
  UserCreator.call(this, paidUserName, paidUserScore); 
  // or, UserCreator.apply(this, [paidUserName, paidUserScore]);
  this.userType = 'Paid';
  this.userBalance = paidUserBalance;
};

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.incrementBalance = function () {
  const addBalance = (n) => {
    this.userBalance += n;
  };
  addBalance(1);
};

