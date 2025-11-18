let quoteCount = 0;
let quotes = [];
const form = document.getElementById("content"); //  selectionnaire ce qui m'interesse
form.addEventListener("submit", function (event) {
  event.preventDefault(); //   je veux que ma fonction se declanche en au clic

  //  récupérer les valeurs

  const text = document.getElementById("text").value; //   recuperation de l'input
  const author = document.getElementById("author").value; //   recuperation des auteurs
  quotes.push({
    text: text,
    author: author,
  });

  localStorage.setItem("quotes", JSON.stringify(quotes));

  addQuote(text, author);
});

function addQuote(quote, author) {
  const quoteElement = document.createElement("p");
  // lui donner la classe "text"
  quoteElement.classList.add("text");
  // lui mettre le texte de la citation
  quoteElement.textContent = quote;

  // 2. créer le <p> pour l'auteur
  const authorElement = document.createElement("p");
  // lui donner la classe "author"
  authorElement.classList.add("author");
  // lui mettre le nom de l'auteur
  authorElement.textContent = author;

  const quoteDiv = document.createElement("div");
  // lui donner la classe "quote"
  quoteDiv.classList.add("quote");

  quoteDiv.appendChild(quoteElement);
  quoteDiv.appendChild(authorElement);

  // 5. récupérer la liste des citations
  const list = document.getElementById("quote-list");
  list.appendChild(quoteDiv);
  quoteCount += 1;
  const counter = document.getElementById("count");
  counter.innerText = quoteCount + " citations";
}

function loadQuotes() {
  const savedQuotes = localStorage.getItem("quotes");
  if (!savedQuotes) return; // rien à charger la première fois

  quotes = JSON.parse(savedQuotes); // on récupère le tableau

  quotes.forEach((q) => {
    // on réutilise ta fonction addQuote pour les afficher
    addQuote(q.text, q.author);
  });
}

loadQuotes();
