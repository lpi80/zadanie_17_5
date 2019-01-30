let os = require('os');
let time = require('./timeConvert');
let colors = require('colors');

colors.setTheme({
    system: 'grey',
    release: 'red',
    cpu: 'blue',
    uptime: 'green',
    name: 'yellow',
    dir: 'gray',
  });
  
function getOSinfo() {
    let type = os.type();
    if(type === 'Darwin') {
        type = 'OSX';
    } else if(type === 'Windows_NT') {
        type = 'Windows';
    }
    const release = os.release();
    const cpu = os.cpus()[0].model;
    const uptime = os.uptime();
    const userInfo = os.userInfo();
    console.log('System:'.system, type);
    console.log('Release:'.release, release);
    console.log('CPU model:'.cpu, cpu);
    console.log('Uptime: ~'.uptime, time.print(uptime) + '       ' + uptime);
    console.log('User name:'.name, userInfo.username);
    console.log('Home dir:'.dir, userInfo.homedir);
}

exports.print = getOSinfo;