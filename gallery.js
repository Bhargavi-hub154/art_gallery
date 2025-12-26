const artCards = document.querySelectorAll('.art-card');
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function() {
  const filter = this.value.toLowerCase();
  artCards.forEach(card => {
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
    if(title.includes(filter) || desc.includes(filter)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});