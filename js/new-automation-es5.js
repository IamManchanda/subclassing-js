/**
 * SubClassing: Traditional Way (ES5 and below, with `new` and `call` or `apply`)
 */

const UserCreator = function (userName, userScore) {
  this.userType = 'Free';
  this.userName = userName;
  this.userScore = userScore;
};

UserCreator.prototype.incrementScore = function () {
  this.userScore += 1;
};

const PaidUserCreator = function (paidUserName, paidUserScore, paidUserBalance) {
  UserCreator.call(this, paidUserName, paidUserScore); 
  // or, UserCreator.apply(this, [paidUserName, paidUserScore]);
  this.userType = 'Paid';
  this.userBalance = paidUserBalance;
};

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.incrementBalance = function () {
  this.userBalance += 1;
};

