function checkLicense() {
  const inputKey = document.getElementById("licenseInput").value.trim();
  const usedKeys = JSON.parse(localStorage.getItem("used_keys") || "[]");
  const validKeys = JSON.parse(localStorage.getItem("valid_keys") || "[]");
  const message = document.getElementById("message");

  if (!inputKey) {
    message.textContent = "❌ Please enter a license key.";
    return;
  }

  if (usedKeys.includes(inputKey)) {
    message.textContent = "❌ License already used.";
    return;
  }

  if (validKeys.includes(inputKey)) {
    message.textContent = "✅ License accepted!";
    usedKeys.push(inputKey);
    localStorage.setItem("used_keys", JSON.stringify(usedKeys));
    document.getElementById("mainButton").style.display = "block";
    document.getElementById("licenseInput").disabled = true;
  } else {
    message.textContent = "❌ Invalid license key.";
  }
}

function generateLicense() {
  const usernameInput = document.getElementById("usernameInput");
  const generatedDisplay = document.getElementById("generatedKey");
  const username = usernameInput ? usernameInput.value.trim() : "";
  const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "";

  for (let i = 0; i < 16; i++) {
    if (i > 0 && i % 4 === 0) key += "-";
    key += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  const finalKey = username ? `${username.toUpperCase()}-${key}` : key;

  // Display generated key
  if (generatedDisplay) {
    generatedDisplay.textContent = `🔐 ${finalKey}`;
  }

  // Save to valid_keys
  const validKeys = JSON.parse(localStorage.getItem("valid_keys") || "[]");
  validKeys.push(finalKey);
  localStorage.setItem("valid_keys", JSON.stringify(validKeys));
}
