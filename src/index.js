document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded!!!");
  fetchImages();
  fetchBreeds();
});

function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
    .then((response) => response.json())
    .then(renderImages);
}

function renderImages(data) {
  console.log(data);
  const imgContainer = document.querySelector("#dog-image-container");
  data.message.forEach((url) => {
    const div = document.createElement("div");
    div.innerHTML = `<img src="${url}">`;
    imgContainer.append(div);
  });
}

function fetchBreeds() {
  const breedUrl = "https://dog.ceo/api/breeds/list/all";
  fetch(breedUrl)
    .then((response) => response.json())
    .then(renderBreeds);
}

function renderBreeds(data) {
  console.log(data);
  const ul = document.querySelector("#dog-breeds");

  for (const breed in data.message) {
    const li = document.createElement("li");
    li.innerText = breed;

    li.addEventListener("click", (e) => {
      li.style.color = "red";
    });
    ul.append(li);
  }

  const breedDropdown = document.getElementById("breed-dropdown");
  let dogsList = document.querySelectorAll("#dog-breeds > li");
  console.log(dogsList);

  breedDropdown.addEventListener("change", (event) => {
    let filter = event.target.value;

    let filteredDogs = Array.from(dogsList).filter(
      (element) => element.innerHTML[0] === filter
    );

    document.querySelector("#dog-breeds").innerHTML = "";

    filteredDogs.forEach((dog) => {
      document.querySelector("#dog-breeds").append(dog);
    });
  });
}
