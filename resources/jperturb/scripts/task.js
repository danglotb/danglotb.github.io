function fillValue(bound) {
    document.getElementById("value").innerHTML = generateTask(bound);
}

function generateTask(size, bound) {
    return Math.floor(Math.random() * bound + 1);
}