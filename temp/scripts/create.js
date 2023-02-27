var fsu = require('fs-utils');
var fs = require('node:fs/promises');

// let args = process.argv[2]

  /*
  process.argv.forEach(function (arg, i) {
    if (i < 2) {
        return;
    } else {
        return console.log(i + ': ' + arg);
    }
  });

  This will generate:
  
  $ node process-2.js one two=three four
  0: node
  1: /Users/mjr/work/node/process-2.js
  2: one
  3: two=three
  4: four
*/

async function main() {
    let running = true;
    while (running = true) {
        process.argv.forEach(function (arg, i) {
            if (i < 2) {
                console.log('null');
            } else {
                console.log(i + ': ' + arg);
            }
          });
          return running = false;
    }
    
    // depositor directory
    // let Depdir = '../../depositor';
    // gameserver directory
    // let GSdir = '../../gameserver'
    // webserver directory
    // let WSdir = '../../webserver'
    // let dirs = [Depdir, GSdir, WSdir];
};

main();




/*
async function main() {
    let running = true;

    // depositor directory
    let Depdir = '../../depositor';
    // gameserver directory
    let GSdir = '../../gameserver'
    // webserver directory
    let WSdir = '../../webserver'
    let dirs = [Depdir, GSdir, WSdir];

    while (running = true) {}

};

async function main() {
    let running = true;

    // depositor directory
    let Depdir = '../../depositor';
    // gameserver directory
    let GSdir = '../../gameserver'
    // webserver directory
    let WSdir = '../../webserver'

    while (running = true) {
        try {
            let doesExist = (dirs) => {
                // let exists = [];
                if (Array.isArray(dirs)) {
                    dirs.forEach((d, i) => {
                    // return dirs.forEach((d, i) => {
                        if (fsu.exists(d)) {
                            return d;
                            // exists.push(d);
                        };
                        return null;
                    });
                } else {
                    return dirs
                }
            }
        } catch (error) {
            
        }
    }
}
*/