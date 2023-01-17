import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    .then(data => data.json())
    .then(data => {
      for (let counter in data.results) {
        const pokemonName = data.results[counter].name;
        const li = document.createElement("li");
        li.innerText = pokemonName;
        ul.appendChild(li);
      }
    });

  
});
