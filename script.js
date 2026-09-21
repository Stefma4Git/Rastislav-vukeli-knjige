const grid = document.getElementById("books-grid");

if (books.length === 0) {
  grid.innerHTML = `
    <div class="empty-library">
      <strong>Biblioteka je trenutno prazna.</strong><br>
      Knjige će biti dodate uskoro.
    </div>
  `;
} else {
  grid.innerHTML = books.map(book => `
    <article class="book-card">
      <img class="cover" src="${book.cover}" alt="Naslovna strana knjige ${book.title}">
      <div class="book-info">
        <h3>${book.title}</h3>
        ${book.year ? `<div class="book-year">${book.year}</div>` : ""}
        ${book.description ? `<p class="book-description">${book.description}</p>` : ""}
        <div class="book-actions">
          <a class="read" href="${book.pdf}" target="_blank" rel="noopener">Čitaj PDF</a>
          <a href="${book.pdf}" download>Preuzmi</a>
        </div>
      </div>
    </article>
  `).join("");
}

document.getElementById("year").textContent = new Date().getFullYear();
