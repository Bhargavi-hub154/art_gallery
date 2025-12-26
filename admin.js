function showArtGreeting() {
  const name = document.getElementById("username").value.trim() || "there";
  const mood = document.getElementById("mood").value;
  const hours = new Date().getHours();

  // Time-based greeting
  let timeMsg =
    hours < 12 ? "Good Morning" :
    hours < 18 ? "Good Afternoon" :
    "Good Evening";

  let moodMsg = "";
  switch (mood.toLowerCase()) {
    case "creative":
      moodMsg = "🎨 Today is perfect to sketch or paint something new!";
      break;
    case "inspired":
      moodMsg = "✨ Let your inspiration flow into your gallery!";
      break;
    case "curious":
      moodMsg = "🔍 Explore new artists or art styles today!";
      break;
    case "relaxed":
      moodMsg = "🖌 Take a calm moment with your favorite artwork.";
      break;
    default:
      moodMsg = "Enjoy your day at the gallery!";
  }

  // Detect uploaded artwork
  const artFileInput = document.getElementById("artUpload");
  let uploadMsg = "";

  if (artFileInput && artFileInput.files.length > 0) {
    const fileName = artFileInput.files[0].name;
    uploadMsg = ` ✨ Your artwork "${fileName}" was uploaded successfully!`;
  }

  const greetingText = `${timeMsg}, ${name}! ${moodMsg} ${uploadMsg}`;

  const messageEl = document.getElementById("greetingMessage");
  messageEl.textContent = greetingText;

  // Simple fade-in animation
  messageEl.style.animation = "none";
  void messageEl.offsetWidth;
  messageEl.style.animation = "fadeslide 0.8s ease";
}
