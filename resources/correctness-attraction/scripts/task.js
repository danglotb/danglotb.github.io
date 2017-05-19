var running = false;
async function run() {
    document.getElementById("run").value = running ? "Run" : "Stop";
    running = !running;
    if (running) {
        do {
                // initialize
                perturbationCount = 0;
                var number = document.getElementById("number").value;
                var nbSuccess = 0;
                var bound = Number.MAX_SAFE_INTEGER;
                var size = document.getElementById("size").value;
                probability = document.getElementById("probability").value / 1000;
                initPerturbationPoint();

                //run
                for (var i = 0 ; i < number; i++) {
                    nbSuccess += psort(size, bound) ? 1 : 0;
                }
                //display
                document.getElementById("success").innerHTML = ((nbSuccess / number) * 100).toFixed(2);
                document.getElementById("nbPerturbationPerExecution").innerHTML = ((perturbationCount / number)).toFixed(2);
                drawWithInputValue(nbSuccess, number);
                await sleep(100);
            } while (running);
    } else {
        document.getElementById("success").innerHTML = "NaN";
        document.getElementById("nbPerturbationPerExecution").innerHTML = "0.0"
        drawWithInputValue(0, number);
    }
}

function psort(size, bound) {
    var input = generateTask(size, bound);
    var output = quicksort(input.slice(), 0, input.length - 1);
    var sorted = oracle(input, output);
    return sorted;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
     document.getElementById("labelProbability").innerHTML = (probability / 1000);
}

function updateValueSize() {
     var size = document.getElementById("size").value;
     document.getElementById("labelSize").innerHTML = size;
}

function updateValueNumber() {
     var number = document.getElementById("number").value;
     document.getElementById("labelNumber").innerHTML = number;
}

function init() {
    draw(0);
    drawWithInputValue(0, number);
    updateValueProba();
    updateValueNumber();
    updateValueSize();
}