import './style.scss';

const items = [
    {
        title: "Handgun",
        content: "Light handgun. Not much stopping power, but easy to use.",
        img: "./assets/items/handgun.gif"
    },
    {
        title: "Rifle",
        content: "Maximum capacity 4 shots. Takes a long time between shots, but each shot is very powerful.",
        img: "./assets/items/rifle.gif"
    },
    {
        title: "Pipe",
        content: "A pipe used for plumbing, usually steel.",
        img: "./assets/items/tubeitem.gif"
    },
    {
        title: "Radio",
        content: "Portable radio that emits static when monsters are near.",
        img: "./assets/items/radio.gif"
    },
    {
        title: "Health Drink",
        content: "Supplies nutrition to recover a small amount of stamina.",
        img: "./assets/items/hd.gif"
    },
    {
        title: "Lighter",
        content: "Metal lighter. Looks like its flame is stronger than normal lighters.",
        img: "./assets/items/lighter.gif"
    },
    {
        title: "First Aid Kit",
        content: "A medical kit; increased healing properties.",
        img: "./assets/items/fak.gif"
    },
    {
        title: "Flashlight",
        content: "One touch on/off switch. In the chest pocket.",
        img: "./assets/items/ilghtitem.gif"
    },
    {
        title: "Video Tape",
        content: "Videotape I forgot at the hotel three years ago.",
        img: "./assets/items/videotape.gif"
    },
];

for (let i = 0; i < 5; i++) {
    const element = document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(${i + 1}) .body .item`);
    if (element) {
        element.id = `item-${i + 2}`;
        element.style.backgroundImage = `url(${items[i + 2].img})`;
    }
}

document.querySelector(`#inventory .row:nth-child(4) .title span`).innerText = items[4].title;
document.querySelector(`#inventory .row:nth-child(4) .content`).innerText = items[4].content;

document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(2) .body span svg`).style.backgroundImage = "url('./assets/icons/arrow-left.svg')";
document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(4) .body span svg`).style.backgroundImage = "url('./assets/icons/arrow-right.svg')";

let previous = document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(2) .body span`);
previous.style.cursor = 'pointer';
let next = document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(4) .body span`);
next.style.cursor = 'pointer';

let i = items.length;

previous.onclick = function () {

    if (i == 0) {
        i = items.length
    }
    let prevId = i;

    for (let j = 1; j <= items.length; j++) {
        if (j >= 3 && j <= 7) {
            document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(${j - 2}) .body .item`).style.backgroundImage = `url(${items[prevId].img})`; // Update cards
        }
        if (j == 5) {
            document.querySelector(`#inventory .row:nth-child(2) .card:nth-child(2) .body .item`).style.backgroundImage = `url(${items[prevId].img})`; // Update selected
            document.querySelector(`#inventory .row:nth-child(4) .title span`).innerText = items[prevId].title;  // Update title
            document.querySelector(`#inventory .row:nth-child(4) .content`).innerText = items[prevId].content;  // Update content 
        }
        prevId = (prevId === 0) ? items.length - 1 : prevId - 1; // Proper rotation
    }

    i--;
};

next.onclick = function () {
    let nextId = i - 1;

    for (let j = 1; j <= items.length; j++) {

        if (j >= 3 && j <= 7) {
            document.querySelector(`#inventory .row:nth-child(3) .card:nth-child(${j - 2}) .body .item`).style.backgroundImage = `url(${items[nextId].img})`; // Update cards
        }
        if (j == 5) {
            document.querySelector(`#inventory .row:nth-child(2) .card:nth-child(2) .body .item`).style.backgroundImage = `url(${items[nextId].img})`; // Update selected
            document.querySelector(`#inventory .row:nth-child(4) .title span`).innerText = items[nextId].title;  // Update title
            document.querySelector(`#inventory .row:nth-child(4) .content`).innerText = items[nextId].content;  // Update content 
        }

        nextId = (nextId === items.length - 1) ? 0 : nextId + 1; // Proper rotation
        console.log(nextId)

    }
    i++;
    if (i === items.length + 1) {
        i = 1;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    function navigate() {
        const hash = window.location.hash.substring(1);
        const routes = document.querySelectorAll('.route');

        routes.forEach(route => {
            route.classList.remove('active');
        });

        const activeRoute = document.getElementById(hash);
        if (activeRoute) {
            activeRoute.classList.add('active');
        } else {
            document.getElementById('menu').classList.add('active');
        }
    }

    window.addEventListener('hashchange', navigate);
    navigate();

    const newGameLink = document.getElementById('new-game-link');
    newGameLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.hash = 'inventory';
        navigate(); // Manually trigger navigate to handle the route change immediately
    });
});