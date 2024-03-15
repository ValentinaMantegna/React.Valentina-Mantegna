function isUserLoggedIn(loginStatus) {
  // 1. if statement
  if (loginStatus === true) {
    return true;
  } else {
    return false;
  }

  // 2. if statement
  // if (loginStatus) {
  //   return true;
  // }
  // return false;

  // 3. if statement
  // if (loginStatus) return true;
  // return false;

  // 4.ternary operator
  // return loginStatus ? true : false;

  // 5. && and || operators
  // return loginStatus && true;
  // return loginStatus || false;
}

// && operator
// true && true => true,
// true && false => false,
// false && true => false,
// false && false => false

// || operator
// true || true => true,
// true || false => true,
// false || true => true,
// false || false => false
