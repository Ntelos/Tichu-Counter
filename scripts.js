var table = document.getElementById("PointsTable");
var nextRowFill = 2;

var sumA = 0;
var sumB = 0;

var pA = document.getElementById("Apoints");
var pB = document.getElementById("Bpoints");

function addPoints() {
	if ((pA.value != "") && (pB.value != "")) {
		var newRow = table.insertRow(nextRowFill);
		nextRowFill++;

		var newCell1 = newRow.insertCell(0);
		var newCell2 = newRow.insertCell(1);

		var p1 = pA.value;
		newCell1.innerHTML = p1;
		var p2 = pB.value;
		newCell2.innerHTML = p2;

		sumA += parseInt(p1,10);
		sumB += parseInt(p2,10);
		document.getElementById("SumA").innerHTML = sumA;
		document.getElementById("SumB").innerHTML = sumB;

		pA.value = 0;
		pB.value = 0;
	}
}

function update(button) {
	if (pA.value == "") pA.value = 0;
	if (pB.value == "") pB.value = 0;

	if (button.id == "A+100") 
		pA.value = 100 + parseInt(pA.value,10);
	else if (button.id == "A-100") 
		pA.value = parseInt(pA.value,10) - 100;
	else if (button.id == "B+100") 
		pB.value = 100 + parseInt(pB.value,10);
	else if (button.id == "B-100") 
		pB.value = parseInt(pB.value,10) - 100;
}

function clearText(text) {
	if (text.value == "0") text.value = "";
}

function supplement(text) {
	if (text.id == "Apoints") pB.value = 100 - text.value;
	else if (text.id == "Bpoints") pA.value = 100 - text.value;
}