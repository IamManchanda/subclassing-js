/**
 * SubClassing: Factory Functions (under the hood, with `Object.create` and `Object.setPrototypeOf`)
 */

const UserCreator = function (userName, userScore) {
  const newUser = Object.create(userFunctions);
  newUser.userType = 'Free';
  newUser.userName = userName;
  newUser.userScore = userScore;
  return newUser;
};

const userFunctions = {
  incrementScore() {
    this.userScore += 1;
  },
};

const PaidUserCreator = function (paidUserName, paidUserScore, paidUserBalance) {
  const newPaidUser = UserCreator(paidUserName, paidUserScore);
  newPaidUser.userType = 'Paid';
  newPaidUser.userBalance = paidUserBalance;
  Object.setPrototypeOf(newPaidUser, paidUserFunctions);
  return newPaidUser;
};

const paidUserFunctions = {
  incrementBalance() {
    this.userBalance += 1;
  },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);
