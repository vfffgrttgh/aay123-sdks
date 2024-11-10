const usernameInput = document.getElementById("username") as HTMLInputElement;
const passwordInput = document.getElementById("password") as HTMLInputElement;
const btn = document.getElementById("btn");

function handleSubmit(): void {
  const username = usernameInput.value;
  const password = passwordInput.value;

  localStorage.setItem("Username", username);
  localStorage.setItem("Password", password);
}

btn.onclick = handleSubmit; // Remove the parentheses to reference the function
