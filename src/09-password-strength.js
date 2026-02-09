/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  if (typeof password !== "string" || password.length === 0) {
    return "weak"
  }

  function hasUppercase(str) {
    for (let i = 0; i < str.length; i+=1) {
      if (str[i] >= "A" && str[i] <= "Z") {
        return true;
      }
    }
    return false;
  }

  function hasLowercase(str) {
    for (let i = 0; i < str.length; i+=1) {
      if (str[i] >= "a" && str[i] <= "z") {
        return true;
      }
    }
    return false;
  }

  function hasNumber(str) {
    for (let i = 0; i < str.length; i+=1) {
      if (str[i] >= "0" && str[i] <= "9") {
        return true;
      }
    }
    return false;
  }

  function hasSpecialCharacter(str) {
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
    for (let i = 0; i < str.length; i+=1) {
      if (specialChars.includes(str[i])) {
        return true;
      }
    }
    return false;
  }

  let criteria = 0;

  if (password.length >= 8) {
    criteria += 1;
  }

  if (hasUppercase(password)) {
    criteria += 1;
  }

  if (hasLowercase(password)) {
    criteria += 1;
  }
  if (hasNumber(password)) {
    criteria += 1;
  }

  if(hasSpecialCharacter(password)) {
    criteria += 1;
  }

  if (criteria === 0 || criteria === 1) {
    return "weak";
  }
  else if (criteria === 2 || criteria === 3) {
    return "medium";
  }
  else if (criteria === 4) {
    return "strong";
  }
  else {
    return "very strong";
  }
}