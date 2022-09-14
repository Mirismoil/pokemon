let elDiv = document.querySelector(".box");
let elResult = document.querySelector(".result");


pokemons.forEach(pokemon => {
  let newItem = CreatElement("li");
  let newImg = CreatElement("img", "card-img-top");
  let newHeading = CreatElement("h2");
  let newP = CreatElement("p");


  newImg.src = pokemon.img;
  newHeading.textContent = pokemon.name;
  newP.textContent = pokemon.weaknesses;
  newItem.append(newImg, newHeading, newP);

  elResult.append(newItem)
  elDiv.appendChild(elResult);
})









