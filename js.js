var numbers = document.querySelectorAll(".num");
var operations = document.querySelectorAll(".operatione");
var clearBtn = document.querySelectorAll(".clear_btn");
var point = document.querySelectorAll(".point");
var display = document.getElementById('display');
var MemoryCurrentNumber = 0;
var MemoryNewNumber = false;
var MemoryPendingOperation = "";

for (var i = 0; i < numbers.length; i++) {
	var number = numbers[i];
	number.addEventListener("click", function(e){
		pressNumber(e.target.textContent);
	});
};

for (var i = 0; i < operations.length; i++) {
	var operationes = operations[i];
	operationes.addEventListener("click", function(e){
		operation(e.target.textContent);
	});
};

for (var i = 0; i < point.length; i++) {
	var points = point[i];
	points.addEventListener("click", decimal);
};

for (var i = 0; i < clearBtn.length; i++) {
	var deleteds = clearBtn[i];
	deleteds.addEventListener("click", function(e){
		clear(e.srcElement.id);
	});
};

function pressNumber(numb) {
	if (MemoryNewNumber) {
		display.value = numb;
		MemoryNewNumber = false;
	} else {
		if (display.value === "0") {
			display.value = numb;
		} else {
			display.value += numb;
		};
	};
};

function operation(op) {
	var localMemoryOperatin = display.value;

	if (MemoryNewNumber && MemoryPendingOperation !== "=") {
		display.value = MemoryCurrentNumber;
	} else {
		MemoryNewNumber = true;
		if (MemoryPendingOperation === "+") {
			MemoryCurrentNumber += parseFloat(localMemoryOperatin);
		} else if (MemoryPendingOperation === "-") {
			MemoryCurrentNumber -= parseFloat(localMemoryOperatin);
		} else if (MemoryPendingOperation === "*") {
			MemoryCurrentNumber *= parseFloat(localMemoryOperatin);
		} else if (MemoryPendingOperation === "/") {
			MemoryCurrentNumber /= parseFloat(localMemoryOperatin);
		} else {
			MemoryCurrentNumber = parseFloat(localMemoryOperatin);
		};

		display.value = MemoryCurrentNumber;
		MemoryPendingOperation = op
		};
};

function decimal(argument){
	var localDecimalPoint = display.value;

	if (MemoryNewNumber) {
		localDecimalPoint = "0.1";
		MemoryNewNumber = false;
	} else {
		if (localDecimalPoint.indexOf(".") === -1) {
			localDecimalPoint += ".";
		};
	};

	display.value = localDecimalPoint;
};

function clear(id) {
	if (id === "CE") {
		display.value = "0";
		MemoryNewNumber = true;
	} else if (id === "C"){
		display.value = "0";
		MemoryNewNumber = true;
		MemoryCurrentNumber = 0;
		MemoryPendingOperation = "";
	};
	console.log("Клик покнопке " + id + "!");
};