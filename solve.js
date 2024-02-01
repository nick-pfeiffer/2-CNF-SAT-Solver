function run(inputStr) {
	function parse(input) {
		const regex = /(-?x\d+)/g;
		const matches = input.match(regex);

		if (!matches) {
			return [];
		}

		return matches.map((match) => {
			const isNegative = match.startsWith("-");
			const number = parseInt(match.replace(/[^\d]/g, ""), 10);

			return isNegative ? -number : number;
		});
	}

	let rawClauses = [];
	result = parse(inputStr);
	for (let i = 0; i < result.length; i += 2) {
		rawClauses.push(`${result[i]} ${result[i + 1]}`);
	}
	console.log(rawClauses);

	// const fileName = "test1.txt"; // set the file name
	// const fs = require("fs");
	// const inputStr = fs.readFileSync(fileName, "utf8");

	// const result = parse(inputStr);
	// const rawClauses = [];

	// console.log(rawClauses);

	function nToIndex(n) {
		if (n > 0) {
			return n + (n - 1);
		}
		if (n < 0) {
			return Math.abs(n) * 2;
		}
	}

	function indexToN(i) {
		if (i % 2 !== 0) {
			return Math.floor(i / 2) + 1;
		}
		return -1 * Math.floor(i / 2);
	}

	function negateIndex(n) {
		return n % 2 === 0 ? n - 1 : n + 1;
	}

	function negateRaw(n) {
		return n * -1;
	}

	function valid(v) {
		for (const i of v) {
			if (v.includes(negateIndex(i))) {
				return false;
			}
		}
		return true;
	}

	let maxIndex = 0;
	const clauses = [];

	for (const i of rawClauses) {
		if (i === "") {
			continue;
		}

		const first = parseInt(i.split(" ")[0]);
		const second = parseInt(i.split(" ")[1]);

		const firstIndex = nToIndex(first);
		const secondIndex = nToIndex(second);

		clauses.push([first, second]);
		maxIndex = Math.max(nToIndex(first), nToIndex(second), maxIndex);
	}

	if (maxIndex % 2 !== 0) {
		maxIndex = maxIndex + 1;
	}

	const graph = {};

	for (const i of clauses) {
		const a = nToIndex(i[0]);
		const b = nToIndex(i[1]);
		const notA = negateIndex(a);
		const notB = negateIndex(b);

		if (notA in graph) {
			graph[notA].push(b);
		} else {
			graph[notA] = [b];
		}

		if (notB in graph) {
			graph[notB].push(a);
		} else {
			graph[notB] = [a];
		}
	}

	let visited = [];
	function dfs(node) {
		if (!visited.includes(node)) {
			visited.push(node);

			if (node in graph) {
				for (const neighbor of graph[node]) {
					if (neighbor === node) {
						continue;
					}
					dfs(neighbor);
				}
			}
		}
	}

	const allVisited = [];
	for (let i = 1; i <= maxIndex; i++) {
		visited = [];
		dfs(i);
		allVisited.push(visited);
	}

	const components = [];
	for (const i of allVisited) {
		if (!valid(i)) {
			continue;
		}

		const comp = i.sort();
		if (
			!components.some((c) => JSON.stringify(c) === JSON.stringify(comp))
		) {
			components.push(comp);
		}
	}

	function unionCommonSublists(lists) {
		const mergedLists = [];
		const mergedDict = {};

		for (let i = 0; i < lists.length; i++) {
			if (!mergedDict[i]) {
				let mergedList = lists[i].slice();

				for (let j = i + 1; j < lists.length; j++) {
					if (canMerge(mergedList, lists[j])) {
						const mergedSet = new Set([...mergedList, ...lists[j]]);
						mergedList = Array.from(mergedSet);
						mergedDict[j] = true;
					}
				}

				mergedLists.push(mergedList);
			}
		}

		return mergedLists;
	}

	function canMerge(l1, l2) {
		let sharedValue = false;
		for (const i of l1) {
			if (l2.includes(i)) {
				sharedValue = true;
			}
			if (l2.includes(negateIndex(i))) {
				return false;
			}
		}

		for (const i of l2) {
			if (l1.includes(i)) {
				sharedValue = true;
			}
			if (l1.includes(negateIndex(i))) {
				return false;
			}
		}

		return sharedValue;
	}

	const conComp = unionCommonSublists(components);

	function validCombo(c) {
		const truths = {};
		for (const i of c) {
			for (const n of i) {
				if (n in truths && truths[n] === "False") {
					return false;
				}

				if (
					negateIndex(n) in truths &&
					truths[negateIndex(n)] === "True"
				) {
					return false;
				}

				truths[n] = "True";
				truths[negateIndex(n)] = "False";
			}
		}

		for (let n = 1; n <= maxIndex; n++) {
			if (!(n in truths)) {
				return false;
			}
		}
		return true;
	}

	function generateSublistCombinations(lst) {
		if (!lst.length) {
			return [[]];
		}

		const restCombinations = generateSublistCombinations(lst.slice(1));
		const currentElement = lst[0];

		const combinations = [];
		for (const combo of restCombinations) {
			combinations.push([currentElement, ...combo]);
			combinations.push(combo);
		}

		return combinations;
	}

	const combinations = generateSublistCombinations(conComp);

	function formatCombo(combo) {
		const result = [];
		for (const i of combo) {
			for (const j of i) {
				if (!result.includes(j)) {
					result.push(j);
				}
			}
		}

		return result.sort((a, b) => a - b);
	}

	function reconvert(arr) {
		let ans = [];
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] % 2 != 0) {
				ans.push("x" + (Math.floor(arr[i] / 2) + 1));
			} else {
				ans.push("-x" + arr[i] / 2);
			}
		}
		return ans;
	}

	let validAssignment = "";
	for (const combo of combinations) {
		if (validCombo(combo)) {
			validAssignment = combo;
			break;
		}
	}

	if (validAssignment === "") {
		return "No satisfying assignment";
		// console.log("No satisfying assignment");
	} else {
		let ans = "[";
		let arr = formatCombo(validAssignment);
		arr = reconvert(arr);
		for (let i = 0; i < arr.length; i++) {
			ans += arr[i];
			if (i != arr.length - 1) ans += ", ";
		}
		ans += "]";
		// console.log("Assignment found\n", formatCombo(validAssignment));
		console.log("hi");
		return "Truth Assignments: " + ans;
	}
}
