import './style.scss';
import HtmlImg from '../assets/images/html-icon.png';
import CssImg from './../assets/images/css-icon.png'
import JsImg from '../assets/images/js-icon.png';
import TypescriptImg from './../assets/images/typescript-icon.png';
import AngularImg from './../assets/images/angular-icon.png';


import RightIcon from '../assets/icons/arrow-right.svg';
import LeftIcon from '../assets/icons/arrow-left.svg';

const slider = [HtmlImg, CssImg, JsImg, TypescriptImg, AngularImg];

for (let i = 0; i < slider.length; i++) {
    document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${i+1}) .body`).style.backgroundImage = `url(${slider[i]})`;
}

document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(2) .body span svg`).style.backgroundImage = `url(${LeftIcon})`;
document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(4) .body span svg`).style.backgroundImage = `url(${RightIcon})`;


let previous = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(2) .body span`);
let next = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(4) .body span`);

next.style.cursor = 'pointer';
next.onclick = function () {
    let previous = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${1}) .body`).style.backgroundImage;;
    let aux = '';
    for (let j = slider.length; j > 0; j--) {
        aux = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${j}) .body`).style.backgroundImage;
        document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${j}) .body`).style.backgroundImage = previous;
        previous = aux;
    }
};

previous.onclick = function () {
    let previous = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${slider.length}) .body`).style.backgroundImage;;
    let aux = '';
    for (let j = 1; j <= slider.length; j++) {
        aux = document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${j}) .body`).style.backgroundImage;
        document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(${j}) .body`).style.backgroundImage = previous;
        previous = aux;
    }
};