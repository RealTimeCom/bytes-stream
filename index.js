/* SOURCE FILE - Copyright (c) 2017 range-stream - Tanase Laurentiu Iulian - https://github.com/RealTimeCom/range-stream */
'use strict';
const Transform = require('stream').Transform;

class range extends Transform {
    constructor(r) {
        super();
        this.r = r;
        this.t = 0; /*total bytes received*/
    }
}
ranged.prototype._transform = function(chunk, enc, cb) {
    let s = this.t,
        /*save prev value*/
        l = chunk.length;
    this.t += l;
    if (s < this.r[1]) { /*not ended*/
        if (s >= this.r[0]) {
            if (this.t > this.r[1]) {
                this.push(chunk.slice(0, this.r[1] - s));
            } else {
                this.push(chunk);
            }
        } else {
            if (this.t > this.r[1]) {
                this.push(chunk.slice(this.r[0] - s, this.r[1] - s));
            } else {
                if (this.r[0] - s < l) { /*avoid slice empty, slice(chunk.length)*/
                    this.push(chunk.slice(this.r[0] - s));
                }
            }
        }
    }
    cb();
};

module.exports = range;