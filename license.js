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
