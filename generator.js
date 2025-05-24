let latestKey = "";

function generateKey() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let key = "BOSSJUN-";
  for (let i = 0; i < 8; i++) {
    key += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  latestKey = key;

  let validKeys = JSON.parse(localStorage.getItem("valid_keys") || "[]");
  validKeys.push(key);
  localStorage.setItem("valid_keys", JSON.stringify(validKeys));

  document.getElementById("output").textContent = key;
}

function copyKey() {
  if (!latestKey) return;
  navigator.clipboard.writeText(latestKey)
    .then(() => alert("License Key Copied!"))
    .catch(() => alert("Failed to copy key."));
}
