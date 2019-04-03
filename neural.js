const brain = require("brain.js");
//input: { X1,X2}
//output: {Y}

const inputs = [{ X1: 0.4, X2: -0.7 }, { X1: 0.3, X2: -0.5 }, { X1: 0.6, X2: 0.1 }, { X1: 0.2, X2: 0.4 }];

const outputs = [{ Y: 0.1 }, { Y: 0.05 }, { Y: 0.3 }, { Y: 0.25 }];

const trainingData = [];

for (let i = 0; i < inputs.length; i++) {
	trainingData.push({
		input: inputs[i],
		output: outputs[i]
	});
}

//define the neural net  --> specify the hidden layer
const net = new brain.NeuralNetwork({ hiddenLayers: [2] });

const stats = net.train(trainingData, {
	learningRate: 0.6, //how quickly the network trains
	log: true
});

console.log(stats); //logs what happens in the neural net..

console.log(net.run(inputs[0]));

console.log("-----------Custom standalone function from a trained network---------");
var run = net.toFunction();

var output = run(inputs[2]);

console.log(run.toString()); // copy and paste! no need to import brain.js
console.log(output);
