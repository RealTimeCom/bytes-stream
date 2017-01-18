/* TEST FILE - Copyright (c) 2017 ranged-stream - Tanase Laurentiu Iulian - https://github.com/RealTimeCom/range-stream */
'use strict';

const ranged = require('./index.js'),
    Readable = require('stream').Readable;

class read extends Readable {
    constructor(s, r) {
        super();
        this.r = r; /*buffer source*/
        this.s = s; /*read size*/
        this.p = 0; /*current pointer*/
        this.l = this.r.length;
    }
}
read.prototype._read = function(size) {
    if (this.p < this.l) {
        console.log('read', this.r.slice(this.p, this.p + this.s).toString());
        this.push(this.r.slice(this.p, this.p + this.s));
        this.p += this.s;
    }
};

let s = Buffer.from('0123456789');
(new read(3, s)).pipe(new ranged([1, 5])).
on('data', d => console.log('data', d.toString())).
on('end', () => console.log('end'));
