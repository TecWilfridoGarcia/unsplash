
let imageList = document.querySelector("#gallery");
const searchBar = document.getElementById('searchBar');
const branding = document.getElementById('branding');
const massonryItem = document.querySelectorAll('.massonry_item');
const listaItem = document.querySelectorAll('.lista__item');
const showList = document.querySelectorAll('.radio');
var radioValues = []
let hpCharacters = [];

const showMenu = document.getElementById('show-menu');
showMenu.addEventListener('change', function () {
    if (document.getElementById('show-menu').checked == true) {
        document.getElementById('sidebar').classList.add('actived')
    } else {
        document.getElementById('sidebar').classList.remove('actived')
    }
})

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.filter((image) => {
        return (
            image.author.toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
    try {
        let res = await fetch(`http://localhost:3000/images`)
        hpCharacters = await res.json();
        displayCharacters(hpCharacters);
    } catch (err) {
        console.error(err);
    }

};


const displayCharacters = (characters) => {
    const htmlString = characters
        .map((image) => {
            return `
            <div class="list__item none">
            <img class="list__item__image" src="${image.url}" key="${image.id}">
            <div class="list__item__description" id="massonry_description">
              <p class="name-logo">Creative Logo</p> <p class="description">${image.author}</p>
            </div>
          </div>
          <div class="massonry__item">
            <img class="massonry__item__image" src="${image.url}" key="${image.id}">
            <div class="massonry__item__description" id="massonry_description">
              <p class="name-logo">Creative Logo</p> <br> <p class="description">${image.author}</p>
            </div>
            </div>
          </div>
        `;
        })
        .join('');
    imageList.innerHTML = htmlString;
};

loadCharacters();


const changeList = (value) => {
    if (value === "showlist") {
        imageList.classList.remove("massonry")
        document.querySelectorAll('.list__item').forEach(e => e.style.display = "flex")
        document.querySelectorAll('.massonry__item').forEach(e => e.style.display = "none")
    }

    else if (value === "showcube") {
        imageList.classList.add("massonry")
        document.querySelectorAll('.list__item').forEach(e => e.style.display = "none")
        document.querySelectorAll('.massonry__item').forEach(e => e.style.display = "block")
    }

}


