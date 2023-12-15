import './style.scss';
import HtmlImg from '../assets/images/html-icon.png';
import CssImg from './../assets/images/css-icon.png'
import JsImg from '../assets/images/js-icon.png';
import TypescriptImg from './../assets/images/typescript-icon.png';
import AngularImg from './../assets/images/angular-icon.png';

import RightIcon from '../assets/icons/arrow-right.svg';
import LeftIcon from '../assets/icons/arrow-left.svg';

const slider = [AngularImg, HtmlImg, CssImg, JsImg, TypescriptImg ];

for (let i = 0; i < slider.length; i++) {
    document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${i+1}) .body .item`).style.backgroundImage = `url(${slider[i]})`;
}

document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(2) .body span svg`).style.backgroundImage = `url(${LeftIcon})`;
document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(4) .body span svg`).style.backgroundImage = `url(${RightIcon})`;


let previous = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(2) .body span`);
let next = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(4) .body span`);

previous.style.cursor = 'pointer';
previous.onclick = function () {
    let previous = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${slider.length}) .body .item`).style.backgroundImage;;
    let aux = '';
    for (let j = 1; j <= slider.length; j++) {
        aux = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${j}) .body .item`).style.backgroundImage;
        document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${j}) .body .item`).style.backgroundImage = previous;
        if( j == 3){
            document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(2) .body .item`).style.backgroundImage = previous;
        }
        previous = aux;
    }
};

next.style.cursor = 'pointer';
next.onclick = function () {
    let previous = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${1}) .body .item`).style.backgroundImage;;
    let aux = '';
    for (let j = slider.length; j > 0; j--) {
        aux = document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${j}) .body .item`).style.backgroundImage;
        document.querySelector(`.inventory .row:nth-child(3) .card:nth-child(${j}) .body .item`).style.backgroundImage = previous;
        if( j == 3){
            document.querySelector(`.inventory .row:nth-child(2) .card:nth-child(2) .body .item`).style.backgroundImage = previous;
        }
        previous = aux;
    }
};