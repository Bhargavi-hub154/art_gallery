const searchInput = document.getElementById("searchbox");
const artistContainer = document.getElementById("artistContainer");
const artistCards = Array.from(artistContainer.getElementsByClassName("artist-card"));

const noResults = document.createElement("p");
noResults.textContent = "No artists found.";
noResults.style.gridColumn = "1 / -1";
noResults.style.color = "#62483A";
noResults.style.fontSize = "1.2em";
noResults.style.display = "none";
artistContainer.appendChild(noResults);

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();
  let anyVisible = false;

  artistCards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(searchTerm)) {
      card.style.display = "block";
      anyVisible = true;
    } else {
      card.style.display = "none";
    }
  });

  if (!anyVisible) {
    noResults.style.display = "block";
  } else {
    noResults.style.display = "none";
  }
});