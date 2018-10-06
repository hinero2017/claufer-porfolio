//here we created an array with colors
// "rgb" stands for "red, green, blue"

//numSquares if for choosing in between easy and hard mode
var numSquares = 6;
var colors = generateRandomColors(numSquares);

//just show here the original array
// 	'rgb(255, 0, 0)',
// 	'rgb(255, 255, 0)',
// 	'rgb(0, 255, 0)',
// 	'rgb(0, 255, 255)',
// 	'rgb(0, 0, 255)',
// 	'rgb(255, 0, 255)'

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

// ***** EASY AND HARD BUTTONS
easyBtn.addEventListener('click', function() {
	// adding "add" and "remove" we can check and uncheck buttons
	easyBtn.classList.add('selected');
	hardBtn.classList.remove('selected');
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
		} else {
			//not sure how this one work???
			squares[i].style.display = 'none';
		}
	}
});
hardBtn.addEventListener('click', function() {
	//same thing here
	easyBtn.classList.remove('selected');
	hardBtn.classList.add('selected');
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		//by "block" we getting back all squares
		squares[i].style.display = 'block';
	}
});

//RESET BUTTON
resetButton.addEventListener('click', function() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new rendom color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	this.textContent = 'New Colors';
	messageDisplay.textContent = '';
	//change colors of squares
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = 'steelblue';
});

//WHEN THE USER WIN THE GAME
colorDisplay.textContent = pickedColor;
for (var i = 0; i < squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listener to squares
	squares[i].addEventListener('click', function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked Color
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = 'Correct!';
			resetButton.textContent = 'Play Again?';
			//to change all colors we need to pass in () a right cliced color
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = '#232323';
			messageDisplay.textContent = 'Try Again';
		}
	});
}

function changeColors(color) {
	//loop thro all squares
	for (var i = 0; i < squares.length; i++)
		//change each color to match given color in ()
		squares[i].style.backgroundColor = color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
