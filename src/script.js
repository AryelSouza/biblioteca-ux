const livros = [
  { titulo: "Redes de Computadores - Tanenbaum", autor: "Andrew S. Tanenbaum", status: "Disponível" },
  { titulo: "Engenharia de Software", autor: "Ian Sommerville", status: "Reservado" },
  { titulo: "Introdução a Algoritmos", autor: "Cormen", status: "Disponível" }
];

function searchBook() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const resultados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(query) ||
    livro.autor.toLowerCase().includes(query)
  );

  if (resultados.length === 0) {
    resultsDiv.innerHTML = "<p>Nenhum livro encontrado.</p>";
    return;
  }

  resultados.forEach(livro => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${livro.titulo}</h3>
      <p><strong>Autor:</strong> ${livro.autor}</p>
      <p><strong>Status:</strong> ${livro.status}</p>
      <button>Reservar</button>
    `;
    resultsDiv.appendChild(card);
  });
}
