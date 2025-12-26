const cart = ['apple', 'banana', 'orange'];

// We get a promise object inside the user {Promise<pending>}
// State of promise: pending and result: undefined
// const user = fetch('https://api.github.com/users/indumathi25');

// console.log(user);

// user.then((response) => {
//   // We get the actual data inside the jsonData {Object}
//   response.json().then((jsonData) => {
//     console.log(jsonData);
//   });
// });

// function getData() {
//   p.then((result) => {
//     console.log(result);
//   });
//   console.log('Fetching data...');
// }

async function fetchUser() {
  try {
    const user = await fetch('https://api.github.com/usasdfasers/indumathi25');
    const jsonData = await user.json();
    console.log(jsonData);
  } catch (error) {
    console.log('Error fetching user data:', error);
  }
}

fetchUser();

//fetchUser().then((result) => console.log(result)); // 'Promise resolved successfully!'
