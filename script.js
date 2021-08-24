var veggies = document.getElementById('veggies');
var cheese = document.getElementById('cheese');
var meat = document.getElementById('meat');
var inputNumber = document.getElementsByClassName('inputNumber');
var price = document.getElementById('price');
var burger = document.getElementById('burger');

for (let i = 0; i < inputNumber.length; i++) {
    inputNumber[i].addEventListener('change', () => {
        veggieCount = veggies.value
        cheeseCount = cheese.value
        meatCount = meat.value
        drawBurger(veggieCount, cheeseCount, meatCount);
    })
}

function drawBurger(veggieCount, cheeseCount, meatCount) {
    price.innerHTML = veggieCount * 10 + cheeseCount * 15 + meatCount * 20

    while (burger.firstChild) {
        burger.removeChild(burger.firstChild);
    }

    if (veggieCount == 0 & cheeseCount == 0 & meatCount == 0) {
        return;
    }

    let breadTop = document.createElement('div');
    breadTop.className = "breadTop"
    burger.appendChild(breadTop)

    let seeds = document.createElement('div')
    seeds.className = "seeds"
    breadTop.appendChild(seeds)

    for (let i = 0; i < veggieCount; i++) {
        let element = document.createElement('div')
        element.className = "veggie"
        burger.appendChild(element)
    }
    for (let i = 0; i < cheeseCount; i++) {
        let element = document.createElement('div')
        element.className = "cheese"
        burger.appendChild(element)
    }
    for (let i = 0; i < meatCount; i++) {
        let element = document.createElement('div')
        element.className = "meat"
        burger.appendChild(element)
    }
    let breadBottom = document.createElement('div');
    breadBottom.className = "breadBottom"
    burger.appendChild(breadBottom)
}

drawBurger(veggies.value, cheese.value, meat.value)