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
    const addScore = (n) => {
      this.userScore += n;
    };
    addScore(1);
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
    const addBalance = (n) => {
      this.userBalance += n;
    };
    addBalance(1);
  },
};

Object.setPrototypeOf(paidUserFunctions, userFunctions);
