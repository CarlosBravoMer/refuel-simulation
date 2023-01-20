const gasSelector = document.querySelectorAll('.gas-selector');
let gasSelection;

const siteSelector = document.querySelectorAll('.site');
let siteSelection;

const priceSelector = document.querySelectorAll('.price');
let priceCounter = document.querySelector('.mount-counter');
let priceSelection = 0;

const resetBtn = document.querySelector('.reset');
const confirmBtn = document.querySelector('.confirm');

const paySelector = document.querySelectorAll('.pay');
let paySelection;

const litres = document.querySelector('.price-litre');
const pvp = document.querySelector('.price-pvp');

let litrosTotales = 0;
let litresCounter = 0;
let counter;

const gasValue = 1.50;
const dieselValue = 1.99;

let intervalId;
const refill = document.querySelector('.refill');

gasSelector.forEach((gas) => {
    gas.addEventListener('click', (e) => {
        if (e.target.classList.contains('gas')) {
            e.target.classList.toggle('active');
            e.target.nextElementSibling.classList.remove('active');
            gasSelection = e.target.textContent;
        } else {
            e.target.classList.toggle('active');
            e.target.previousElementSibling.classList.remove('active');
            gasSelection = e.target.textContent;
        }
    });
});

siteSelector.forEach((site) => {
    site.addEventListener('click', (e) => {
        if (e.target.classList.contains('site-one')) {
            e.target.classList.toggle('active');
            siteSelector.item(1).classList.remove('active');
            siteSelector.item(2).classList.remove('active');
            siteSelector.item(3).classList.remove('active');
            siteSelection = e.target.textContent;
        } else if (e.target.classList.contains('site-two')) {
            e.target.classList.toggle('active');
            siteSelector.item(0).classList.remove('active');
            siteSelector.item(2).classList.remove('active');
            siteSelector.item(3).classList.remove('active');
            siteSelection = e.target.textContent;
        } else if (e.target.classList.contains('site-three')) {
            e.target.classList.toggle('active');
            siteSelector.item(0).classList.remove('active');
            siteSelector.item(1).classList.remove('active');
            siteSelector.item(3).classList.remove('active');
            siteSelection = e.target.textContent;
        } else {
            e.target.classList.toggle('active');
            siteSelector.item(0).classList.remove('active');
            siteSelector.item(1).classList.remove('active');
            siteSelector.item(2).classList.remove('active');
            siteSelection = e.target.textContent;
        }
    });
});

priceSelector.forEach((price) => {
    price.addEventListener('click', (e) => {
        if (e.target.classList.contains('plus-five')) {
            e.target.classList.toggle('btn:active');
            priceSelection = priceSelection + 5;
            priceCounter.innerHTML = priceSelection;

        } else if (e.target.classList.contains('plus-ten')) {
            e.target.classList.toggle('btn:active');
            priceSelection = priceSelection + 10;
            priceCounter.innerHTML = priceSelection;
        } else if (e.target.classList.contains('plus-twenty')) {
            e.target.classList.toggle('btn:active');
            priceSelection = priceSelection + 20;
            priceCounter.innerHTML = priceSelection;
        }
    });
});

resetBtn.addEventListener('click', () => {
    priceSelection = 0;
    priceCounter.innerHTML = priceSelection;
});

confirmBtn.addEventListener('click', () => {
    if (gasSelection === undefined) {
        alert('Please select a gas type');
    } else if (siteSelection === undefined) {
        alert('Please select a site');
    } else if (priceSelection === 0) {
        alert('Please select a price');
    } else {
        if (gasSelection === 'Gas') {
            litros = priceSelection / gasValue;
            pvp.innerHTML = priceSelection + '€';
            console.log(litros);
        } else {
            litros = priceSelection / dieselValue;
            pvp.innerHTML = priceSelection + '€';
            console.log(litros);
        }
    }
});

refill.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        if (litresCounter < litros) {
            litres.innerHTML = litresCounter + ' L';
            litresCounter++;
        }
    }, 300);
});

refill.addEventListener('mouseup', () => {
    clearInterval(intervalId);
});