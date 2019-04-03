//XOR PROBLEM
// input 0 0, output 0
// input 0 1, output 1
// input 1 0, output 1
// input 1 1, output 0

const brain = require("brain.js");
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const trainingData = [
	{ input: [0, 0], output: [0] },
	{ input: [0, 1], output: [1] },
	{ input: [1, 0], output: [1] },
	{ input: [1, 1], output: [0] }
];

net.train(trainingData);

console.log("Value for 0,0:", net.run([0, 0]));
console.log("Value for 0,1:", net.run([0, 1]));
console.log("Value for 1,0:", net.run([1, 0]));
console.log("Value for 1,1:", net.run([1, 1]));
