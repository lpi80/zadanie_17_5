function time(input) {
    if (input < 0) {
        return 'error';
    } else if (input < 60) {
        return input + 'sec';
    } else if (input < 60 * 60) {
        const min = Math.floor(input / 60);
        const sec = input - min * 60;
        return min + 'min : ' + sec + 'sec'
    } else {
        const hour = Math.floor(input / 3600);
        let min = Math.floor((input - hour * 3600) / 60);
        let sec = input - hour * 3600 - min * 60;
        return hour + 'h : ' + min + 'min : ' + sec + 'sec'
    }
}

exports.print = time;