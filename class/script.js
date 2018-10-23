'use strict';

class Options {
	constructor(height,width,bg,fontSize,textAlign) {
		this.height = height;
		this.width  = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	crDv() {
		let div = document.createElement('div');
		div.textContent = 'Новый элемент';
		return this.height = height,
		this.width = width,
		this.bg = bg,
		this.fontSize = fontSize,
		this.textAlign = textAlign;
	}
}
const c = new Options('50px', '60px', 'green',15, 'center');
console.log(c.crDv());