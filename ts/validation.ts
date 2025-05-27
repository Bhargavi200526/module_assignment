// Define the structure for user data
interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// Define error messages for validations
enum ErrorMessages {
  NAME = "Name must be at least 3 characters.",
  EMAIL = "Invalid email format.",
  PASSWORD = "Password must be at least 8 characters.",
  CONFIRM = "Passwords do not match."
}

// Show error message under specific input field
function showError(id: string, message: string): void {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = message;
  }
}

// Clear all error messages before new validation starts
function clearErrors(): void {
  const errorIds = ["nameError", "emailError", "passwordError", "confirmPasswordError"];
  errorIds.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.textContent = "";
  });
}

// Event listener for form submission
document.getElementById("registrationForm")?.addEventListener("submit", function (e: Event) {
  e.preventDefault(); // Stop the form from submitting

  // Capture and trim user inputs
  const user: UserData = {
    name: (document.getElementById("name") as HTMLInputElement).value.trim(),
    email: (document.getElementById("email") as HTMLInputElement).value.trim(),
    password: (document.getElementById("password") as HTMLInputElement).value,
    confirmPassword: (document.getElementById("confirmPassword") as HTMLInputElement).value,
  };

  let isValid = true;
  clearErrors(); // Reset previous errors

  // Name must be only letters and minimum 3 characters
  const namePattern = /^[A-Za-z\s]+$/;
  if (user.name.length < 3 || !namePattern.test(user.name)) {
    showError("nameError", "Name must be at least 3 characters and contain only letters.");
    isValid = false;
  }

  // Basic email pattern check
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(user.email)) {
    showError("emailError", ErrorMessages.EMAIL);
    isValid = false;
  }

  // Password length validation
  if (user.password.length < 8) {
    showError("passwordError", ErrorMessages.PASSWORD);
    isValid = false;
  }

  // Confirm password match check
  if (user.password !== user.confirmPassword) {
    showError("confirmPasswordError", ErrorMessages.CONFIRM);
    isValid = false;
  }

  // Final submission check
  if (isValid) {
    alert("Form submitted successfully!");
  }
});
