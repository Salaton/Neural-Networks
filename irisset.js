const brain = require("brain.js");
//input: { X1,X2,X3,X4}
//output: {Y}

const inputs = [
	//setosa dataset (Expected Output: 1)
	{ X1: 5.1, X2: 3.5, X3: 1.4, X4: 0.2 },
	{ X1: 4.9, X2: 3.0, X3: 1.4, X4: 0.2 },
	{ X1: 4.7, X2: 3.2, X3: 1.3, X4: 0.2 },
	{ X1: 4.6, X2: 3.1, X3: 1.5, X4: 0.2 },
	{ X1: 5.0, X2: 3.6, X3: 1.4, X4: 0.2 },
	//Versicolor dataset (Expected Output: 0)
	{ X1: 6.5, X2: 2.8, X3: 4.6, X4: 1.5 },
	{ X1: 5.7, X2: 2.8, X3: 4.5, X4: 1.3 },
	{ X1: 6.3, X2: 3.3, X3: 4.7, X4: 1.6 },
	{ X1: 4.9, X2: 2.4, X3: 3.3, X4: 1.0 },
	{ X1: 6.6, X2: 2.9, X3: 4.6, X4: 1.3 },
	//Virginica (Expected output: 0.5)
	{ X1: 6.3, X2: 3.3, X3: 6.0, X4: 2.5 },
	{ X1: 5.8, X2: 2.7, X3: 5.1, X4: 1.9 },
	{ X1: 7.1, X2: 3.0, X3: 5.9, X4: 2.1 },
	{ X1: 6.3, X2: 2.9, X3: 5.6, X4: 1.8 },
	{ X1: 6.5, X2: 3.0, X3: 5.8, X4: 2.2 }
];

const outputs = [
	{ Setosa: 1 },
	{ Setosa: 1 },
	{ Setosa: 1 },
	{ Setosa: 1 },
	{ Setosa: 1 },
	{ Versicolor: 0 },
	{ Versicolor: 0 },
	{ Versicolor: 0 },
	{ Versicolor: 0 },
	{ Versicolor: 0 },
	{ Virginica: 0.5 },
	{ Virginica: 0.5 },
	{ Virginica: 0.5 },
	{ Virginica: 0.5 },
	{ Virginica: 0.5 }
];

scaleDown = step => {
	return {
		X1: step.X1 * 0.2,
		X2: step.X2 * 0.2,
		X3: step.X3 * 0.2,
		X4: step.X4 * 0.2
	};
};

const trainingData = [];

for (let i = 0; i < inputs.length; i++) {
	trainingData.push({
		input: inputs[i],
		output: outputs[i]
	});
	//console.log(scaleDown(inputs[i]));
}

//define the neural net  --> specify the hidden layer
const net = new brain.NeuralNetwork({ hiddenLayers: [2] });

const stats = net.train(trainingData, {
	learningRate: 0.6, //how quickly the network trains
	log: true
});

console.log(stats); //logs what happens in the neural net..

//Initialize the TEST DATA
const testData = [
	{ X1: 5.0, X2: 3.0, X3: 1.6, X4: 0.2 }, //setosa (Output: 1)
	{ X1: 5.0, X2: 3.4, X3: 1.6, X4: 0.4 }, //setosa (Output: 1)
	{ X1: 5.0, X2: 2.0, X3: 3.5, X4: 1.0 }, //Versicolor (Expected Output: 0)
	{ X1: 5.9, X2: 3.0, X3: 4.2, X4: 1.5 }, //Versicolor (Expected Output: 0)
	{ X1: 6.7, X2: 3.3, X3: 5.7, X4: 2.1 }, //Virginica (Expected output: 0.5)
	{ X1: 7.2, X2: 3.2, X3: 6.0, X4: 1.8 } //Virginica (Expected output: 0.5)
];

console.log(net.run(testData[2])); //expected output (Versicolor, value close to 0)

//SAMPLE TEST DATA

//X1    X2      X3      X4     -OUTPUT-
//5.0   3.0 	1.6 	0.2   |	setosa
//5.0	3.4 	1.6 	0.4   |	setosa
//5.0	2.0 	3.5 	1.0   |	versicolor
//5.9	3.0 	4.2 	1.5   |	versicolor
//6.7	3.3	    5.7	    2.1	  | virginica
//7.2	3.2	    6.0	    1.8	  | virginica

console.log("-----------Custom standalone function from a trained network---------"); //does the same thing as net.run
var run = net.toFunction();

var output = run(testData[5]); //expected output (Virginica, value close to 0.5)

console.log(run.toString());
console.log(output);
