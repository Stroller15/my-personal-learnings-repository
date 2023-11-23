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

function register(callback) {
  setTimeout(() => {
    console.log("1.Register User");
    callback();
  }, 2000);
}

function sendEmail(callback) {
  setTimeout(() => {
    console.log("2.Email send User");
    callback();
  }, 2000);
}

function login(callback) {
  setTimeout(() => {
    console.log("3.login User");
    callback();
  }, 2000);
}

function getUserData(callback) {
  setTimeout(() => {
    console.log("4.Get User Data User");
    callback();
  }, 2000);
}

function displayUserData() {
  setTimeout(() => {
    console.log("5.Display User Data User");
  }, 2000);
}

// !   This is create callback hell

register(function () {
  sendEmail(function () {
    login(function () {
      getUserData(function () {
        displayUserData();
      });
    });
  });
});

console.log("Other Applicaiton work!");
