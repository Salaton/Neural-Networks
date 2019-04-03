const brain = require("brain.js");
//input({X1,X2})
//output({Y})

const inputs = [{ X1: 0, X2: 0 }, { X1: 0, X2: 1 }, { X1: 1, X2: 0 }, { X1: 1, X2: 1 }];

const outputs = [{ Y: 0 }, { Y: 1 }, { Y: 1 }, { Y: 0 }];

const trainingData = [];

for (let i = 0; i < inputs.length; i++) {
	trainingData.push({
		input: inputs[i],
		output: outputs[i]
	});
}

const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

const stats = net.train(trainingData);
console.log(stats);

console.log(
	net.run({
		X1: 0,
		X2: 0
	})
);
