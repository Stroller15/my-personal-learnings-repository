// ! callbacks

/* Scenario

1. Register
2. Send welcome email
3. Login
4. Get user data
5. Display user data
*/

// function waitForThreeSeconds() {
//     let ms = 3000 + new Date().getTime();
//     while(new Date() < ms) {}
// }

function register() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("1.Register User");
      resolve("success");
    }, 2000);
  });
}

function sendEmail() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("2.Email send User");
      resolve();
    }, 2000);
  });
}

function login() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("3.login User");
      resolve();
    }, 2000);
  });
}

function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("4.Get User Data User");
      resolve();
    }, 2000);
  });
}

function displayUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("5.Display User Data User");
      resolve();
    }, 2000);
  });
}

// !   This is create callback hell

// register(function () {
//   sendEmail(function () {
//     login(function () {
//       getUserData(function () {
//         displayUserData();
//       });
//     });
//   });
// });

//?  #########  Promises

//? resolve(data) -> we get in then(data)
//? reject(data) -> we get in catch(data)

// register()
//   .then(sendEmail)
//   .then(login)
//   .then(getUserData)
//   .then(displayUserData)
//   .catch((err) => {
//     console.log("Error:", err);
//   });

// ************ Async and await ********************

// ? Hota h asynchronus lekin dekhega synchronus

//  async function authenticate() {
//     await register();
//     await sendEmail();
//     await login();
//     await getUserData();
//     await displayUserData();
//   }

//   authenticate().then(() => {
//     console.log("All set");
//   }).catch((err) => {
//     console.log("Error:", err);
//   })

// ******** Another method try and catch *************

async function authenticate() {
  try {
    const message = await register();
    await sendEmail();
    await login();
    await getUserData();
    await displayUserData();
    console.log(message);
  } catch (err) {
    console.log(err);

    throw new Error();
  }
}

authenticate().then(() => {
  console.log("All set");
});

console.log("Do other work of Applications");
