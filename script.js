let test1 =
	"(x2 V x3) A (-x3 V x4) A (x1 V -x4) A (x3 V x3) A (-x1 V x4) A (-x1 V -x1) A (-x4 V -x5) A (x2 V -x1) A (x4 V x2) A (-x5 V -x4)";

let test2 =
	"(-x4 V x3) A (-x1 V -x2) A (x5 V -x2) A (-x1 V x7) A (-x1 V -x5) A (-x1 V -x4) A (-x1 V x2) A (x2 V x2) A (x2 V -x1) A (x3 V x7)";

let test3 =
	"(x13 V x17) A (x10 V -x16) A (x6 V -x8) A (-x3 V x5) A (-x11 V -x13) A (-x17 V -x13) A (-x3 V -x13) A (x5 V -x13) A (-x7 V -x2) A (x2 V -x12) A (-x12 V -x8) A (-x7 V -x4) A (-x17 V -x2) A (-x7 V x15) A (-x11 V -x3) A (-x3 V -x3) A (x7 V x12) A (-x3 V x16) A (-x13 V -x9) A (-x15 V -x12) A (-x6 V -x3) A (-x12 V x17) A (x6 V x10) A (x10 V -x12) A (x15 V -x1) A (x11 V -x14) A (-x6 V -x13) A (x6 V x3) A (-x8 V -x9) A (x8 V -x6) A (x7 V x10) A (x10 V -x7) A (-x13 V x8) A (x8 V x4) A (x8 V x5) A (x3 V x1) A (x1 V -x16) A (-x5 V x12) A (x6 V -x16) A (x12 V -x3)";

let test4 =
	"(x11 V -x9) A (-x7 V x4) A (-x12 V -x4) A (-x12 V -x9) A (x9 V -x7) A (-x2 V x6) A (-x3 V -x8) A (x3 V -x10) A (-x1 V -x8) A (x2 V x8) A (x9 V -x8) A (x13 V -x7) A (-x5 V x2) A (x6 V x10) A (-x13 V -x13) A (x13 V -x5) A (-x9 V -x13) A (-x13 V -x5) A (-x10 V -x12) A (x5 V -x6)";

let test5 =
	"(-x6 V -x13) A (x4 V x2) A (-x2 V -x1) A (x5 V -x8) A (x11 V -x11) A (-x11 V x5) A (-x10 V -x3) A (x1 V -x5) A (-x12 V -x3) A (-x13 V x8) A (-x11 V -x13) A (-x1 V -x9) A (x6 V x2) A (-x10 V x6) A (x11 V -x1) A (x4 V x8) A (-x4 V x7) A (x10 V -x14) A (-x7 V x12) A (-x9 V -x7) A (x4 V -x13) A (x3 V -x2) A (-x12 V x6) A (-x11 V -x13) A (x14 V -x13) A (-x2 V -x10) A (-x3 V -x9) A (x2 V -x5) A (-x7 V x14) A (-x3 V -x2)";

let test6 =
	"(x11 V -x5) A (x10 V x7) A (-x12 V x4) A (-x6 V x11) A (x11 V -x12) A (-x12 V -x4) A (-x5 V x11) A (-x8 V -x2) A (-x14 V -x12) A (-x8 V -x2) A (-x5 V x9) A (-x9 V x6) A (x6 V x12) A (-x11 V x8) A (-x6 V -x7) A (-x7 V x13) A (-x10 V -x5) A (-x14 V x7) A (-x5 V x14) A (-x12 V -x1) A (x11 V -x14) A (x14 V -x3) A (x1 V x10) A (-x5 V x9) A (x10 V x10) A (-x4 V x6) A (x4 V -x9) A (-x10 V x12) A (-x9 V x1) A (x9 V x2) A (x10 V -x14) A (-x1 V x10)";

let test7 =
	"(-x14 V -x37) A (x25 V x35) A (x8 V -x20) A (x17 V x28) A (x16 V -x43) A (-x20 V x54) A (x10 V x44) A (-x21 V x2) A (x8 V x41) A (x54 V x27) A (-x6 V x27) A (-x56 V x8) A (-x24 V -x49) A (-x3 V x20) A (-x21 V -x15) A (x45 V -x21) A (-x48 V -x23) A (-x33 V -x33) A (x42 V -x34) A (-x54 V -x24) A (x4 V -x24) A (x19 V -x31) A (-x3 V x40) A (-x12 V x58) A (x44 V x44) A (x44 V x25) A (-x53 V -x50) A (-x35 V x9) A (x5 V -x4) A (x56 V x6) A (x49 V -x10) A (x18 V x20) A (-x33 V x19) A (x60 V -x1) A (-x43 V x33) A (x51 V -x6) A (-x26 V -x9) A (x29 V -x38) A (-x34 V -x52) A (x17 V x59) A (-x45 V x35) A (x31 V -x60) A (-x39 V x34) A (x19 V -x31) A (x9 V -x20) A (-x29 V -x26) A (-x22 V -x30) A (x48 V x5) A (-x47 V x54) A (x41 V -x4) A (x9 V x27) A (x2 V -x50) A (-x34 V -x24) A (x19 V -x37) A (x57 V x50) A (-x59 V x54) A (x18 V -x56) A (x49 V x12) A (-x54 V -x16) A (-x36 V -x54) A (x54 V -x36) A (-x57 V x31) A (-x33 V -x37) A (-x44 V x50) A (-x35 V -x32) A (-x2 V x13) A (-x27 V x28) A (-x39 V -x26) A (x32 V -x58) A (x23 V x38) A (x57 V -x42) A (-x50 V x44) A (-x51 V -x21) A (x23 V x32) A (-x36 V x34) A (x53 V x10) A (x57 V -x34) A (x41 V -x42) A (x13 V -x26) A (x40 V x51) A (x5 V -x44) A (x25 V -x22) A (x41 V x28) A (x57 V x24) A (-x49 V -x47) A (x30 V x45) A (x46 V -x26) A (x26 V -x42) A (x59 V -x57) A (x60 V x48) A (-x52 V x43) A (x24 V -x7) A (x28 V x24) A (-x15 V x36) A (x48 V -x28) A (-x53 V x4) A (-x55 V -x14) A (x34 V x51) A (-x36 V -x1) A (-x9 V -x52) A (-x54 V -x5) A (x28 V x41) A (x13 V x31) A (-x54 V x14) A (-x46 V x35) A (-x53 V x8) A (x18 V x41) A (x41 V -x36) A (-x40 V x4) A (x8 V x4) A (x25 V x10) A (-x17 V x2) A (x44 V x27) A (x18 V -x50) A (-x54 V x38) A (-x50 V x32) A (x24 V -x52) A (-x30 V -x6) A (-x42 V x55) A (x51 V x7)";

let test8 =
	"(x8 V -x50) A (x52 V x24) A (-x54 V -x47) A (x14 V -x11) A (-x5 V -x7) A (x29 V x55) A (x51 V -x53) A (x29 V -x60) A (-x25 V -x52) A (x31 V x3) A (-x8 V -x33) A (-x8 V -x60) A (x53 V -x31) A (x37 V x53) A (-x16 V x5) A (-x52 V x60) A (x4 V x56) A (x28 V -x34) A (x44 V -x26) A (x21 V x21) A (x25 V x44) A (-x32 V -x1) A (-x54 V x23) A (-x47 V x56) A (x5 V -x33) A (-x17 V x29) A (-x23 V -x30) A (-x52 V -x19) A (x26 V x58) A (x15 V -x59) A (-x36 V -x31) A (-x29 V -x60) A (-x54 V x28) A (x57 V -x26) A (x50 V -x13) A (-x43 V -x12) A (-x45 V -x50) A (-x54 V -x44) A (-x4 V -x32) A (x21 V -x50) A (x1 V -x31) A (-x50 V x34) A (x31 V -x13) A (-x22 V x36) A (-x14 V -x9) A (x33 V x4) A (x18 V -x41) A (x5 V -x37) A (x6 V x14) A (x5 V x25) A (-x25 V -x38) A (x8 V x34) A (-x27 V -x8) A (-x54 V x11) A (x22 V x1) A (x8 V x26) A (x35 V x30) A (-x53 V -x10) A (-x21 V x41) A (-x3 V x2) A (-x9 V x8) A (-x5 V x58) A (x45 V -x59) A (x28 V -x2) A (x41 V -x30) A (-x42 V -x52) A (x35 V -x15) A (-x38 V x51) A (-x53 V -x49) A (-x40 V -x38) A (-x53 V x1) A (x29 V -x23) A (x9 V x55) A (x5 V -x41) A (-x43 V -x23) A (x19 V -x38) A (x41 V -x15) A (x40 V x35) A (-x32 V -x59) A (-x43 V -x51) A (x31 V x18) A (x30 V -x41) A (-x30 V x22) A (x57 V x60) A (x24 V x6) A (x8 V x16) A (x15 V -x49) A (x42 V x6) A (x51 V -x32) A (x59 V x49) A (-x13 V x45) A (-x46 V x9) A (x36 V x27) A (x25 V x22) A (-x31 V -x29) A (-x30 V x36) A (x40 V -x9) A (-x45 V x55) A (x19 V x39) A (x6 V -x10)";

let inputBox = document.querySelector(".input");
let outputBox = document.querySelector(".output");

document.getElementById("test1").addEventListener("click", () => {
	inputBox.value = test1;
	// console.log(run(test1));
	// outputBox.innerHTML = run(test1);
});
document.getElementById("test2").addEventListener("click", () => {
	inputBox.value = test2;
	// outputBox.innerHTML = run(test2);
});
document.getElementById("test3").addEventListener("click", () => {
	inputBox.value = test3;
	// outputBox.innerHTML = run(test2);
});
document.getElementById("test4").addEventListener("click", () => {
	inputBox.value = test4;
	// outputBox.innerHTML = run(test3);
});
document.getElementById("test5").addEventListener("click", () => {
	inputBox.value = test5;
	// outputBox.innerHTML = run(test4);
});
document.getElementById("test6").addEventListener("click", () => {
	inputBox.value = test6;
	// outputBox.innerHTML = run(test5);
});
document.getElementById("test7").addEventListener("click", () => {
	inputBox.value = test1;
	// outputBox.innerHTML = run(test6);
});
document.getElementById("test7").addEventListener("click", () => {
	inputBox.value = test7;
	// outputBox.innerHTML = run(test7);
});
document.getElementById("test8").addEventListener("click", () => {
	inputBox.value = test8;
	// outputBox.innerHTML = run(test8);
});

document.querySelector(".solve-btn").addEventListener("click", () => {
	// console.log(inputBox.value);
	let inp = inputBox.value;
	console.log(inp);
	let next = "open";
	let valid = true;
	for (let i = 0; i < inp.length; i++) {
		if (!valid) break;
		if (inp[i] == " ") continue;

		if (next == "open") {
			if (inp[i] != "(") {
				valid = false;
				break;
			}
			next = "var first";
		} else if (next.substring(0, 3) == "var") {
			if (inp[i] == "-") continue;
			if (inp[i] != "x") {
				valid = false;
				break;
			}
			let atLeastOne = false;
			while (i < inp.length) {
				i++;
				if (isNaN(Number(inp[i]))) {
					if (!atLeastOne) {
						valid = false;
						break;
					} else {
						if (next == "var first") {
							next = "or";
						} else {
							next = "close";
						}
						i--;
						break;
					}
				} else {
					atLeastOne = true;
				}
			}
		} else if (next == "or") {
			if (inp[i] != "V") {
				valid = false;
				break;
			}
			next = "var second";
		} else if (next == "close") {
			if (inp[i] != ")") {
				valid = false;
				break;
			}
			next = "and";
		} else if (next == "and") {
			if (inp[i] != "A") {
				valid = false;
				break;
			}
			next = "open";
		}
	}
	if (!valid) {
		outputBox.innerHTML = "Invalid Input";
	} else {
		outputBox.innerHTML = run(inputBox.value);
	}
});
