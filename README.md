## Range Stream

**Range Stream - output range bytes from readable stream**

```sh
$ npm install range-stream
```
#### Example
Read range bytes from readable stream `fs.createReadStream()`, start from `10` and end on `20` (not included).
```js
const range = require('range-stream'),fs=require('fs');

fs.createReadStream('/dir/file.txt').// readable stream
pipe(new range([10, 20])).// range start from 10 and end on 20
on('data', d => console.log('data', d.toString()));// output data
```
--------------------------------------------------------
**Range Stream** is licensed under the MIT license. See the included `LICENSE` file for more details.
