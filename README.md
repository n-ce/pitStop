# 🏎️ 💨 PITSTOP
### Console based Basic performance testing, comparison and analysis suite for JavaScript functions
```
pitStop(
  1000, // iterations
  [], // put function args inside the array if required
  forLoop, whileLoop // functions to compare
);
pitStop(
  100000,
  [12, 5],
  lcmLow, lcmHigh, lcmgcd, lcmgcddr
);
```
![20230406_134840](https://user-images.githubusercontent.com/69345507/230317578-c569211b-d87c-479c-8b22-5fdb6843e3a0.jpg)


### Suite
  - **pitStop()** : provides a console table with relevant comparison analysis.
  - **timeTaken()** : provides time taken for a function to compute.
  - **randomNum()** : generates random number for inputs.

### Usage
 ```
 import { pitStop } from 'https://cdn.jsdelivr.net/gh/n-ce/pitStop/pitStop.js';
 ```
 - The pitStop function takes three parameters mainly
 - The First parameter is the number of times you want to run functions
 - The Second parameter is an array which takes your function arguments if required otherwise leave it null
 - The Third parameter is a rest parameter which takes your function names
 - ex : pitStop(1000,[arg1,arg2,....],f1,f2,f3,....)

