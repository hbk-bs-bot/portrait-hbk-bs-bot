/// <reference path="./node_modules/@types/p5/lib/addons/p5.sound.d.ts" />
/// <reference path="./node_modules/@types/p5/global.d.ts" />
/// <reference path="./node_modules/@types/p5/literals.d.ts" />
/// <reference path="./node_modules/@types/p5/constants.d.ts" />
// Keep these comments alive.
// @ts-check
// They will help you while writing code.


function preload() {

}

function setup() {
	// setup runs once
	const canvas = createCanvas(300, 400);
	canvas.parent("sketch");
	background(128);
  strokeWeight(9)
  // eyes
  point(100, 100);
  point(100, 102);
}

function draw() {
	// draw runs all the time
}
