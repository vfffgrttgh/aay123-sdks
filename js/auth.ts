const usernameInput: HTMLInputElement = document.getElementById("username");
const passwordInput: HTMLInputElement = document.getElementById("password");
const btn: any = document.getElementById("btn");

function handleSubmit(): void {
  const username = usernameInput.value;
  const password = passwordInput.value;

  localStorage.setItem("Username", username);
  localStorage.setItem("Password", password);
};

btn.onclick = handleSubmit();
