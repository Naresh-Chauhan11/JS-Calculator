function clr() {
	document.getElementById("show").value = '';
}
let flag = 0;

function dis(value) {
	finalArray = [];
	if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
		flag += 1;
	}
	if (value >= 0 && value <= 9) {
		flag = 0;
	}
	if (flag == 0 || flag == 1) {
		document.getElementById("show").value += value;
		console.log(value)
	}
}

function output(expressionvalue) {
	var cArr = resultArray(expressionvalue)


	for (i = 0; i <= cArr.length; i++) {
		cItem = cArr[i];
		if (cItem == '*') {
			tLeft = parseFloat(cArr[i - 1]);
			tRight = parseFloat(cArr[i + 1]);
			nVal = tLeft * tRight;
			cArr[i - 1] = nVal;
			cArr.splice(i, 2);
			i = cArr.length;
		}
	}
	//Handle Divide

	for (i = 0; i <= cArr.length; i++) {
		cItem = cArr[i];
		if (cItem == '/') {
			tLeft = parseFloat(cArr[i - 1]);
			tRight = parseFloat(cArr[i + 1]);
			nVal = tLeft / tRight;
			cArr[i - 1] = nVal;
			cArr.splice(i, 2);
			i = cArr.length;
		}
	}

	//Handle Plus and Minus
	var tResult = parseFloat(cArr[0]);
	for (i = 1; i < cArr.length; i++) {
		if (cArr[i] == '+') {
			tResult = tResult + parseFloat(cArr[i + 1]);
		} else if (cArr[i] == '-') {
			tResult = tResult - parseFloat(cArr[i + 1]);
		}
		i++;
	} return tResult;
}

function solve() {
	var exp = document.getElementById('show').value;
	var value = output(exp)
	document.getElementById('show').value = value;
}
finalArray = [];

function resultArray(exp) {
	let str = "";
	for (let i = 0; i < exp.length; i++) {
		if (exp[i] !== '+' && exp[i] !== '-' && exp[i] !== '*' && exp[i] !== '/') {
			str = str + exp[i];
		}
		if (exp[i] == "+" || exp[i] == "-" || exp[i] == "*" || exp[i] == "/") {
			arrPush(str);
			str = "";
			arrPush(exp[i]);
		}
		if (exp.length - 1 == i) {
			arrPush(str);
			str = ""
		}
	}
	return finalArray;
}

function arrPush(str) {
	if (str !== '') {
		finalArray.push(str)
	}
}


