// Mock de livros
const livros = [
  { titulo: "1984", autor: "George Orwell", desc: "Distopia sobre vigilância e poder." },
  { titulo: "Sapiens", autor: "Yuval Noah Harari", desc: "Breve história da humanidade." },
];

const lista = document.getElementById("book-list");
if (lista) {
  livros.forEach(l => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${l.titulo}</h3>
      <p><strong>Autor:</strong> ${l.autor}</p>
      <p>${l.desc}</p>
      <button>Reservar</button>
    `;
    lista.appendChild(card);
  });
}
