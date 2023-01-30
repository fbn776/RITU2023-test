import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/bg.css'

Array.prototype.randomItem = function() {
	return this[Math.floor(Math.random() * this.length)];
};

function random(x, y, round = false) {
	let r = round ? Math.floor(Math.random()) : Math.random();
	return x + r * (y - x);
}
function hexToRgb(hex) {
	hex = hex.substring(1);
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);
  
  return {r: r,g: g,b: b}
}

function rgbToStr(obj){
	return `rgba(${obj.r},${obj.g}, ${obj.b}, ${obj.a || 1})`
}

let colors = [
	"#D225E1",
	"#2565E1",
	"#CFECFD",
	"#7AEBFB"
]

let i = 0;

function randomGenerator(key) {
	let color = colors.randomItem();
	let width = window.innerWidth * random(3, 50) / 100;
	let aspectRatio = random(0.01, 2);
	let height = width * aspectRatio;

	let top = random(-width, window.innerHeight + width);
	let left = random(-height, window.innerWidth + height);
	let rotate = random(-360, 360);
	let blur = random(26,100);
	let alpha = random(0.5,1);
	
	let rgba = hexToRgb(color);
	rgba = rgbToStr({...rgba, ...{a: alpha}});
	console.log('#' + key)
	return (
		<span className="bg-item" style = {{
			display: "inline-block",
			minWidth: width + "px",
			height: height + "px",
			transform: "translateX("+ left +"px) translateY("+ top + "px) rotate("+rotate+"deg)",
			backgroundColor: rgba,
			filter: 'blur('+blur+'px)',
		}} key={'#'+key}></span>
	)
}

let l = [];
for (let i = 0; i < 20; i++) {
	l.push(randomGenerator(i))
}

function Bg() {
	return (
		<div className="bg">
			{l}
		</div>
	)
}

export default Bg;