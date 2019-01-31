const OSinfo = require('./modules/OSinfo');


process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    const input = process.stdin.read();
    if (input !== null) {
        const instruction = input.trim();
        switch (instruction) {
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
});