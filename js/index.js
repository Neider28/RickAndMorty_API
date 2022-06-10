
const cardsContent = document.getElementById('cards-content');

const API = 'https://rickandmortyapi.com/api/character/';
const maxPageForAPI = Math.floor(Math.random() * 26);;
const apiPage = '?page=:page';
const characters = [];

const accionAsincrona = async () => {
  return new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, 3000);
});   
}

const getDataRickAndMorty = async (page) => {
  try {
      await accionAsincrona();

      const { results } = await fetchData(`${API}${apiPage.replace(':page', `${page}`)}`)
      results.map(character => {
        const card = cardGenerator(character);
        cardsContent.appendChild(card);
      });

      document.getElementById("spinner").style.display="none";
  } catch (error) {
    console.error(error);
  }
}

(function() {
  getDataRickAndMorty(maxPageForAPI);
})();