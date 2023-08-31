//primero declaramos la variable que contiene todas las tarjetas:
const container = document.getElementById("container");
let currentPage = 1;
let totalPages = 0;
//filtros (género: tener botones de todos, mujeres, hombres, desconocido)
//radious button
const todosBtn = document.getElementById("todos");
const mujeresBtn = document.getElementById("mujeres");
const hombresBtn = document.getElementById("hombres");
const desconocidoBtn = document.getElementById("desconocido");


const getCharacters = (pageNumber) => {
    container.innerHTML="";
    fetch (`https://rickandmortyapi.com/api/character?page=${pageNumber}`)
    .then ((res) => res.json())
    .then ((data) => {
        imageOfCharacters(data)
totalPages = data.info.pages;
    })
}


const imageOfCharacters = (data) => {
data.results.forEach(character => {
container.innerHTML +=
`<div class="card">
     <h2>${character.name}</h2>
     <img src="${character.image}" alt="">
     <button class="button" onclick = Description("${character.url}")>Details</button>
</div>`
    });
}

const Description = (detailPage) => {
    container.innerHTML = ""
    fetch (detailPage)
    .then ((res) => res.json())
    .then ((detailPageJson) => {
    container.innerHTML = 
    `<div class="card">
         <h2>${detailPageJson.name}</h2>
         <img src="${detailPageJson.image}" alt="">
         <li>Estado: ${detailPageJson.status}</li>
         <li>Especie: ${detailPageJson.species}</li>
         <li>Género: ${detailPageJson.gender}</li>
         <li>Nombre: ${detailPageJson.location.name}</li>
         <li>Origen: ${detailPageJson.origin.name}</li>
         <button class="button" onclick = BackToHome()>Back</button>
    </div>`
    })
}

const BackToHome = () => {
    window.history.back();
    location.reload();
}

getCharacters(currentPage);



// Evento para avanzar a la siguiente página
const nextBtn = document.getElementById("nextButton");
const prevBtn = document.getElementById("prevButton");

nextBtn.addEventListener("click", () => {
if (currentPage <= 1)   {
    currentPage++;
} else if (currentPage >1 && currentPage < totalPages) { //pasamos de la página 2 a la 41
    prevBtn.removeAttribute("disabled", false)
    currentPage++;
} else  {
    nextBtn.setAttribute("disabled", true)
} 

getCharacters(currentPage);
   
});
// Evento para la página anterior:
prevBtn.addEventListener("click", () => {
    if (currentPage <= 1)    {
        prevBtn.setAttribute("disabled", true)
    } else if (currentPage >1 && currentPage <= totalPages) { 
        currentPage--;
        nextBtn.removeAttribute("disabled", true)    
    } else  {
        nextBtn.setAttribute("disabled", true)
        currentPage--;
    } 
    
    getCharacters(currentPage);
       
    });

//filtros por género y planeta Tierra:
const filterWomen = (filterParam, valueParam) =>{
    container.innerHTML="";
    fetch(`https://rickandmortyapi.com/api/character/?${filterParam}=${valueParam}`).then(res=>res.json()).then(data=>imageOfCharacters(data))
}

mujeresBtn.addEventListener("click", ()=>
    filterWomen("gender", "female"));

//hombres:
const filterMen = (filterParam, valueParam) =>{
        container.innerHTML="";
        fetch(`https://rickandmortyapi.com/api/character/?${filterParam}=${valueParam}`).then(res=>res.json()).then(data=>imageOfCharacters(data))
    }
    
    hombresBtn.addEventListener("click", ()=>
        filterMen("gender", "male"));
//desconocidos:
const filterUnknown = (filterParam, valueParam) =>{
    container.innerHTML="";
    fetch(`https://rickandmortyapi.com/api/character/?${filterParam}=${valueParam}`).then(res=>res.json()).then(data=>imageOfCharacters(data))
}

unknownBtn.addEventListener("click", ()=>
       filterUnknown ("gender", "unknown"));

    







