document.getElementById("search-for").addEventListener("click", () => {
  let value = document.getElementById("nonmal").value;
  if(value === null || value.trim() === ""){
    FetchSuperHeroData();
    return;
    }
    FetchHero(sanitizeInput(value));
});


function sanitizeInput(str) {
  str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, " ");
  return str.trim();
}

function FetchSuperHeroData() {
  fetch("http://localhost/info2180-lab4/superheroes.php")
    .then((result) => result.text())
    .then((data) => updatediv(data))
    .catch((err) => alert(err));
}

function FetchHero(heroName) {
  fetch(`http://localhost/info2180-lab4/superheroes.php?query=${heroName}`)
    .then((result) => result.text())
    .then((data) => updatediv(data))
    .catch((err) => alert(err));
}

function updatediv(data) {
  document.getElementById("result").innerHTML = data;
}
