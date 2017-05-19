function oracle(input, output) {
    var cpt = 1;
    if (!contains(input, output[0]) || input.length != output.length)
        return false;
    for (var i = 1; i < output.length; i++) {
            if (output[i - 1] > output[i]) {
                return false;
            } else if (contains(input, output[i])) {
                cpt++;
            } else {
                return false;
            }
    }
    return input.length == cpt;
}

function  contains(array, value) {
    for (var i = 0 ; i < array.length ; i++) {
        if (array[i] == value) {
            return true;
        }
    }
    return false;
}