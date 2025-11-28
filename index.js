function createLoginTracker(userInfo) {

  let attemptCount = 0;

  // Arrow function to handle each login attempt
  return (passwordAttempt) => {
    attemptCount += 1;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } else if (passwordAttempt !== userInfo.password && attemptCount <= 3) {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };
}

// Executing the function
const user = {
  username: "user1",
  password: "password123",
};

const login = createLoginTracker(user);
console.log(login("password123"));

module.exports = {
  ...(typeof createLoginTracker !== "undefined" && { createLoginTracker }),
};
