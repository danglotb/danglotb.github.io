function run() {
    // initialize
    perturbationCount = 0;
    var number = document.getElementById("number").value;
    var nbSuccess = 0;
    initPerturbationPoint();
    //run
    for (var i = 0 ; i < number; i++) {
        nbSuccess += psort() ? 1 : 0;
    }
    //display
    document.getElementById("success").innerHTML = "success rate: " + ((nbSuccess / number) * 100).toFixed(2) + " %";
    document.getElementById("nbPerturbation").innerHTML = "nb perturbation: " + perturbationCount;
    document.getElementById("nbPerturbationPerExecution").innerHTML = "nb perturbation per execution: " + ((perturbationCount / number)).toFixed(2);
}

function psort() {
    probability = document.getElementById("probability").value / 1000;
    var bound = 100;
    var size = document.getElementById("size").value;
    var input = generateTask(size, bound);
    var output = quicksort(input.slice(), 0, input.length - 1);
    return oracle(input, output);
}

function initPerturbationPoint() {
    activePerturbationPoints = [];
    activePerturbationPoints = activePerturbationPoints.concat(document.getElementById("Antifragile").checked ? antiFragile : []);
    activePerturbationPoints = activePerturbationPoints.concat(document.getElementById("Robust").checked ? robust : []);
    activePerturbationPoints = activePerturbationPoints.concat(document.getElementById("Fragile").checked ? fragile : []);
    typesToPerturb = [];
    typesToPerturb = typesToPerturb.concat(document.getElementById("Integer").checked ? "number" : []);
    typesToPerturb = typesToPerturb.concat(document.getElementById("Boolean").checked ? "boolean" : []);
}

function generateTask(size, bound) {
    var task = []
    for (i = 0 ; i < size ; ++i) {
        task[i] = Math.floor(Math.random() * bound + 1);
    }
    return task;
}

function updateValueProba() {
     var probability = document.getElementById("probability").value;
     document.getElementById("labelProbability").innerHTML = (probability / 1000 +" %");
}

function updateValueSize() {
     var size = document.getElementById("size").value;
     document.getElementById("labelSize").innerHTML = ("size array: "+ size);
}

function updateValueNumber() {
     var number = document.getElementById("number").value;
     document.getElementById("labelNumber").innerHTML = ("nb array: "+ number);
}