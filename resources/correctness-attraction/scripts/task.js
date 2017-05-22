var running = false;
async function run() {
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
        document.getElementById("success").innerHTML = "0.0";
        document.getElementById("nbPerturbationPerExecution").innerHTML = "0.0"
        drawWithInputValue(0, number);
    }
}

function psort(size, bound) {
    var input = generateTask(size, bound);
    var output = input.slice();
    quicksort_instr(output, 0, input.length - 1)
    var sorted = oracle(input, output);
    return sorted;
}

function runCustom() {
     if (document.getElementById("run").value == "Stop") {
            document.getElementById("run").value = "Run";
            run();
        } else {
            stopOthers();
            updateValueProba();
            updateValueSize();
            updateValueNumber();
            document.getElementById("run").value = "Stop";
            run();
        }
}

function demo3() {
    if (document.getElementById("demo3").value == "Stop") {
        document.getElementById("demo3").value = "Demo3";
        run();
    } else {
        stopOthers();
        document.getElementById("number").value = 40;
        document.getElementById("size").value = 100;
        document.getElementById("probability").value = 500;
        document.getElementById("Antifragile").checked = true;
        document.getElementById("Integer").checked = true;
        document.getElementById("Boolean").checked = false;
        updateValueProba();
        updateValueSize();
        updateValueNumber();
        document.getElementById("demo3").value = "Stop";
        run();
    }
}

function demo2() {
    if (document.getElementById("demo2").value == "Stop") {
        document.getElementById("demo2").value = "Demo2";
        run();
    } else {
        stopOthers();
        document.getElementById("number").value = 40;
        document.getElementById("size").value = 200;
        document.getElementById("probability").value = 50;
        document.getElementById("Antifragile").checked = true;
        document.getElementById("Integer").checked = true;
        document.getElementById("Boolean").checked = true;
        updateValueProba();
        updateValueSize();
        updateValueNumber();
        document.getElementById("demo2").value = "Stop";
        run();
    }
}

function demo1() {
    if (document.getElementById("demo1").value == "Stop") {
        document.getElementById("demo1").value = "Demo1";
        run();
    } else {
        stopOthers();
        document.getElementById("number").value = 40;
        document.getElementById("size").value = 100;
        document.getElementById("probability").value = 50;
        document.getElementById("Antifragile").checked = true;
        document.getElementById("Integer").checked = true;
        document.getElementById("Boolean").checked = false;
        updateValueProba();
        updateValueSize();
        updateValueNumber();
        document.getElementById("demo1").value = "Stop";
        run();
    }
}

function stopOthers() {
    if (document.getElementById("demo1").value == "Stop") {
        demo1();
    } else if (document.getElementById("demo2").value == "Stop") {
        demo2();
    } else if (document.getElementById("demo3").value == "Stop") {
        demo3();
    } else if (document.getElementById("run").value == "Stop") {
        runCustom();
    }
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