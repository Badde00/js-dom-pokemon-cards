document.addEventListener("DOMContentLoaded", () => {
  const cardList = document.querySelector(".cards");

  data.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.classList.add("card");

    listItem.innerHTML = `
      <h2 class="card--title">${item.name}</h2>
  <img
    width="256"
    class="card--img"
    src=${item.sprites.other["official-artwork"].front_default}
  />
  <ul class="card--text">
    <li>HP: ${getStatByName(item.stats, "hp")}</li>
    <li>ATTACK: ${getStatByName(item.stats, "attack")}</li>
    <li>DEFENSE: ${getStatByName(item.stats, "defense")}</li>
    <li>SPECIAL-ATTACK: ${getStatByName(item.stats, "special-attack")}</li>
    <li>SPECIAL-DEFENSE: ${getStatByName(item.stats, "special-defense")}</li>
    <li>SPEED: ${getStatByName(item.stats, "speed")}</li>
  </ul>
    `;

    cardList.appendChild(listItem);
  });
});

function getStatByName(stats, statName) {
  let correctStat = stats.find((stat) => stat.stat.name === statName);
  return correctStat ? correctStat.base_stat : null;
}
