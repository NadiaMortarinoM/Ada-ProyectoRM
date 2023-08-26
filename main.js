//primero declaramos la variable que contiene todas las tarjetas:
const container = document.getElementById("container");
console.log(container);

const getCharacters = () => {
    fetch ("https://rickandmortyapi.com/api/character")
    .then ((res) => res.json())
    .then ((data) => imageOfCharacters (data))
}

const imageOfCharacters = (data) => {
    console.log(data);

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
         <li>${detailPageJson.status}</li>
         <li>${detailPageJson.species}</li>
         <li>${detailPageJson.gender}</li>
         <li>${detailPageJson.location.name}</li>
         <li>${detailPageJson.origin.name}</li>
         <button class="button" onclick = BackToHome()>Back</button>
    </div>`
    })
}

const BackToHome = () => {
    window.history.back();
    location.reload();
}

getCharacters();
