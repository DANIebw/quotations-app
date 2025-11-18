let quoteCount = 0;
const form = document.getElementById("content"); //  selectionnaire ce qui m'interesse
form.addEventListener("submit", function (event) {
  event.preventDefault(); //   je veux que ma fonction se declanche en au clic

  //  récupérer les valeurs

  const text = document.getElementById("text").value; //   recuperation de l'input
  const author = document.getElementById("author").value; //   recuperation des auteurs
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
