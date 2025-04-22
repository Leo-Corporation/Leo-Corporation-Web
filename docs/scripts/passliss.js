function generatePassword() {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let newPassword = "";
  const length = 16;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    newPassword += chars[randomIndex];
  }

  setPassword(newPassword);

  // Calculate strength (simple version)
  let newStrength = 0;
  if (newPassword.length >= 12) newStrength += 25;
  if (/[A-Z]/.test(newPassword)) newStrength += 25;
  if (/[a-z]/.test(newPassword)) newStrength += 25;
  if (/[0-9]/.test(newPassword)) newStrength += 12.5;
  if (/[^A-Za-z0-9]/.test(newPassword)) newStrength += 12.5;

  setStrength(newStrength);
}

function getStrengthColor(strength) {
  if (strength < 50) return "bg-red-500";
  if (strength < 75) return "bg-yellow-500";
  return "bg-green-500";
}

function getStrengthText(strength) {
  if (strength < 50) return "Weak";
  if (strength < 75) return "Medium";
  return "Strong";
}

function setPassword(newPassword) {
  const passwordField = document.getElementById("passwordField");
  passwordField.innerText = newPassword;
}
function setStrength(newStrength) {
  const strengthField = document.getElementById("strengthField");
  strengthField.innerText = getStrengthText(newStrength);
  const progressBar = document.getElementById("progressBar");
  progressBar.className = `h-2 rounded-full ${getStrengthColor(newStrength)}`;
  progressBar.style.width = `${newStrength}%`;
}

generatePassword();
