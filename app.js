const template_card = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const main = document.getElementById('main')
let images = [] 


function renderCard() {
    images.forEach(element => {
        let clone = document.importNode(template_card, true)
        clone.querySelector('#img').src = element
        fragment.appendChild(clone)
        main.appendChild(fragment)
    });
}

function conection() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => images.push(data.message));

}

renderCard()
conection()