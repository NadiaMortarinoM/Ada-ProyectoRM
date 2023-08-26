const baseUrl = "https://rickandmortyapi.com/api/character";
let currentPage = 1;
const charactersPerPage = 20;

// Función para cargar personajes de una página específica
const loadCharacters = (page) => {
  fetch(`${baseUrl}?page=${page}&limit=${charactersPerPage}`)
    .then((res) => res.json())
    .then((data) => {
      // Aquí puedes hacer lo que necesites con los datos recibidos, por ejemplo:
      console.log(data.results); // Array de personajes de esta página
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

// Cargar la primera página al inicio
loadCharacters(currentPage);

// Evento para avanzar a la siguiente página
document.getElementById("nextButton").addEventListener("click", () => {
  currentPage++;
  loadCharacters(currentPage);
});

// Evento para retroceder a la página anterior
document.getElementById("prevButton").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    loadCharacters(currentPage);
  }
});
