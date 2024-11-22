// Starter code:
const users = [
  { firstName: "Alice", lastName: "Johnson", points: 120 },
  { firstName: "Bob", lastName: "Smith", points: 99 },
  { firstName: "Charlie", lastName: "Brown", points: 180 },
];

// Solution

// Using map() method to create a new array of objects with fullName and membershipStatus properties
const userDetails = users.map((user) => {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    // If points are greater than 100, membershipStatus is "Premium", otherwise "Standard"
    membershipStatus: user.points > 100 ? "Premium" : "Standard",
  };
});

// Output
console.log(userDetails);
