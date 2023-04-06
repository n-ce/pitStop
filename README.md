# 🏎️ 💨 PITSTOP (<0.4KB)
### Basic performance testing, comparison and analysis suite for JavaScript functions

### Suite
  - **PitStop()** : provides a console table with relevant comparison analysis.
  - **SpeedTest()** : provides time taken for a function to compute.
  - **RandomNumber()** : generates random number for inputs.

### Usage
 ```
 import {pitStop} from 'https://n-ce.github.io/pitStop/dist/pitStop.min.js'
 ```
 - The pitStop function takes three parameters mainly
 - The First parameter is the number of times you want to run functions
 - The Second parameter is an array which takes your function arguments if required otherwise leave it null
 - The Third parameter is a rest parameter which takes your function names
 - ex : pitStop(1000,[arg1,arg2,....],f1,f2,f3,....)

### Requires
  - ES6 modules support
  - a JS console
