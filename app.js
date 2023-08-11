const template_card = document.getElementById('template').content
const fragment = document.createDocumentFragment()
const main = document.getElementById('main')
const btn_one = document.getElementById('btn_one')
const btn_two = document.getElementById('btn_two')
const btn_three = document.getElementById('btn_three')
const btn_four = document.getElementById('btn-four')
const input = document.getElementById('input')
let amount;

btn_one.addEventListener('click', function() {
    amount=btn_one.textContent
    conection(amount)
})

btn_two.addEventListener('click', function() {
    amount=btn_two.textContent
    conection(amount)
})

btn_three.addEventListener('click', function() {
    amount=btn_three.textContent
    conection(amount)
})

btn_four.addEventListener('click', function() {
    amount=btn_four.textContent
    conection(amount)
})

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        amount = input.value
        conection(amount)
    }
})

function renderCard(image) {
    let clone = document.importNode(template_card, true)
    clone.querySelector('#img').src = image
    fragment.appendChild(clone)
    main.appendChild(fragment)
}

function conection(index) {
    for (let i = 0; i < index ; i++) {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => renderCard(data.message));
    }
    main.innerHTML=""
}

