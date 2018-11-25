/**
 * Testing 
 */

const user1 = new UserCreator("Harry Manchanda", 5);
user1.incrementScore();
console.log('User 1 (Free):', user1);

const user2 = new PaidUserCreator("Larry Page", 8, 25);
user2.incrementScore();
user2.incrementBalance();
console.log('User 2 (Paid):', user2);